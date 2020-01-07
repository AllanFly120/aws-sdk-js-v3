import {
  CodeStarClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CodeStarClient";
import { ListTeamMembersRequest, ListTeamMembersResult } from "../models/index";
import {
  deserializeAws_json1_1ListTeamMembersCommand,
  serializeAws_json1_1ListTeamMembersCommand
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

export type ListTeamMembersCommandInput = ListTeamMembersRequest;
export type ListTeamMembersCommandOutput = ListTeamMembersResult;

export class ListTeamMembersCommand extends $Command<
  ListTeamMembersCommandInput,
  ListTeamMembersCommandOutput,
  CodeStarClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTeamMembersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTeamMembersCommandInput, ListTeamMembersCommandOutput> {
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
    input: ListTeamMembersCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTeamMembersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListTeamMembersCommandOutput> {
    return deserializeAws_json1_1ListTeamMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
