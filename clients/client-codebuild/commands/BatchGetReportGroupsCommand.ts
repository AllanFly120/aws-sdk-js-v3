import {
  CodeBuildClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CodeBuildClient";
import {
  BatchGetReportGroupsInput,
  BatchGetReportGroupsOutput
} from "../models/index";
import {
  deserializeAws_json1_1BatchGetReportGroupsCommand,
  serializeAws_json1_1BatchGetReportGroupsCommand
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

export type BatchGetReportGroupsCommandInput = BatchGetReportGroupsInput;
export type BatchGetReportGroupsCommandOutput = BatchGetReportGroupsOutput;

export class BatchGetReportGroupsCommand extends $Command<
  BatchGetReportGroupsCommandInput,
  BatchGetReportGroupsCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetReportGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    BatchGetReportGroupsCommandInput,
    BatchGetReportGroupsCommandOutput
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
    input: BatchGetReportGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetReportGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetReportGroupsCommandOutput> {
    return deserializeAws_json1_1BatchGetReportGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}