import {
  CloudHSMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudHSMClient";
import {
  RemoveTagsFromResourceRequest,
  RemoveTagsFromResourceResponse
} from "../models/index";
import {
  deserializeAws_json1_1RemoveTagsFromResourceCommand,
  serializeAws_json1_1RemoveTagsFromResourceCommand
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
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type RemoveTagsFromResourceCommandInput = RemoveTagsFromResourceRequest;
export type RemoveTagsFromResourceCommandOutput = RemoveTagsFromResourceResponse;

export class RemoveTagsFromResourceCommand extends $Command<
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
  CloudHSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveTagsFromResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RemoveTagsFromResourceCommandInput,
    RemoveTagsFromResourceCommandOutput
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
    input: RemoveTagsFromResourceCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveTagsFromResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<RemoveTagsFromResourceCommandOutput> {
    return deserializeAws_json1_1RemoveTagsFromResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}