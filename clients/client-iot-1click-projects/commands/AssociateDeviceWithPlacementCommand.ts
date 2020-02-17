import {
  IoT1ClickProjectsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IoT1ClickProjectsClient";
import {
  AssociateDeviceWithPlacementRequest,
  AssociateDeviceWithPlacementResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1AssociateDeviceWithPlacementCommand,
  serializeAws_restJson1_1AssociateDeviceWithPlacementCommand
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

export type AssociateDeviceWithPlacementCommandInput = AssociateDeviceWithPlacementRequest;
export type AssociateDeviceWithPlacementCommandOutput = AssociateDeviceWithPlacementResponse;

export class AssociateDeviceWithPlacementCommand extends $Command<
  AssociateDeviceWithPlacementCommandInput,
  AssociateDeviceWithPlacementCommandOutput,
  IoT1ClickProjectsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateDeviceWithPlacementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickProjectsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AssociateDeviceWithPlacementCommandInput,
    AssociateDeviceWithPlacementCommandOutput
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
    input: AssociateDeviceWithPlacementCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1AssociateDeviceWithPlacementCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateDeviceWithPlacementCommandOutput> {
    return deserializeAws_restJson1_1AssociateDeviceWithPlacementCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}