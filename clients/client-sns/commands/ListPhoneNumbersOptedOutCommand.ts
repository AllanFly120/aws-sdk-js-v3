import {
  SNSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SNSClient";
import {
  ListPhoneNumbersOptedOutInput,
  ListPhoneNumbersOptedOutResponse
} from "../models/index";
import {
  deserializeAws_queryListPhoneNumbersOptedOutCommand,
  serializeAws_queryListPhoneNumbersOptedOutCommand
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

export type ListPhoneNumbersOptedOutCommandInput = ListPhoneNumbersOptedOutInput;
export type ListPhoneNumbersOptedOutCommandOutput = ListPhoneNumbersOptedOutResponse;

export class ListPhoneNumbersOptedOutCommand extends $Command<
  ListPhoneNumbersOptedOutCommandInput,
  ListPhoneNumbersOptedOutCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPhoneNumbersOptedOutCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListPhoneNumbersOptedOutCommandInput,
    ListPhoneNumbersOptedOutCommandOutput
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
    input: ListPhoneNumbersOptedOutCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryListPhoneNumbersOptedOutCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPhoneNumbersOptedOutCommandOutput> {
    return deserializeAws_queryListPhoneNumbersOptedOutCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}