import {InvalidRequestException} from './InvalidRequestException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalFailureException} from './InternalFailureException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {ThrottlingException} from './ThrottlingException';
export type DescribeLoggingOptionsExceptionsUnion = InvalidRequestException |
    ResourceNotFoundException |
    InternalFailureException |
    ServiceUnavailableException |
    ThrottlingException;
