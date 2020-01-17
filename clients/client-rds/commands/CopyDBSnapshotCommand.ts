import {
  RDSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RDSClient";
import { CopyDBSnapshotMessage, DBSnapshot } from "../models/index";
import {
  deserializeAws_queryCopyDBSnapshotCommand,
  serializeAws_queryCopyDBSnapshotCommand
} from "../protocols/Aws_query";
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
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

export type CopyDBSnapshotCommandInput = CopyDBSnapshotMessage;
export type CopyDBSnapshotCommandOutput = DBSnapshot;

export class CopyDBSnapshotCommand extends $Command<
  CopyDBSnapshotCommandInput,
  CopyDBSnapshotCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CopyDBSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyDBSnapshotCommandInput, CopyDBSnapshotCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );
    this.middlewareStack.use(getCrossRegionPresignedUrlPlugin(configuration));

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
    input: CopyDBSnapshotCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryCopyDBSnapshotCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CopyDBSnapshotCommandOutput> {
    return deserializeAws_queryCopyDBSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
