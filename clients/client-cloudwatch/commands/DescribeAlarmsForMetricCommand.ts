import {
  CloudWatchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudWatchClient";
import {
  DescribeAlarmsForMetricInput,
  DescribeAlarmsForMetricOutput
} from "../models/index";
import {
  deserializeAws_queryDescribeAlarmsForMetricCommand,
  serializeAws_queryDescribeAlarmsForMetricCommand
} from "../protocols/Aws_query";
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

export type DescribeAlarmsForMetricCommandInput = DescribeAlarmsForMetricInput;
export type DescribeAlarmsForMetricCommandOutput = DescribeAlarmsForMetricOutput;

export class DescribeAlarmsForMetricCommand extends $Command<
  DescribeAlarmsForMetricCommandInput,
  DescribeAlarmsForMetricCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAlarmsForMetricCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeAlarmsForMetricCommandInput,
    DescribeAlarmsForMetricCommandOutput
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
    input: DescribeAlarmsForMetricCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAlarmsForMetricCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAlarmsForMetricCommandOutput> {
    return deserializeAws_queryDescribeAlarmsForMetricCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}