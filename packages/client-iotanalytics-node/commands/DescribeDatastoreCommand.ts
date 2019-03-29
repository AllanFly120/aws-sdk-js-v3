import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DescribeDatastore} from '../model/DescribeDatastore';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeDatastoreInput} from '../types/DescribeDatastoreInput';
import {DescribeDatastoreOutput} from '../types/DescribeDatastoreOutput';
import {IoTAnalyticsResolvedConfiguration} from '../IoTAnalyticsConfiguration';
export * from '../types/DescribeDatastoreInput';
export * from '../types/DescribeDatastoreOutput';
export * from '../types/DescribeDatastoreExceptionsUnion';

export class DescribeDatastoreCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DescribeDatastoreInput,
    OutputTypesUnion,
    DescribeDatastoreOutput,
    IoTAnalyticsResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DescribeDatastoreInput,
        DescribeDatastoreOutput,
        _stream.Readable
    >();

    constructor(readonly input: DescribeDatastoreInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: IoTAnalyticsResolvedConfiguration
    ): __aws_sdk_types.Handler<DescribeDatastoreInput, DescribeDatastoreOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeDatastore
        };

        return stack.resolve(
            handler<DescribeDatastoreInput, DescribeDatastoreOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}