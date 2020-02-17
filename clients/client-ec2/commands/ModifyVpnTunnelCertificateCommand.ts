import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EC2Client";
import {
  ModifyVpnTunnelCertificateRequest,
  ModifyVpnTunnelCertificateResult
} from "../models/index";
import {
  deserializeAws_ec2ModifyVpnTunnelCertificateCommand,
  serializeAws_ec2ModifyVpnTunnelCertificateCommand
} from "../protocols/Aws_ec2";
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

export type ModifyVpnTunnelCertificateCommandInput = ModifyVpnTunnelCertificateRequest;
export type ModifyVpnTunnelCertificateCommandOutput = ModifyVpnTunnelCertificateResult;

export class ModifyVpnTunnelCertificateCommand extends $Command<
  ModifyVpnTunnelCertificateCommandInput,
  ModifyVpnTunnelCertificateCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyVpnTunnelCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ModifyVpnTunnelCertificateCommandInput,
    ModifyVpnTunnelCertificateCommandOutput
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
    input: ModifyVpnTunnelCertificateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVpnTunnelCertificateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVpnTunnelCertificateCommandOutput> {
    return deserializeAws_ec2ModifyVpnTunnelCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}