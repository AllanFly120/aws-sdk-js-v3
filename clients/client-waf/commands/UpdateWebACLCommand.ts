import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WAFClientResolvedConfig
} from "../WAFClient";
import { UpdateWebACLRequest, UpdateWebACLResponse } from "../models/index";
import {
  deserializeAws_json1_1UpdateWebACLCommand,
  serializeAws_json1_1UpdateWebACLCommand
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

export type UpdateWebACLCommandInput = UpdateWebACLRequest;
export type UpdateWebACLCommandOutput = UpdateWebACLResponse;

export class UpdateWebACLCommand extends $Command<
  UpdateWebACLCommandInput,
  UpdateWebACLCommandOutput,
  WAFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateWebACLCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateWebACLCommandInput, UpdateWebACLCommandOutput> {
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
    input: UpdateWebACLCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateWebACLCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateWebACLCommandOutput> {
    return deserializeAws_json1_1UpdateWebACLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}