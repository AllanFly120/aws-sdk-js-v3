import {_UnmarshalledRobot} from './_Robot';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * ListRobotsOutput shape
 */
export interface ListRobotsOutput {
    /**
     * <p>A list of robots that meet the criteria of the request.</p>
     */
    robots?: Array<_UnmarshalledRobot>;

    /**
     * <p>The <code>nextToken</code> value to include in a future <code>ListRobots</code> request. When the results of a <code>ListRobot</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return. </p>
     */
    nextToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
