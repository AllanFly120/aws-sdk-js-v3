import {
  SageMakerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SageMakerClient";
import {
  DescribeWorkforceRequest,
  DescribeWorkforceResponse
} from "../models/index";
import {
  deserializeAws_json1_1DescribeWorkforceCommand,
  serializeAws_json1_1DescribeWorkforceCommand
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

export type DescribeWorkforceCommandInput = DescribeWorkforceRequest;
export type DescribeWorkforceCommandOutput = DescribeWorkforceResponse;

export class DescribeWorkforceCommand extends $Command<
  DescribeWorkforceCommandInput,
  DescribeWorkforceCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeWorkforceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWorkforceCommandInput, DescribeWorkforceCommandOutput> {
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
    input: DescribeWorkforceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeWorkforceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeWorkforceCommandOutput> {
    return deserializeAws_json1_1DescribeWorkforceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}