import {List as _List_} from '@aws-sdk/types';
import {_DatasetActionSummary} from './_DatasetActionSummary';

export const _DatasetActionSummaries: _List_ = {
    type: 'list',
    min: 1,
    member: {
        shape: _DatasetActionSummary,
    },
};