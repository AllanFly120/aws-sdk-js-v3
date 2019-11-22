//TODO: move this to types package
import {
  EventStreamMarshaller,
  EventStreamMarshallerOptions
} from "./EventStreamMarshaller";
import { Encoder, Decoder } from "@aws-sdk/types";
export interface EventStreamInputConfig {
  /**
   * class used to serialize and deserialize event stream
   */
  eventStreamSerde?: EventStreamMarshaller;
}

export type EventStreamResolvedConfig = Required<EventStreamInputConfig>;

interface PreviouslyResolved {
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
  signer: any;
  eventStreamSerdeProvider: (
    args: EventStreamMarshallerOptions
  ) => EventStreamMarshaller;
}

export function resolveEventStreamConfig<T>(
  input: T & PreviouslyResolved & EventStreamInputConfig
): T & EventStreamResolvedConfig {
  return {
    ...input,
    eventStreamSerde: input.eventStreamSerdeProvider(input)
  };
}
