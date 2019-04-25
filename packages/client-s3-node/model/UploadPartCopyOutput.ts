import {_CopyPartResult} from './_CopyPartResult';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UploadPartCopyOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        CopySourceVersionId: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-copy-source-version-id',
        },
        CopyPartResult: {
            shape: _CopyPartResult,
        },
        ServerSideEncryption: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-server-side-encryption',
        },
        SSECustomerAlgorithm: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-server-side-encryption-customer-algorithm',
        },
        SSECustomerKeyMD5: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-server-side-encryption-customer-key-MD5',
        },
        SSEKMSKeyId: {
            shape: {
                type: 'string',
                sensitive: true,
            },
            location: 'header',
            locationName: 'x-amz-server-side-encryption-aws-kms-key-id',
        },
        RequestCharged: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-request-charged',
        },
    },
    payload: 'CopyPartResult',
};