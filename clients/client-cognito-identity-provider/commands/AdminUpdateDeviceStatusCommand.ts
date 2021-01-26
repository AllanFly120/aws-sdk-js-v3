import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { AdminUpdateDeviceStatusRequest, AdminUpdateDeviceStatusResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AdminUpdateDeviceStatusCommand,
  serializeAws_json1_1AdminUpdateDeviceStatusCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

export type AdminUpdateDeviceStatusCommandInput = AdminUpdateDeviceStatusRequest;
export type AdminUpdateDeviceStatusCommandOutput = AdminUpdateDeviceStatusResponse & __MetadataBearer;

/**
 * <p>Updates the device status as an administrator.</p>
 *         <p>Calling this action requires developer credentials.</p>
 */
export class AdminUpdateDeviceStatusCommand extends $Command<
  AdminUpdateDeviceStatusCommandInput,
  AdminUpdateDeviceStatusCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminUpdateDeviceStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AdminUpdateDeviceStatusCommandInput, AdminUpdateDeviceStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminUpdateDeviceStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminUpdateDeviceStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminUpdateDeviceStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminUpdateDeviceStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminUpdateDeviceStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminUpdateDeviceStatusCommandOutput> {
    return deserializeAws_json1_1AdminUpdateDeviceStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
