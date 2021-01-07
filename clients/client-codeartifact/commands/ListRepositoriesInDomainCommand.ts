import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { ListRepositoriesInDomainRequest, ListRepositoriesInDomainResult } from "../models/models_0";
import {
  deserializeAws_restJson1ListRepositoriesInDomainCommand,
  serializeAws_restJson1ListRepositoriesInDomainCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ListRepositoriesInDomainCommandInput = ListRepositoriesInDomainRequest;
export type ListRepositoriesInDomainCommandOutput = ListRepositoriesInDomainResult & __MetadataBearer;

/**
 * <p>
 *        Returns a list of
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">
 *                <code>RepositorySummary</code>
 *             </a>
 *        objects. Each <code>RepositorySummary</code> contains information about a repository in the specified domain and that matches the input
 *        parameters.
 *      </p>
 */
export class ListRepositoriesInDomainCommand extends $Command<
  ListRepositoriesInDomainCommandInput,
  ListRepositoriesInDomainCommandOutput,
  CodeartifactClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRepositoriesInDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRepositoriesInDomainCommandInput, ListRepositoriesInDomainCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "ListRepositoriesInDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRepositoriesInDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRepositoriesInDomainResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRepositoriesInDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRepositoriesInDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRepositoriesInDomainCommandOutput> {
    return deserializeAws_restJson1ListRepositoriesInDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
