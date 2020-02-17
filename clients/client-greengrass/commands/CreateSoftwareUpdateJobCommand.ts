import {
  GreengrassClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GreengrassClient";
import {
  CreateSoftwareUpdateJobRequest,
  CreateSoftwareUpdateJobResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1CreateSoftwareUpdateJobCommand,
  serializeAws_restJson1_1CreateSoftwareUpdateJobCommand
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

export type CreateSoftwareUpdateJobCommandInput = CreateSoftwareUpdateJobRequest;
export type CreateSoftwareUpdateJobCommandOutput = CreateSoftwareUpdateJobResponse;

export class CreateSoftwareUpdateJobCommand extends $Command<
  CreateSoftwareUpdateJobCommandInput,
  CreateSoftwareUpdateJobCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSoftwareUpdateJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateSoftwareUpdateJobCommandInput,
    CreateSoftwareUpdateJobCommandOutput
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
    input: CreateSoftwareUpdateJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1CreateSoftwareUpdateJobCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSoftwareUpdateJobCommandOutput> {
    return deserializeAws_restJson1_1CreateSoftwareUpdateJobCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}