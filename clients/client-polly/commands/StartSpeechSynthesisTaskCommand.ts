import {
  PollyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../PollyClient";
import {
  StartSpeechSynthesisTaskInput,
  StartSpeechSynthesisTaskOutput
} from "../models/index";
import {
  deserializeAws_restJson1_1StartSpeechSynthesisTaskCommand,
  serializeAws_restJson1_1StartSpeechSynthesisTaskCommand
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

export type StartSpeechSynthesisTaskCommandInput = StartSpeechSynthesisTaskInput;
export type StartSpeechSynthesisTaskCommandOutput = StartSpeechSynthesisTaskOutput;

export class StartSpeechSynthesisTaskCommand extends $Command<
  StartSpeechSynthesisTaskCommandInput,
  StartSpeechSynthesisTaskCommandOutput,
  PollyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartSpeechSynthesisTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PollyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StartSpeechSynthesisTaskCommandInput,
    StartSpeechSynthesisTaskCommandOutput
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
    input: StartSpeechSynthesisTaskCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1StartSpeechSynthesisTaskCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartSpeechSynthesisTaskCommandOutput> {
    return deserializeAws_restJson1_1StartSpeechSynthesisTaskCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}