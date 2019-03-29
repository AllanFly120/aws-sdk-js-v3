import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {CreateRobotApplicationVersion} from '../model/CreateRobotApplicationVersion';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateRobotApplicationVersionInput} from '../types/CreateRobotApplicationVersionInput';
import {CreateRobotApplicationVersionOutput} from '../types/CreateRobotApplicationVersionOutput';
import {RoboMakerResolvedConfiguration} from '../RoboMakerConfiguration';
export * from '../types/CreateRobotApplicationVersionInput';
export * from '../types/CreateRobotApplicationVersionOutput';
export * from '../types/CreateRobotApplicationVersionExceptionsUnion';

export class CreateRobotApplicationVersionCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateRobotApplicationVersionInput,
    OutputTypesUnion,
    CreateRobotApplicationVersionOutput,
    RoboMakerResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateRobotApplicationVersionInput,
        CreateRobotApplicationVersionOutput,
        Blob
    >();

    constructor(readonly input: CreateRobotApplicationVersionInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: RoboMakerResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateRobotApplicationVersionInput, CreateRobotApplicationVersionOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateRobotApplicationVersion
        };

        return stack.resolve(
            handler<CreateRobotApplicationVersionInput, CreateRobotApplicationVersionOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}