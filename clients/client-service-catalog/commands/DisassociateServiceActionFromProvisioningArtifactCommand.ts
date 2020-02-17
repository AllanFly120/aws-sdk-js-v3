import {
  ServiceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ServiceCatalogClient";
import {
  DisassociateServiceActionFromProvisioningArtifactInput,
  DisassociateServiceActionFromProvisioningArtifactOutput
} from "../models/index";
import {
  deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand,
  serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand
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

export type DisassociateServiceActionFromProvisioningArtifactCommandInput = DisassociateServiceActionFromProvisioningArtifactInput;
export type DisassociateServiceActionFromProvisioningArtifactCommandOutput = DisassociateServiceActionFromProvisioningArtifactOutput;

export class DisassociateServiceActionFromProvisioningArtifactCommand extends $Command<
  DisassociateServiceActionFromProvisioningArtifactCommandInput,
  DisassociateServiceActionFromProvisioningArtifactCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(
    readonly input: DisassociateServiceActionFromProvisioningArtifactCommandInput
  ) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociateServiceActionFromProvisioningArtifactCommandInput,
    DisassociateServiceActionFromProvisioningArtifactCommandOutput
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
    input: DisassociateServiceActionFromProvisioningArtifactCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateServiceActionFromProvisioningArtifactCommandOutput> {
    return deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}