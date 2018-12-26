import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * InvalidRequestException shape
 */
export interface InvalidRequestException extends __ServiceException__<_InvalidRequestExceptionDetails> {
    name: 'InvalidRequestException';
}

export interface _InvalidRequestExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    Message?: string;
}