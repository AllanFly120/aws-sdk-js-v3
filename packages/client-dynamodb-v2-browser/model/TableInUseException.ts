import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const TableInUseException: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        message: {
            shape: {
                type: 'string',
            },
        },
    },
    exceptionType: 'TableInUseException',
};