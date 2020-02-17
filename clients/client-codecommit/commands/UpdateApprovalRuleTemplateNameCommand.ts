import {
  CodeCommitClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CodeCommitClient";
import {
  UpdateApprovalRuleTemplateNameInput,
  UpdateApprovalRuleTemplateNameOutput
} from "../models/index";
import {
  deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommand,
  serializeAws_json1_1UpdateApprovalRuleTemplateNameCommand
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

export type UpdateApprovalRuleTemplateNameCommandInput = UpdateApprovalRuleTemplateNameInput;
export type UpdateApprovalRuleTemplateNameCommandOutput = UpdateApprovalRuleTemplateNameOutput;

export class UpdateApprovalRuleTemplateNameCommand extends $Command<
  UpdateApprovalRuleTemplateNameCommandInput,
  UpdateApprovalRuleTemplateNameCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateApprovalRuleTemplateNameCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateApprovalRuleTemplateNameCommandInput,
    UpdateApprovalRuleTemplateNameCommandOutput
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
    input: UpdateApprovalRuleTemplateNameCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateApprovalRuleTemplateNameCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateApprovalRuleTemplateNameCommandOutput> {
    return deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}