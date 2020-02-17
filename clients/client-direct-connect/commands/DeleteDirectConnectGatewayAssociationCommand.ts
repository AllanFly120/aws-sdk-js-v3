import {
  DirectConnectClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DirectConnectClient";
import {
  DeleteDirectConnectGatewayAssociationRequest,
  DeleteDirectConnectGatewayAssociationResult
} from "../models/index";
import {
  deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand,
  serializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand
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

export type DeleteDirectConnectGatewayAssociationCommandInput = DeleteDirectConnectGatewayAssociationRequest;
export type DeleteDirectConnectGatewayAssociationCommandOutput = DeleteDirectConnectGatewayAssociationResult;

export class DeleteDirectConnectGatewayAssociationCommand extends $Command<
  DeleteDirectConnectGatewayAssociationCommandInput,
  DeleteDirectConnectGatewayAssociationCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(
    readonly input: DeleteDirectConnectGatewayAssociationCommandInput
  ) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteDirectConnectGatewayAssociationCommandInput,
    DeleteDirectConnectGatewayAssociationCommandOutput
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
    input: DeleteDirectConnectGatewayAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDirectConnectGatewayAssociationCommandOutput> {
    return deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}