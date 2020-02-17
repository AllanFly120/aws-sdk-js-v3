import {
  BackupClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../BackupClient";
import {
  GetBackupPlanFromJSONInput,
  GetBackupPlanFromJSONOutput
} from "../models/index";
import {
  deserializeAws_restJson1_1GetBackupPlanFromJSONCommand,
  serializeAws_restJson1_1GetBackupPlanFromJSONCommand
} from "../protocols/Aws_restJson1_1";
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

export type GetBackupPlanFromJSONCommandInput = GetBackupPlanFromJSONInput;
export type GetBackupPlanFromJSONCommandOutput = GetBackupPlanFromJSONOutput;

export class GetBackupPlanFromJSONCommand extends $Command<
  GetBackupPlanFromJSONCommandInput,
  GetBackupPlanFromJSONCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBackupPlanFromJSONCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetBackupPlanFromJSONCommandInput,
    GetBackupPlanFromJSONCommandOutput
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
    input: GetBackupPlanFromJSONCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1GetBackupPlanFromJSONCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBackupPlanFromJSONCommandOutput> {
    return deserializeAws_restJson1_1GetBackupPlanFromJSONCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}