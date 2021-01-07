import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListStreamingDistributionsRequest, ListStreamingDistributionsResult } from "../models/models_1";
import {
  deserializeAws_restXmlListStreamingDistributionsCommand,
  serializeAws_restXmlListStreamingDistributionsCommand,
} from "../protocols/Aws_restXml";
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

export type ListStreamingDistributionsCommandInput = ListStreamingDistributionsRequest;
export type ListStreamingDistributionsCommandOutput = ListStreamingDistributionsResult & __MetadataBearer;

/**
 * <p>List streaming distributions. </p>
 */
export class ListStreamingDistributionsCommand extends $Command<
  ListStreamingDistributionsCommandInput,
  ListStreamingDistributionsCommandOutput,
  CloudFrontClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStreamingDistributionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStreamingDistributionsCommandInput, ListStreamingDistributionsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListStreamingDistributionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStreamingDistributionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListStreamingDistributionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStreamingDistributionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListStreamingDistributionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListStreamingDistributionsCommandOutput> {
    return deserializeAws_restXmlListStreamingDistributionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
