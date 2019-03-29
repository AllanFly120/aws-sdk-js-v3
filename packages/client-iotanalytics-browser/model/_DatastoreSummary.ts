import {Structure as _Structure_} from '@aws-sdk/types';

export const _DatastoreSummary: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        datastoreName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        status: {
            shape: {
                type: 'string',
            },
        },
        creationTime: {
            shape: {
                type: 'timestamp',
            },
        },
        lastUpdateTime: {
            shape: {
                type: 'timestamp',
            },
        },
    },
};