import {
  PinpointEmailClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../PinpointEmailClient";
import {
  PutEmailIdentityFeedbackAttributesRequest,
  PutEmailIdentityFeedbackAttributesResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1PutEmailIdentityFeedbackAttributesCommand,
  serializeAws_restJson1_1PutEmailIdentityFeedbackAttributesCommand
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

export type PutEmailIdentityFeedbackAttributesCommandInput = PutEmailIdentityFeedbackAttributesRequest;
export type PutEmailIdentityFeedbackAttributesCommandOutput = PutEmailIdentityFeedbackAttributesResponse;

export class PutEmailIdentityFeedbackAttributesCommand extends $Command<
  PutEmailIdentityFeedbackAttributesCommandInput,
  PutEmailIdentityFeedbackAttributesCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutEmailIdentityFeedbackAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutEmailIdentityFeedbackAttributesCommandInput,
    PutEmailIdentityFeedbackAttributesCommandOutput
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
    input: PutEmailIdentityFeedbackAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1PutEmailIdentityFeedbackAttributesCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutEmailIdentityFeedbackAttributesCommandOutput> {
    return deserializeAws_restJson1_1PutEmailIdentityFeedbackAttributesCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}