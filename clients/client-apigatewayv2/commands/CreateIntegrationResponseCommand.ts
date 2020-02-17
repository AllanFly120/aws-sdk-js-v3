import {
  ApiGatewayV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ApiGatewayV2Client";
import {
  CreateIntegrationResponseRequest,
  CreateIntegrationResponseResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1CreateIntegrationResponseCommand,
  serializeAws_restJson1_1CreateIntegrationResponseCommand
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

export type CreateIntegrationResponseCommandInput = CreateIntegrationResponseRequest;
export type CreateIntegrationResponseCommandOutput = CreateIntegrationResponseResponse;

export class CreateIntegrationResponseCommand extends $Command<
  CreateIntegrationResponseCommandInput,
  CreateIntegrationResponseCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateIntegrationResponseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateIntegrationResponseCommandInput,
    CreateIntegrationResponseCommandOutput
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
    input: CreateIntegrationResponseCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1CreateIntegrationResponseCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateIntegrationResponseCommandOutput> {
    return deserializeAws_restJson1_1CreateIntegrationResponseCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}