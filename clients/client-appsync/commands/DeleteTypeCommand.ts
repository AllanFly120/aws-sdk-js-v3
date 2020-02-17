import {
  AppSyncClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AppSyncClient";
import { DeleteTypeRequest, DeleteTypeResponse } from "../models/index";
import {
  deserializeAws_restJson1_1DeleteTypeCommand,
  serializeAws_restJson1_1DeleteTypeCommand
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

export type DeleteTypeCommandInput = DeleteTypeRequest;
export type DeleteTypeCommandOutput = DeleteTypeResponse;

export class DeleteTypeCommand extends $Command<
  DeleteTypeCommandInput,
  DeleteTypeCommandOutput,
  AppSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTypeCommandInput, DeleteTypeCommandOutput> {
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
    input: DeleteTypeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DeleteTypeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTypeCommandOutput> {
    return deserializeAws_restJson1_1DeleteTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}