import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {CreatePipeline} from '../model/CreatePipeline';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreatePipelineInput} from '../types/CreatePipelineInput';
import {CreatePipelineOutput} from '../types/CreatePipelineOutput';
import {IoTAnalyticsResolvedConfiguration} from '../IoTAnalyticsConfiguration';
export * from '../types/CreatePipelineInput';
export * from '../types/CreatePipelineOutput';
export * from '../types/CreatePipelineExceptionsUnion';

export class CreatePipelineCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreatePipelineInput,
    OutputTypesUnion,
    CreatePipelineOutput,
    IoTAnalyticsResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreatePipelineInput,
        CreatePipelineOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreatePipelineInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: IoTAnalyticsResolvedConfiguration
    ): __aws_sdk_types.Handler<CreatePipelineInput, CreatePipelineOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreatePipeline
        };

        return stack.resolve(
            handler<CreatePipelineInput, CreatePipelineOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}