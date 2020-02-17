import {
  SNSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SNSClient";
import {
  GetEndpointAttributesInput,
  GetEndpointAttributesResponse
} from "../models/index";
import {
  deserializeAws_queryGetEndpointAttributesCommand,
  serializeAws_queryGetEndpointAttributesCommand
} from "../protocols/Aws_query";
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

export type GetEndpointAttributesCommandInput = GetEndpointAttributesInput;
export type GetEndpointAttributesCommandOutput = GetEndpointAttributesResponse;

export class GetEndpointAttributesCommand extends $Command<
  GetEndpointAttributesCommandInput,
  GetEndpointAttributesCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEndpointAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetEndpointAttributesCommandInput,
    GetEndpointAttributesCommandOutput
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
    input: GetEndpointAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetEndpointAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEndpointAttributesCommandOutput> {
    return deserializeAws_queryGetEndpointAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
