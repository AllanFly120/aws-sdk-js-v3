import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {SampleChannelData} from '../model/SampleChannelData';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {SampleChannelDataInput} from '../types/SampleChannelDataInput';
import {SampleChannelDataOutput} from '../types/SampleChannelDataOutput';
import {IoTAnalyticsResolvedConfiguration} from '../IoTAnalyticsConfiguration';
export * from '../types/SampleChannelDataInput';
export * from '../types/SampleChannelDataOutput';
export * from '../types/SampleChannelDataExceptionsUnion';

export class SampleChannelDataCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    SampleChannelDataInput,
    OutputTypesUnion,
    SampleChannelDataOutput,
    IoTAnalyticsResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        SampleChannelDataInput,
        SampleChannelDataOutput,
        _stream.Readable
    >();

    constructor(readonly input: SampleChannelDataInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: IoTAnalyticsResolvedConfiguration
    ): __aws_sdk_types.Handler<SampleChannelDataInput, SampleChannelDataOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: SampleChannelData
        };

        return stack.resolve(
            handler<SampleChannelDataInput, SampleChannelDataOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}