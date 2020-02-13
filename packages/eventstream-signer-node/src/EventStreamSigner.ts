import {
  EventSigner,
  HttpRequest,
  Encoder,
  Decoder,
  Provider
} from "@aws-sdk/types";
import { EventStreamMarshaller as EventMarshaller } from "@aws-sdk/eventstream-marshaller";
import { pipeline } from "stream";
import { EventSigningStream } from "./EventSigningStream";

export interface EventStreamRequestSignerOptions {
  eventSigner: EventSigner | Provider<EventSigner>;
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
}

export class EventStreamRequestSigner {
  private readonly eventSigner: EventSigner | Provider<EventSigner>;
  private readonly eventMarshaller: EventMarshaller;
  constructor(options: EventStreamRequestSignerOptions) {
    this.eventSigner = options.eventSigner;
    this.eventMarshaller = new EventMarshaller(
      options.utf8Encoder,
      options.utf8Decoder
    );
  }
  async sign(request: HttpRequest): Promise<HttpRequest> {
    const signature = request.headers["authorization"].match(
      /Signature=([\w]+)$/
    )![1];
    const signingStream = new EventSigningStream({
      priorSignature: signature,
      eventMarshaller: this.eventMarshaller,
      eventSigner:
        typeof this.eventSigner === "function"
          ? await this.eventSigner()
          : this.eventSigner
    });
    pipeline(request.body, signingStream, err => {
      if (err) {
        throw err;
      }
    });
    request.body = signingStream;

    return Promise.resolve(request);
  }
}
