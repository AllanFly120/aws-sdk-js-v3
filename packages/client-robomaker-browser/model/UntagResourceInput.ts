import {_TagKeyList} from './_TagKeyList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UntagResourceInput: _Structure_ = {
    type: 'structure',
    required: [
        'resourceArn',
        'tagKeys',
    ],
    members: {
        resourceArn: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'uri',
            locationName: 'resourceArn',
        },
        tagKeys: {
            shape: _TagKeyList,
            location: 'querystring',
            locationName: 'tagKeys',
        },
    },
};