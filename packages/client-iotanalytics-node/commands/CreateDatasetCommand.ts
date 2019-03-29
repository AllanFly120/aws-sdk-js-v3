import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {CreateDataset} from '../model/CreateDataset';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateDatasetInput} from '../types/CreateDatasetInput';
import {CreateDatasetOutput} from '../types/CreateDatasetOutput';
import {IoTAnalyticsResolvedConfiguration} from '../IoTAnalyticsConfiguration';
export * from '../types/CreateDatasetInput';
export * from '../types/CreateDatasetOutput';
export * from '../types/CreateDatasetExceptionsUnion';

export class CreateDatasetCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateDatasetInput,
    OutputTypesUnion,
    CreateDatasetOutput,
    IoTAnalyticsResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateDatasetInput,
        CreateDatasetOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateDatasetInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: IoTAnalyticsResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateDatasetInput, CreateDatasetOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateDataset
        };

        return stack.resolve(
            handler<CreateDatasetInput, CreateDatasetOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}