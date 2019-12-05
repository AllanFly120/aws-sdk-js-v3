import { Command } from "@aws-sdk/smithy-client";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getEventStreamPlugin } from "@aws-sdk/middleware-event-stream";
import {
  HttpHandlerOptions,
  Handler,
  HandlerExecutionContext,
  FinalizeHandlerArguments,
  MiddlewareStack,
  SerdeContext,
  HttpRequest,
  HttpResponse,
  EventStreamSerdeContext
} from "@aws-sdk/types";
import {
  startStreamTranscriptionAwsJson1_1Serialize,
  startStreamTranscriptionAwsJson1_1Deserialize
} from "../protocol/AwsJson1_1";
import {
  StartStreamTranscriptionRequest,
  StartStreamTranscriptionResponse
} from "../models";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  TranscribeStreamingResolvedConfiguration
} from "../TranscribeStreamingClient";

export class StartStreamTranscriptionCommand extends Command<
  StartStreamTranscriptionRequest,
  StartStreamTranscriptionResponse,
  TranscribeStreamingResolvedConfiguration
> {
  constructor(readonly input: StartStreamTranscriptionRequest) {
    super();
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeStreamingResolvedConfiguration,
    options?: HttpHandlerOptions
  ): Handler<
    StartStreamTranscriptionRequest,
    StartStreamTranscriptionResponse
  > {
    const { requestHandler } = configuration;

    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );
    this.middlewareStack.use(getEventStreamPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };

    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private async serialize(
    input: StartStreamTranscriptionRequest,
    protocol: string,
    context: SerdeContext & EventStreamSerdeContext
  ): Promise<HttpRequest> {
    switch (protocol) {
      case "aws.json-1.1":
        return startStreamTranscriptionAwsJson1_1Serialize(input, context);
      default:
        throw new Error("Unknown protocol, use aws.json-1.1");
    }
  }

  private async deserialize(
    output: HttpResponse,
    protocol: string,
    context: SerdeContext & EventStreamSerdeContext
  ): Promise<StartStreamTranscriptionResponse> {
    switch (protocol) {
      case "aws.json-1.1":
        return startStreamTranscriptionAwsJson1_1Deserialize(output, context);
      default:
        throw new Error("Unknown protocol, use aws.json-1.1");
    }
  }
}
