import {
  PutSigningProfileRequest,
  PutSigningProfileResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1PutSigningProfileCommand,
  serializeAws_restJson1_1PutSigningProfileCommand
} from "../protocols/Aws_restJson1_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  signerClientResolvedConfig
} from "../signerClient";
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

export type PutSigningProfileCommandInput = PutSigningProfileRequest;
export type PutSigningProfileCommandOutput = PutSigningProfileResponse;

export class PutSigningProfileCommand extends $Command<
  PutSigningProfileCommandInput,
  PutSigningProfileCommandOutput,
  signerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutSigningProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: signerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutSigningProfileCommandInput, PutSigningProfileCommandOutput> {
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
    input: PutSigningProfileCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1PutSigningProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutSigningProfileCommandOutput> {
    return deserializeAws_restJson1_1PutSigningProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}