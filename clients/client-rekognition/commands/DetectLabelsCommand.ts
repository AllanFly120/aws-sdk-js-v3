import {
  RekognitionClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RekognitionClient";
import { DetectLabelsRequest, DetectLabelsResponse } from "../models/index";
import {
  deserializeAws_json1_1DetectLabelsCommand,
  serializeAws_json1_1DetectLabelsCommand
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
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type DetectLabelsCommandInput = DetectLabelsRequest;
export type DetectLabelsCommandOutput = DetectLabelsResponse;

export class DetectLabelsCommand extends $Command<
  DetectLabelsCommandInput,
  DetectLabelsCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetectLabelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectLabelsCommandInput, DetectLabelsCommandOutput> {
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
    input: DetectLabelsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectLabelsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DetectLabelsCommandOutput> {
    return deserializeAws_json1_1DetectLabelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
