import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ModifyTransitGatewayPrefixListReferenceRequest,
  ModifyTransitGatewayPrefixListReferenceResult,
} from "../models/models_4";
import {
  deserializeAws_ec2ModifyTransitGatewayPrefixListReferenceCommand,
  serializeAws_ec2ModifyTransitGatewayPrefixListReferenceCommand,
} from "../protocols/Aws_ec2";
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

export type ModifyTransitGatewayPrefixListReferenceCommandInput = ModifyTransitGatewayPrefixListReferenceRequest;
export type ModifyTransitGatewayPrefixListReferenceCommandOutput = ModifyTransitGatewayPrefixListReferenceResult &
  __MetadataBearer;

/**
 * <p>Modifies a reference (route) to a prefix list in a specified transit gateway route table.</p>
 */
export class ModifyTransitGatewayPrefixListReferenceCommand extends $Command<
  ModifyTransitGatewayPrefixListReferenceCommandInput,
  ModifyTransitGatewayPrefixListReferenceCommandOutput,
  EC2ClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyTransitGatewayPrefixListReferenceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ModifyTransitGatewayPrefixListReferenceCommandInput,
    ModifyTransitGatewayPrefixListReferenceCommandOutput
  > {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyTransitGatewayPrefixListReferenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyTransitGatewayPrefixListReferenceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyTransitGatewayPrefixListReferenceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyTransitGatewayPrefixListReferenceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyTransitGatewayPrefixListReferenceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyTransitGatewayPrefixListReferenceCommandOutput> {
    return deserializeAws_ec2ModifyTransitGatewayPrefixListReferenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
