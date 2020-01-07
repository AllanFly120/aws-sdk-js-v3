import {
  CodeStarClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CodeStarClient";
import {
  DeleteUserProfileRequest,
  DeleteUserProfileResult
} from "../models/index";
import {
  deserializeAws_json1_1DeleteUserProfileCommand,
  serializeAws_json1_1DeleteUserProfileCommand
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

export type DeleteUserProfileCommandInput = DeleteUserProfileRequest;
export type DeleteUserProfileCommandOutput = DeleteUserProfileResult;

export class DeleteUserProfileCommand extends $Command<
  DeleteUserProfileCommandInput,
  DeleteUserProfileCommandOutput,
  CodeStarClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteUserProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput> {
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
    input: DeleteUserProfileCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteUserProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DeleteUserProfileCommandOutput> {
    return deserializeAws_json1_1DeleteUserProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
