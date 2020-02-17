import {
  QuickSightClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../QuickSightClient";
import { ListIngestionsRequest, ListIngestionsResponse } from "../models/index";
import {
  deserializeAws_restJson1_1ListIngestionsCommand,
  serializeAws_restJson1_1ListIngestionsCommand
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

export type ListIngestionsCommandInput = ListIngestionsRequest;
export type ListIngestionsCommandOutput = ListIngestionsResponse;

export class ListIngestionsCommand extends $Command<
  ListIngestionsCommandInput,
  ListIngestionsCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListIngestionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListIngestionsCommandInput, ListIngestionsCommandOutput> {
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
    input: ListIngestionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListIngestionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListIngestionsCommandOutput> {
    return deserializeAws_restJson1_1ListIngestionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}