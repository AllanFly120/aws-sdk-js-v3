import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {UpdateChannel} from '../model/UpdateChannel';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateChannelInput} from '../types/UpdateChannelInput';
import {UpdateChannelOutput} from '../types/UpdateChannelOutput';
import {IoTAnalyticsResolvedConfiguration} from '../IoTAnalyticsConfiguration';
export * from '../types/UpdateChannelInput';
export * from '../types/UpdateChannelOutput';
export * from '../types/UpdateChannelExceptionsUnion';

export class UpdateChannelCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UpdateChannelInput,
    OutputTypesUnion,
    UpdateChannelOutput,
    IoTAnalyticsResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UpdateChannelInput,
        UpdateChannelOutput,
        _stream.Readable
    >();

    constructor(readonly input: UpdateChannelInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: IoTAnalyticsResolvedConfiguration
    ): __aws_sdk_types.Handler<UpdateChannelInput, UpdateChannelOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateChannel
        };

        return stack.resolve(
            handler<UpdateChannelInput, UpdateChannelOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}