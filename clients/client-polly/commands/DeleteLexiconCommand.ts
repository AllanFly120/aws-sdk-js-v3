import {
  PollyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../PollyClient";
import { DeleteLexiconInput, DeleteLexiconOutput } from "../models/index";
import {
  deserializeAws_restJson1_1DeleteLexiconCommand,
  serializeAws_restJson1_1DeleteLexiconCommand
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

export type DeleteLexiconCommandInput = DeleteLexiconInput;
export type DeleteLexiconCommandOutput = DeleteLexiconOutput;

export class DeleteLexiconCommand extends $Command<
  DeleteLexiconCommandInput,
  DeleteLexiconCommandOutput,
  PollyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLexiconCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PollyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLexiconCommandInput, DeleteLexiconCommandOutput> {
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
    input: DeleteLexiconCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DeleteLexiconCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteLexiconCommandOutput> {
    return deserializeAws_restJson1_1DeleteLexiconCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}