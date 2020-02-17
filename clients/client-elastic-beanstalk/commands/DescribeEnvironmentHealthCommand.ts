import {
  ElasticBeanstalkClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ElasticBeanstalkClient";
import {
  DescribeEnvironmentHealthRequest,
  DescribeEnvironmentHealthResult
} from "../models/index";
import {
  deserializeAws_queryDescribeEnvironmentHealthCommand,
  serializeAws_queryDescribeEnvironmentHealthCommand
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

export type DescribeEnvironmentHealthCommandInput = DescribeEnvironmentHealthRequest;
export type DescribeEnvironmentHealthCommandOutput = DescribeEnvironmentHealthResult;

export class DescribeEnvironmentHealthCommand extends $Command<
  DescribeEnvironmentHealthCommandInput,
  DescribeEnvironmentHealthCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEnvironmentHealthCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeEnvironmentHealthCommandInput,
    DescribeEnvironmentHealthCommandOutput
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
    input: DescribeEnvironmentHealthCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeEnvironmentHealthCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEnvironmentHealthCommandOutput> {
    return deserializeAws_queryDescribeEnvironmentHealthCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}