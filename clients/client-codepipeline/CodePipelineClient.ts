import {
  AcknowledgeJobInput,
  AcknowledgeJobOutput,
  AcknowledgeThirdPartyJobInput,
  AcknowledgeThirdPartyJobOutput,
  CreateCustomActionTypeInput,
  CreateCustomActionTypeOutput,
  CreatePipelineInput,
  CreatePipelineOutput,
  DeleteCustomActionTypeInput,
  DeletePipelineInput,
  DeleteWebhookInput,
  DeleteWebhookOutput,
  DeregisterWebhookWithThirdPartyInput,
  DeregisterWebhookWithThirdPartyOutput,
  DisableStageTransitionInput,
  EnableStageTransitionInput,
  GetJobDetailsInput,
  GetJobDetailsOutput,
  GetPipelineExecutionInput,
  GetPipelineExecutionOutput,
  GetPipelineInput,
  GetPipelineOutput,
  GetPipelineStateInput,
  GetPipelineStateOutput,
  GetThirdPartyJobDetailsInput,
  GetThirdPartyJobDetailsOutput,
  ListActionExecutionsInput,
  ListActionExecutionsOutput,
  ListActionTypesInput,
  ListActionTypesOutput,
  ListPipelineExecutionsInput,
  ListPipelineExecutionsOutput,
  ListPipelinesInput,
  ListPipelinesOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListWebhooksInput,
  ListWebhooksOutput,
  PollForJobsInput,
  PollForJobsOutput,
  PollForThirdPartyJobsInput,
  PollForThirdPartyJobsOutput,
  PutActionRevisionInput,
  PutActionRevisionOutput,
  PutApprovalResultInput,
  PutApprovalResultOutput,
  PutJobFailureResultInput,
  PutJobSuccessResultInput,
  PutThirdPartyJobFailureResultInput,
  PutThirdPartyJobSuccessResultInput,
  PutWebhookInput,
  PutWebhookOutput,
  RegisterWebhookWithThirdPartyInput,
  RegisterWebhookWithThirdPartyOutput,
  RetryStageExecutionInput,
  RetryStageExecutionOutput,
  StartPipelineExecutionInput,
  StartPipelineExecutionOutput,
  StopPipelineExecutionInput,
  StopPipelineExecutionOutput,
  TagResourceInput,
  TagResourceOutput,
  UntagResourceInput,
  UntagResourceOutput,
  UpdatePipelineInput,
  UpdatePipelineOutput
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AcknowledgeJobInput
  | AcknowledgeThirdPartyJobInput
  | CreateCustomActionTypeInput
  | CreatePipelineInput
  | DeleteCustomActionTypeInput
  | DeletePipelineInput
  | DeleteWebhookInput
  | DeregisterWebhookWithThirdPartyInput
  | DisableStageTransitionInput
  | EnableStageTransitionInput
  | GetJobDetailsInput
  | GetPipelineExecutionInput
  | GetPipelineInput
  | GetPipelineStateInput
  | GetThirdPartyJobDetailsInput
  | ListActionExecutionsInput
  | ListActionTypesInput
  | ListPipelineExecutionsInput
  | ListPipelinesInput
  | ListTagsForResourceInput
  | ListWebhooksInput
  | PollForJobsInput
  | PollForThirdPartyJobsInput
  | PutActionRevisionInput
  | PutApprovalResultInput
  | PutJobFailureResultInput
  | PutJobSuccessResultInput
  | PutThirdPartyJobFailureResultInput
  | PutThirdPartyJobSuccessResultInput
  | PutWebhookInput
  | RegisterWebhookWithThirdPartyInput
  | RetryStageExecutionInput
  | StartPipelineExecutionInput
  | StopPipelineExecutionInput
  | TagResourceInput
  | UntagResourceInput
  | UpdatePipelineInput;

export type ServiceOutputTypes =
  | __MetadataBearer
  | AcknowledgeJobOutput
  | AcknowledgeThirdPartyJobOutput
  | CreateCustomActionTypeOutput
  | CreatePipelineOutput
  | DeleteWebhookOutput
  | DeregisterWebhookWithThirdPartyOutput
  | GetJobDetailsOutput
  | GetPipelineExecutionOutput
  | GetPipelineOutput
  | GetPipelineStateOutput
  | GetThirdPartyJobDetailsOutput
  | ListActionExecutionsOutput
  | ListActionTypesOutput
  | ListPipelineExecutionsOutput
  | ListPipelinesOutput
  | ListTagsForResourceOutput
  | ListWebhooksOutput
  | PollForJobsOutput
  | PollForThirdPartyJobsOutput
  | PutActionRevisionOutput
  | PutApprovalResultOutput
  | PutWebhookOutput
  | RegisterWebhookWithThirdPartyOutput
  | RetryStageExecutionOutput
  | StartPipelineExecutionOutput
  | StopPipelineExecutionOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdatePipelineOutput;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type CodePipelineClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type CodePipelineClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AWS CodePipeline</fullname>
 *         <p>
 *             <b>Overview</b>
 *         </p>
 *         <p>This is the AWS CodePipeline API Reference. This guide provides descriptions of the
 *             actions and data types for AWS CodePipeline. Some functionality for your pipeline can
 *             only be configured through the API. For more information, see the <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html">AWS
 *                 CodePipeline User Guide</a>.</p>
 *         <p>You can use the AWS CodePipeline API to work with pipelines, stages, actions, and
 *             transitions.</p>
 *         <p>
 *             <i>Pipelines</i> are models of automated release processes. Each pipeline
 *             is uniquely named, and consists of stages, actions, and transitions. </p>
 *         <p>You can work with pipelines by calling:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a>CreatePipeline</a>, which creates a uniquely named
 *                     pipeline.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>DeletePipeline</a>, which deletes the specified
 *                     pipeline.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>GetPipeline</a>, which returns information about the pipeline
 *                     structure and pipeline metadata, including the pipeline Amazon Resource Name
 *                     (ARN).</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>GetPipelineExecution</a>, which returns information about a
 *                     specific execution of a pipeline.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>GetPipelineState</a>, which returns information about the current
 *                     state of the stages and actions of a pipeline.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>ListActionExecutions</a>, which returns action-level details
 *                     for past executions. The details include full stage and action-level details,
 *                     including individual action duration, status, any errors that occurred during
 *                     the execution, and input and output artifact location details.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>ListPipelines</a>, which gets a summary of all of the pipelines
 *                     associated with your account.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>ListPipelineExecutions</a>, which gets a summary of the most
 *                     recent executions for a pipeline.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>StartPipelineExecution</a>, which runs the most recent revision of
 *                     an artifact through the pipeline.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>StopPipelineExecution</a>, which stops the specified pipeline
 *                     execution from continuing through the pipeline.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>UpdatePipeline</a>, which updates a pipeline with edits or changes
 *                     to the structure of the pipeline.</p>
 *             </li>
 *          </ul>
 *         <p>Pipelines include <i>stages</i>. Each stage contains one or more
 *             actions that must complete before the next stage begins. A stage results in success or
 *             failure. If a stage fails, the pipeline stops at that stage and remains stopped until
 *             either a new version of an artifact appears in the source location, or a user takes
 *             action to rerun the most recent artifact through the pipeline. You can call <a>GetPipelineState</a>, which displays the status of a pipeline, including the
 *             status of stages in the pipeline, or <a>GetPipeline</a>, which returns the
 *             entire structure of the pipeline, including the stages of that pipeline. For more
 *             information about the structure of stages and actions, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-structure.html">AWS CodePipeline
 *                 Pipeline Structure Reference</a>.</p>
 *         <p>Pipeline stages include <i>actions</i> that are categorized into
 *             categories such as source or build actions performed in a stage of a pipeline. For
 *             example, you can use a source action to import artifacts into a pipeline from a source
 *             such as Amazon S3. Like stages, you do not work with actions directly in most cases, but
 *             you do define and interact with actions when working with pipeline operations such as
 *                 <a>CreatePipeline</a> and <a>GetPipelineState</a>. Valid
 *             action categories are:</p>
 *         <ul>
 *             <li>
 *                 <p>Source</p>
 *             </li>
 *             <li>
 *                 <p>Build</p>
 *             </li>
 *             <li>
 *                 <p>Test</p>
 *             </li>
 *             <li>
 *                 <p>Deploy</p>
 *             </li>
 *             <li>
 *                 <p>Approval</p>
 *             </li>
 *             <li>
 *                 <p>Invoke</p>
 *             </li>
 *          </ul>
 *         <p>Pipelines also include <i>transitions</i>, which allow the transition
 *             of artifacts from one stage to the next in a pipeline after the actions in one stage
 *             complete.</p>
 *         <p>You can work with transitions by calling:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a>DisableStageTransition</a>, which prevents artifacts from
 *                     transitioning to the next stage in a pipeline.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>EnableStageTransition</a>, which enables transition of artifacts
 *                     between stages in a pipeline. </p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Using the API to integrate with AWS CodePipeline</b>
 *         </p>
 *         <p>For third-party integrators or developers who want to create their own integrations
 *             with AWS CodePipeline, the expected sequence varies from the standard API user. To
 *             integrate with AWS CodePipeline, developers need to work with the following
 *             items:</p>
 *         <p>
 *             <b>Jobs</b>, which are instances of an action. For
 *             example, a job for a source action might import a revision of an artifact from a source. </p>
 *         <p>You can work with jobs by calling:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a>AcknowledgeJob</a>, which confirms whether a job worker has
 *                     received the specified job.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>GetJobDetails</a>, which returns the details of a job.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>PollForJobs</a>, which determines whether there are any jobs to
 *                     act on.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>PutJobFailureResult</a>, which provides details of a job failure.
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>PutJobSuccessResult</a>, which provides details of a job
 *                     success.</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Third party jobs</b>, which are instances of an action
 *             created by a partner action and integrated into AWS CodePipeline. Partner actions are
 *             created by members of the AWS Partner Network.</p>
 *         <p>You can work with third party jobs by calling:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a>AcknowledgeThirdPartyJob</a>, which confirms whether a job worker
 *                     has received the specified job.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>GetThirdPartyJobDetails</a>, which requests the details of a job
 *                     for a partner action.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>PollForThirdPartyJobs</a>, which determines whether there are any
 *                     jobs to act on. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>PutThirdPartyJobFailureResult</a>, which provides details of a job
 *                     failure.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>PutThirdPartyJobSuccessResult</a>, which provides details of a job
 *                     success.</p>
 *             </li>
 *          </ul>
 */
export class CodePipelineClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodePipelineClientResolvedConfig
> {
  readonly config: CodePipelineClientResolvedConfig;

  constructor(configuration: CodePipelineClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}