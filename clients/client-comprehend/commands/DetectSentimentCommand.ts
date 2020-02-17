import {
  ComprehendClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ComprehendClient";
import {
  DetectSentimentRequest,
  DetectSentimentResponse
} from "../models/index";
import {
  deserializeAws_json1_1DetectSentimentCommand,
  serializeAws_json1_1DetectSentimentCommand
} from "../protocols/Aws_json1_1";
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

export type DetectSentimentCommandInput = DetectSentimentRequest;
export type DetectSentimentCommandOutput = DetectSentimentResponse;

export class DetectSentimentCommand extends $Command<
  DetectSentimentCommandInput,
  DetectSentimentCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetectSentimentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectSentimentCommandInput, DetectSentimentCommandOutput> {
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
    input: DetectSentimentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectSentimentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DetectSentimentCommandOutput> {
    return deserializeAws_json1_1DetectSentimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}