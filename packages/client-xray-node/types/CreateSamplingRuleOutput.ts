import {_UnmarshalledSamplingRuleRecord} from './_SamplingRuleRecord';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';

/**
 * CreateSamplingRuleOutput shape
 */
export interface CreateSamplingRuleOutput {
    /**
     * _SamplingRuleRecord shape
     */
    SamplingRuleRecord?: _UnmarshalledSamplingRuleRecord;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
