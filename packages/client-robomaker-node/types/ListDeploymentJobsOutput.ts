import {_UnmarshalledDeploymentJob} from './_DeploymentJob';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * ListDeploymentJobsOutput shape
 */
export interface ListDeploymentJobsOutput {
    /**
     * <p>A list of deployment jobs that meet the criteria of the request.</p>
     */
    deploymentJobs?: Array<_UnmarshalledDeploymentJob>;

    /**
     * <p>The <code>nextToken</code> value to include in a future <code>ListDeploymentJobs</code> request. When the results of a <code>ListDeploymentJobs</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return. </p>
     */
    nextToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
