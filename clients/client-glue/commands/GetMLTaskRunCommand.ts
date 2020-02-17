import {
  GlueClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GlueClient";
import { GetMLTaskRunRequest, GetMLTaskRunResponse } from "../models/index";
import {
  deserializeAws_json1_1GetMLTaskRunCommand,
  serializeAws_json1_1GetMLTaskRunCommand
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

export type GetMLTaskRunCommandInput = GetMLTaskRunRequest;
export type GetMLTaskRunCommandOutput = GetMLTaskRunResponse;

export class GetMLTaskRunCommand extends $Command<
  GetMLTaskRunCommandInput,
  GetMLTaskRunCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMLTaskRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMLTaskRunCommandInput, GetMLTaskRunCommandOutput> {
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
    input: GetMLTaskRunCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMLTaskRunCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMLTaskRunCommandOutput> {
    return deserializeAws_json1_1GetMLTaskRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
