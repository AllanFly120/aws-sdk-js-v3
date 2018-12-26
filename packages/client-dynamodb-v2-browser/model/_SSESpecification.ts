import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _SSESpecification: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Enabled: {
            shape: {
                type: 'boolean',
            },
        },
        SSEType: {
            shape: {
                type: 'string',
            },
        },
        KMSMasterKeyId: {
            shape: {
                type: 'string',
            },
        },
    },
};