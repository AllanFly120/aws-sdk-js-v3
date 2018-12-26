import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const SubnetIPAddressLimitReachedException: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Type: {
            shape: {
                type: 'string',
            },
        },
        Message: {
            shape: {
                type: 'string',
            },
        },
    },
    exceptionType: 'SubnetIPAddressLimitReachedException',
};