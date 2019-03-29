import {Structure as _Structure_} from '@aws-sdk/types';

export const _RetentionPeriod: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        unlimited: {
            shape: {
                type: 'boolean',
            },
        },
        numberOfDays: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
    },
};