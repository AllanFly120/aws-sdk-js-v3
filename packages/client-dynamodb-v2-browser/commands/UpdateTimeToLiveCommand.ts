import * as __aws_sdk_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';
import {UpdateTimeToLive} from '../model/UpdateTimeToLive';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateTimeToLiveInput} from '../types/UpdateTimeToLiveInput';
import {UpdateTimeToLiveOutput} from '../types/UpdateTimeToLiveOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class UpdateTimeToLiveCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UpdateTimeToLiveInput,
    OutputTypesUnion,
    UpdateTimeToLiveOutput,
    DynamoDBResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UpdateTimeToLiveInput,
        UpdateTimeToLiveOutput,
        Blob
    >();

    constructor(readonly input: UpdateTimeToLiveInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_sdk_types.Handler<UpdateTimeToLiveInput, UpdateTimeToLiveOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateTimeToLive
        };

        return stack.resolve(
            handler<UpdateTimeToLiveInput, UpdateTimeToLiveOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}