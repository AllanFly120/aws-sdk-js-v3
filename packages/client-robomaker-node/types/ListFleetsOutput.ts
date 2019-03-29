import {_UnmarshalledFleet} from './_Fleet';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * ListFleetsOutput shape
 */
export interface ListFleetsOutput {
    /**
     * <p>A list of fleet details meeting the request criteria.</p>
     */
    fleetDetails?: Array<_UnmarshalledFleet>;

    /**
     * <p>The <code>nextToken</code> value to include in a future <code>ListDeploymentJobs</code> request. When the results of a <code>ListFleets</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return. </p>
     */
    nextToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
