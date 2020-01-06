import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ElasticsearchServiceClient";
import {
  GetUpgradeStatusRequest,
  GetUpgradeStatusResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1GetUpgradeStatusCommand,
  serializeAws_restJson1_1GetUpgradeStatusCommand
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

export type GetUpgradeStatusCommandInput = GetUpgradeStatusRequest;
export type GetUpgradeStatusCommandOutput = GetUpgradeStatusResponse;

export class GetUpgradeStatusCommand extends $Command<
  GetUpgradeStatusCommandInput,
  GetUpgradeStatusCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetUpgradeStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUpgradeStatusCommandInput, GetUpgradeStatusCommandOutput> {
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
    input: GetUpgradeStatusCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1GetUpgradeStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetUpgradeStatusCommandOutput> {
    return deserializeAws_restJson1_1GetUpgradeStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
