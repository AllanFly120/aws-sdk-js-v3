import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../LambdaClient";
import { Concurrency, PutFunctionConcurrencyRequest } from "../models/index";
import {
  deserializeAws_restJson1_1PutFunctionConcurrencyCommand,
  serializeAws_restJson1_1PutFunctionConcurrencyCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type PutFunctionConcurrencyCommandInput = PutFunctionConcurrencyRequest;
export type PutFunctionConcurrencyCommandOutput = Concurrency;

export class PutFunctionConcurrencyCommand extends $Command<
  PutFunctionConcurrencyCommandInput,
  PutFunctionConcurrencyCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutFunctionConcurrencyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutFunctionConcurrencyCommandInput,
    PutFunctionConcurrencyCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutFunctionConcurrencyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1PutFunctionConcurrencyCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutFunctionConcurrencyCommandOutput> {
    return deserializeAws_restJson1_1PutFunctionConcurrencyCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}