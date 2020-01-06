import {
  CloudDirectoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudDirectoryClient";
import { DeleteFacetRequest, DeleteFacetResponse } from "../models/index";
import {
  deserializeAws_restJson1_1DeleteFacetCommand,
  serializeAws_restJson1_1DeleteFacetCommand
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
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type DeleteFacetCommandInput = DeleteFacetRequest;
export type DeleteFacetCommandOutput = DeleteFacetResponse;

export class DeleteFacetCommand extends $Command<
  DeleteFacetCommandInput,
  DeleteFacetCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFacetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFacetCommandInput, DeleteFacetCommandOutput> {
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
    input: DeleteFacetCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DeleteFacetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DeleteFacetCommandOutput> {
    return deserializeAws_restJson1_1DeleteFacetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
