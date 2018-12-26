import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetIdOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        IdentityId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};