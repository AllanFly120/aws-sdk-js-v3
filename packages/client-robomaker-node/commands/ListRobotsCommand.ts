import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ListRobots} from '../model/ListRobots';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListRobotsInput} from '../types/ListRobotsInput';
import {ListRobotsOutput} from '../types/ListRobotsOutput';
import {RoboMakerResolvedConfiguration} from '../RoboMakerConfiguration';
export * from '../types/ListRobotsInput';
export * from '../types/ListRobotsOutput';
export * from '../types/ListRobotsExceptionsUnion';

export class ListRobotsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListRobotsInput,
    OutputTypesUnion,
    ListRobotsOutput,
    RoboMakerResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListRobotsInput,
        ListRobotsOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListRobotsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: RoboMakerResolvedConfiguration
    ): __aws_sdk_types.Handler<ListRobotsInput, ListRobotsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListRobots
        };

        return stack.resolve(
            handler<ListRobotsInput, ListRobotsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}