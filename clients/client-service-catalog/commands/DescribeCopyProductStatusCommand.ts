import {
  ServiceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ServiceCatalogClient";
import {
  DescribeCopyProductStatusInput,
  DescribeCopyProductStatusOutput
} from "../models/index";
import {
  deserializeAws_json1_1DescribeCopyProductStatusCommand,
  serializeAws_json1_1DescribeCopyProductStatusCommand
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

export type DescribeCopyProductStatusCommandInput = DescribeCopyProductStatusInput;
export type DescribeCopyProductStatusCommandOutput = DescribeCopyProductStatusOutput;

export class DescribeCopyProductStatusCommand extends $Command<
  DescribeCopyProductStatusCommandInput,
  DescribeCopyProductStatusCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCopyProductStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeCopyProductStatusCommandInput,
    DescribeCopyProductStatusCommandOutput
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
    input: DescribeCopyProductStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCopyProductStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCopyProductStatusCommandOutput> {
    return deserializeAws_json1_1DescribeCopyProductStatusCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}