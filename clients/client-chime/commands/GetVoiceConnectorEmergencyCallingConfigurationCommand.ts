import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  GetVoiceConnectorEmergencyCallingConfigurationRequest,
  GetVoiceConnectorEmergencyCallingConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetVoiceConnectorEmergencyCallingConfigurationCommand,
  serializeAws_restJson1GetVoiceConnectorEmergencyCallingConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetVoiceConnectorEmergencyCallingConfigurationCommandInput = GetVoiceConnectorEmergencyCallingConfigurationRequest;
export type GetVoiceConnectorEmergencyCallingConfigurationCommandOutput = GetVoiceConnectorEmergencyCallingConfigurationResponse &
  __MetadataBearer;

/**
 * <p>Gets the emergency calling configuration details for the specified Amazon Chime Voice Connector.</p>
 */
export class GetVoiceConnectorEmergencyCallingConfigurationCommand extends $Command<
  GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
  GetVoiceConnectorEmergencyCallingConfigurationCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetVoiceConnectorEmergencyCallingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    GetVoiceConnectorEmergencyCallingConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetVoiceConnectorEmergencyCallingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetVoiceConnectorEmergencyCallingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetVoiceConnectorEmergencyCallingConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetVoiceConnectorEmergencyCallingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetVoiceConnectorEmergencyCallingConfigurationCommandOutput> {
    return deserializeAws_restJson1GetVoiceConnectorEmergencyCallingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
