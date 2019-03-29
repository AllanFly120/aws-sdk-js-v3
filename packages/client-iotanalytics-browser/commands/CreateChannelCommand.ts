import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {CreateChannel} from '../model/CreateChannel';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateChannelInput} from '../types/CreateChannelInput';
import {CreateChannelOutput} from '../types/CreateChannelOutput';
import {IoTAnalyticsResolvedConfiguration} from '../IoTAnalyticsConfiguration';
export * from '../types/CreateChannelInput';
export * from '../types/CreateChannelOutput';
export * from '../types/CreateChannelExceptionsUnion';

export class CreateChannelCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateChannelInput,
    OutputTypesUnion,
    CreateChannelOutput,
    IoTAnalyticsResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateChannelInput,
        CreateChannelOutput,
        Blob
    >();

    constructor(readonly input: CreateChannelInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: IoTAnalyticsResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateChannelInput, CreateChannelOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateChannel
        };

        return stack.resolve(
            handler<CreateChannelInput, CreateChannelOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}