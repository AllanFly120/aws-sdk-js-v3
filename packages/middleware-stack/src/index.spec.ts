import { MiddlewareStack } from "./";
import {
  FinalizeHandlerArguments,
  InitializeMiddleware,
  FinalizeRequestMiddleware,
  BuildMiddleware,
  InitializeHandlerOutput,
  DeserializeHandlerArguments,
  MiddlewareType,
  Handler,
  DeserializeMiddleware
} from "@aws-sdk/types";

type input = Array<string>;
type output = object;

//return tagged union to make compiler happy
function getConcatMiddleware(message: string): MiddlewareType<input, output> {
  return (next: Handler<input, output>): Handler<input, output> => {
    return (args: any): Promise<InitializeHandlerOutput<output>> =>
      next({
        ...args,
        input: args.input.concat(message)
      });
  };
}

describe("MiddlewareStack", () => {
  it("should resolve the stack into a composed handler", async () => {
    const stack = new MiddlewareStack<input, output>();
    const secondMW = getConcatMiddleware("second") as InitializeMiddleware<
      input,
      output
    >;
    stack.add(secondMW);
    stack.addRelativeTo(
      getConcatMiddleware("first") as InitializeMiddleware<input, output>,
      { relation: "before", toMiddleware: secondMW }
    );
    stack.add(getConcatMiddleware("fourth") as BuildMiddleware<input, output>, {
      step: "build",
      name: "fourth"
    });
    stack.add(getConcatMiddleware("third") as BuildMiddleware<input, output>, {
      step: "build",
      priority: "high"
    });
    stack.add(
      getConcatMiddleware("fifth") as FinalizeRequestMiddleware<input, output>,
      { step: "finalizeRequest", name: "fifth" }
    );
    stack.add(
      getConcatMiddleware("seventh") as FinalizeRequestMiddleware<
        input,
        output
      >,
      { step: "finalizeRequest" }
    );
    stack.addRelativeTo(
      getConcatMiddleware("sixth") as FinalizeRequestMiddleware<input, output>,
      {
        step: "finalizeRequest",
        relation: "after",
        toMiddleware: "fifth"
      }
    );
    stack.add(
      getConcatMiddleware("ninth") as DeserializeMiddleware<input, output>,
      { priority: "low", step: "deserialize" }
    );
    stack.addRelativeTo(
      getConcatMiddleware("eighth") as DeserializeMiddleware<input, output>,
      { step: "deserialize", relation: "before", toMiddleware: "doesnt_exist" }
    );
    const inner = jest.fn();

    const composed = stack.resolve(inner, {} as any);
    await composed({ input: [] });

    expect(inner.mock.calls.length).toBe(1);
    expect(inner).toBeCalledWith({
      input: [
        "first",
        "second",
        "third",
        "fourth",
        "fifth",
        "sixth",
        "seventh",
        "eighth",
        "ninth"
      ]
    });
  });

  it("should allow cloning", async () => {
    const stack = new MiddlewareStack<input, output>();
    const secondMiddleware = getConcatMiddleware(
      "second"
    ) as InitializeMiddleware<input, output>;
    stack.add(secondMiddleware);
    stack.add(
      getConcatMiddleware("first") as InitializeMiddleware<input, output>,
      {
        name: "first",
        priority: "high"
      }
    );

    const secondStack = stack.clone();

    let inner = jest.fn(({ input }: DeserializeHandlerArguments<input>) => {
      expect(input).toEqual(["first", "second"]);
      return Promise.resolve({ response: {} });
    });
    await secondStack.resolve(inner, {} as any)({ input: [] });
    expect(inner.mock.calls.length).toBe(1);
    expect(() =>
      secondStack.add(secondMiddleware, { name: "first" })
    ).toThrowError("Duplicated middleware name 'first'");
    expect(() =>
      secondStack.addRelativeTo(
        getConcatMiddleware("first") as InitializeMiddleware<input, output>,
        { name: "first", relation: "before", toMiddleware: secondMiddleware }
      )
    ).toThrowError("Duplicated middleware name 'first'");
  });

  it("should allow combining stacks", async () => {
    const stack = new MiddlewareStack<input, output>();
    stack.add(getConcatMiddleware("second") as InitializeMiddleware<
      input,
      output
    >);
    stack.add(
      getConcatMiddleware("first") as InitializeMiddleware<input, output>,
      {
        name: "first",
        priority: "high"
      }
    );

    const secondStack = new MiddlewareStack<input, output>();
    secondStack.add(
      getConcatMiddleware("fourth") as FinalizeRequestMiddleware<input, output>,
      { step: "build" }
    );
    secondStack.add(
      getConcatMiddleware("third") as FinalizeRequestMiddleware<input, output>,
      { step: "build", priority: "high" }
    );

    let inner = jest.fn(({ input }: DeserializeHandlerArguments<input>) => {
      expect(input).toEqual(["first", "second", "third", "fourth"]);
      return Promise.resolve({ response: {} });
    });
    await stack.concat(secondStack).resolve(inner, {} as any)({ input: [] });

    expect(inner.mock.calls.length).toBe(1);

    secondStack.add(
      getConcatMiddleware("first") as FinalizeRequestMiddleware<input, output>,
      { step: "build", priority: "high", name: "first" }
    );
    expect(() => stack.concat(secondStack)).toThrow(
      "Duplicated middleware name 'first'"
    );
  });

  it("should allow the removal of middleware by constructor identity", async () => {
    const MyMiddleware = getConcatMiddleware(
      "remove me!"
    ) as InitializeMiddleware<input, output>;
    const stack = new MiddlewareStack<input, output>();
    stack.add(MyMiddleware);
    stack.add(getConcatMiddleware("don't remove me") as InitializeMiddleware<
      input,
      output
    >);

    await stack.resolve(
      ({ input }: FinalizeHandlerArguments<Array<string>>) => {
        expect(input.sort()).toEqual(["don't remove me", "remove me!"]);
        return Promise.resolve({ response: {} });
      },
      {} as any
    )({ input: [] });

    stack.remove(MyMiddleware);

    await stack.resolve(
      ({ input }: FinalizeHandlerArguments<Array<string>>) => {
        expect(input).toEqual(["don't remove me"]);
        return Promise.resolve({ response: {} });
      },
      {} as any
    )({ input: [] });
  });

  it("should allow the removal of middleware by tag", async () => {
    const stack = new MiddlewareStack<input, output>();
    stack.add(
      getConcatMiddleware("not removed") as InitializeMiddleware<input, output>,
      {
        tags: ["foo", "bar"]
      }
    );
    stack.add(
      getConcatMiddleware("remove me!") as InitializeMiddleware<input, output>,
      {
        tags: ["foo", "bar", "baz"]
      }
    );

    await stack.resolve(
      ({ input }: FinalizeHandlerArguments<Array<string>>) => {
        expect(input.sort()).toEqual(["not removed", "remove me!"]);
        return Promise.resolve({ response: {} });
      },
      {} as any
    )({ input: [] });

    stack.removeByTag("baz");

    await stack.resolve(
      ({ input }: DeserializeHandlerArguments<Array<string>>) => {
        expect(input).toEqual(["not removed"]);
        return Promise.resolve({ response: {} });
      },
      {} as any
    )({ input: [] });
  });
});
