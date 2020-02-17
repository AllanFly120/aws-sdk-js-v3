import {
  CreateSavingsPlanRequest,
  CreateSavingsPlanResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1CreateSavingsPlanCommand,
  serializeAws_restJson1_1CreateSavingsPlanCommand
} from "../protocols/Aws_restJson1_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  savingsplansClientResolvedConfig
} from "../savingsplansClient";
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

export type CreateSavingsPlanCommandInput = CreateSavingsPlanRequest;
export type CreateSavingsPlanCommandOutput = CreateSavingsPlanResponse;

export class CreateSavingsPlanCommand extends $Command<
  CreateSavingsPlanCommandInput,
  CreateSavingsPlanCommandOutput,
  savingsplansClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSavingsPlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: savingsplansClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSavingsPlanCommandInput, CreateSavingsPlanCommandOutput> {
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
    input: CreateSavingsPlanCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1CreateSavingsPlanCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSavingsPlanCommandOutput> {
    return deserializeAws_restJson1_1CreateSavingsPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}