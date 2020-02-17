import {
  MobileClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MobileClient";
import { DeleteProjectRequest, DeleteProjectResult } from "../models/index";
import {
  deserializeAws_restJson1_1DeleteProjectCommand,
  serializeAws_restJson1_1DeleteProjectCommand
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

export type DeleteProjectCommandInput = DeleteProjectRequest;
export type DeleteProjectCommandOutput = DeleteProjectResult;

export class DeleteProjectCommand extends $Command<
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
  MobileClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteProjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MobileClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteProjectCommandInput, DeleteProjectCommandOutput> {
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
    input: DeleteProjectCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DeleteProjectCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteProjectCommandOutput> {
    return deserializeAws_restJson1_1DeleteProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}