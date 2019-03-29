import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {ListDatasets} from '../model/ListDatasets';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListDatasetsInput} from '../types/ListDatasetsInput';
import {ListDatasetsOutput} from '../types/ListDatasetsOutput';
import {IoTAnalyticsResolvedConfiguration} from '../IoTAnalyticsConfiguration';
export * from '../types/ListDatasetsInput';
export * from '../types/ListDatasetsOutput';
export * from '../types/ListDatasetsExceptionsUnion';

export class ListDatasetsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListDatasetsInput,
    OutputTypesUnion,
    ListDatasetsOutput,
    IoTAnalyticsResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListDatasetsInput,
        ListDatasetsOutput,
        Blob
    >();

    constructor(readonly input: ListDatasetsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: IoTAnalyticsResolvedConfiguration
    ): __aws_sdk_types.Handler<ListDatasetsInput, ListDatasetsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListDatasets
        };

        return stack.resolve(
            handler<ListDatasetsInput, ListDatasetsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}