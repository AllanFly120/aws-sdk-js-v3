import * as __aws_sdk_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {AddPermission} from '../model/AddPermission';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {AddPermissionInput} from '../types/AddPermissionInput';
import {AddPermissionOutput} from '../types/AddPermissionOutput';
import {LambdaResolvedConfiguration} from '../LambdaConfiguration';

export class AddPermissionCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    AddPermissionInput,
    OutputTypesUnion,
    AddPermissionOutput,
    LambdaResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        AddPermissionInput,
        AddPermissionOutput,
        _stream.Readable
    >();

    constructor(readonly input: AddPermissionInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: LambdaResolvedConfiguration
    ): __aws_sdk_types.Handler<AddPermissionInput, AddPermissionOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: AddPermission
        };

        return stack.resolve(
            handler<AddPermissionInput, AddPermissionOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}