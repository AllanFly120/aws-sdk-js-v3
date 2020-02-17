import {
  GlacierClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GlacierClient";
import { SetVaultAccessPolicyInput } from "../models/index";
import {
  deserializeAws_restJson1_1SetVaultAccessPolicyCommand,
  serializeAws_restJson1_1SetVaultAccessPolicyCommand
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
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type SetVaultAccessPolicyCommandInput = SetVaultAccessPolicyInput;
export type SetVaultAccessPolicyCommandOutput = __MetadataBearer;

export class SetVaultAccessPolicyCommand extends $Command<
  SetVaultAccessPolicyCommandInput,
  SetVaultAccessPolicyCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetVaultAccessPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    SetVaultAccessPolicyCommandInput,
    SetVaultAccessPolicyCommandOutput
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
    input: SetVaultAccessPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1SetVaultAccessPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetVaultAccessPolicyCommandOutput> {
    return deserializeAws_restJson1_1SetVaultAccessPolicyCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}