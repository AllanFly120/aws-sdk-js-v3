import {ListVocabulariesInput} from './ListVocabulariesInput';
import {ListVocabulariesOutput} from './ListVocabulariesOutput';
import {BadRequestException} from './BadRequestException';
import {LimitExceededException} from './LimitExceededException';
import {InternalFailureException} from './InternalFailureException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListVocabularies: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListVocabularies',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListVocabulariesInput,
    },
    output: {
        shape: ListVocabulariesOutput,
    },
    errors: [
        {
            shape: BadRequestException,
        },
        {
            shape: LimitExceededException,
        },
        {
            shape: InternalFailureException,
        },
    ],
};