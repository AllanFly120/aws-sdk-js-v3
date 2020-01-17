import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IAMClient";
import {
  CreateServiceLinkedRoleRequest,
  CreateServiceLinkedRoleResponse
} from "../models/index";
import {
  deserializeAws_queryCreateServiceLinkedRoleCommand,
  serializeAws_queryCreateServiceLinkedRoleCommand
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
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type CreateServiceLinkedRoleCommandInput = CreateServiceLinkedRoleRequest;
export type CreateServiceLinkedRoleCommandOutput = CreateServiceLinkedRoleResponse;

export class CreateServiceLinkedRoleCommand extends $Command<
  CreateServiceLinkedRoleCommandInput,
  CreateServiceLinkedRoleCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateServiceLinkedRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateServiceLinkedRoleCommandInput,
    CreateServiceLinkedRoleCommandOutput
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
    input: CreateServiceLinkedRoleCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryCreateServiceLinkedRoleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateServiceLinkedRoleCommandOutput> {
    return deserializeAws_queryCreateServiceLinkedRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
