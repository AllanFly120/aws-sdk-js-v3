import {
  AssociateTrackerConsumerCommandInput,
  AssociateTrackerConsumerCommandOutput,
} from "./commands/AssociateTrackerConsumerCommand";
import {
  BatchDeleteGeofenceCommandInput,
  BatchDeleteGeofenceCommandOutput,
} from "./commands/BatchDeleteGeofenceCommand";
import {
  BatchEvaluateGeofencesCommandInput,
  BatchEvaluateGeofencesCommandOutput,
} from "./commands/BatchEvaluateGeofencesCommand";
import {
  BatchGetDevicePositionCommandInput,
  BatchGetDevicePositionCommandOutput,
} from "./commands/BatchGetDevicePositionCommand";
import { BatchPutGeofenceCommandInput, BatchPutGeofenceCommandOutput } from "./commands/BatchPutGeofenceCommand";
import {
  BatchUpdateDevicePositionCommandInput,
  BatchUpdateDevicePositionCommandOutput,
} from "./commands/BatchUpdateDevicePositionCommand";
import {
  CreateGeofenceCollectionCommandInput,
  CreateGeofenceCollectionCommandOutput,
} from "./commands/CreateGeofenceCollectionCommand";
import { CreateMapCommandInput, CreateMapCommandOutput } from "./commands/CreateMapCommand";
import { CreatePlaceIndexCommandInput, CreatePlaceIndexCommandOutput } from "./commands/CreatePlaceIndexCommand";
import { CreateTrackerCommandInput, CreateTrackerCommandOutput } from "./commands/CreateTrackerCommand";
import {
  DeleteGeofenceCollectionCommandInput,
  DeleteGeofenceCollectionCommandOutput,
} from "./commands/DeleteGeofenceCollectionCommand";
import { DeleteMapCommandInput, DeleteMapCommandOutput } from "./commands/DeleteMapCommand";
import { DeletePlaceIndexCommandInput, DeletePlaceIndexCommandOutput } from "./commands/DeletePlaceIndexCommand";
import { DeleteTrackerCommandInput, DeleteTrackerCommandOutput } from "./commands/DeleteTrackerCommand";
import {
  DescribeGeofenceCollectionCommandInput,
  DescribeGeofenceCollectionCommandOutput,
} from "./commands/DescribeGeofenceCollectionCommand";
import { DescribeMapCommandInput, DescribeMapCommandOutput } from "./commands/DescribeMapCommand";
import { DescribePlaceIndexCommandInput, DescribePlaceIndexCommandOutput } from "./commands/DescribePlaceIndexCommand";
import { DescribeTrackerCommandInput, DescribeTrackerCommandOutput } from "./commands/DescribeTrackerCommand";
import {
  DisassociateTrackerConsumerCommandInput,
  DisassociateTrackerConsumerCommandOutput,
} from "./commands/DisassociateTrackerConsumerCommand";
import { GetDevicePositionCommandInput, GetDevicePositionCommandOutput } from "./commands/GetDevicePositionCommand";
import {
  GetDevicePositionHistoryCommandInput,
  GetDevicePositionHistoryCommandOutput,
} from "./commands/GetDevicePositionHistoryCommand";
import { GetGeofenceCommandInput, GetGeofenceCommandOutput } from "./commands/GetGeofenceCommand";
import { GetMapGlyphsCommandInput, GetMapGlyphsCommandOutput } from "./commands/GetMapGlyphsCommand";
import { GetMapSpritesCommandInput, GetMapSpritesCommandOutput } from "./commands/GetMapSpritesCommand";
import {
  GetMapStyleDescriptorCommandInput,
  GetMapStyleDescriptorCommandOutput,
} from "./commands/GetMapStyleDescriptorCommand";
import { GetMapTileCommandInput, GetMapTileCommandOutput } from "./commands/GetMapTileCommand";
import {
  ListGeofenceCollectionsCommandInput,
  ListGeofenceCollectionsCommandOutput,
} from "./commands/ListGeofenceCollectionsCommand";
import { ListGeofencesCommandInput, ListGeofencesCommandOutput } from "./commands/ListGeofencesCommand";
import { ListMapsCommandInput, ListMapsCommandOutput } from "./commands/ListMapsCommand";
import { ListPlaceIndexesCommandInput, ListPlaceIndexesCommandOutput } from "./commands/ListPlaceIndexesCommand";
import {
  ListTrackerConsumersCommandInput,
  ListTrackerConsumersCommandOutput,
} from "./commands/ListTrackerConsumersCommand";
import { ListTrackersCommandInput, ListTrackersCommandOutput } from "./commands/ListTrackersCommand";
import { PutGeofenceCommandInput, PutGeofenceCommandOutput } from "./commands/PutGeofenceCommand";
import {
  SearchPlaceIndexForPositionCommandInput,
  SearchPlaceIndexForPositionCommandOutput,
} from "./commands/SearchPlaceIndexForPositionCommand";
import {
  SearchPlaceIndexForTextCommandInput,
  SearchPlaceIndexForTextCommandOutput,
} from "./commands/SearchPlaceIndexForTextCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AssociateTrackerConsumerCommandInput
  | BatchDeleteGeofenceCommandInput
  | BatchEvaluateGeofencesCommandInput
  | BatchGetDevicePositionCommandInput
  | BatchPutGeofenceCommandInput
  | BatchUpdateDevicePositionCommandInput
  | CreateGeofenceCollectionCommandInput
  | CreateMapCommandInput
  | CreatePlaceIndexCommandInput
  | CreateTrackerCommandInput
  | DeleteGeofenceCollectionCommandInput
  | DeleteMapCommandInput
  | DeletePlaceIndexCommandInput
  | DeleteTrackerCommandInput
  | DescribeGeofenceCollectionCommandInput
  | DescribeMapCommandInput
  | DescribePlaceIndexCommandInput
  | DescribeTrackerCommandInput
  | DisassociateTrackerConsumerCommandInput
  | GetDevicePositionCommandInput
  | GetDevicePositionHistoryCommandInput
  | GetGeofenceCommandInput
  | GetMapGlyphsCommandInput
  | GetMapSpritesCommandInput
  | GetMapStyleDescriptorCommandInput
  | GetMapTileCommandInput
  | ListGeofenceCollectionsCommandInput
  | ListGeofencesCommandInput
  | ListMapsCommandInput
  | ListPlaceIndexesCommandInput
  | ListTrackerConsumersCommandInput
  | ListTrackersCommandInput
  | PutGeofenceCommandInput
  | SearchPlaceIndexForPositionCommandInput
  | SearchPlaceIndexForTextCommandInput;

export type ServiceOutputTypes =
  | AssociateTrackerConsumerCommandOutput
  | BatchDeleteGeofenceCommandOutput
  | BatchEvaluateGeofencesCommandOutput
  | BatchGetDevicePositionCommandOutput
  | BatchPutGeofenceCommandOutput
  | BatchUpdateDevicePositionCommandOutput
  | CreateGeofenceCollectionCommandOutput
  | CreateMapCommandOutput
  | CreatePlaceIndexCommandOutput
  | CreateTrackerCommandOutput
  | DeleteGeofenceCollectionCommandOutput
  | DeleteMapCommandOutput
  | DeletePlaceIndexCommandOutput
  | DeleteTrackerCommandOutput
  | DescribeGeofenceCollectionCommandOutput
  | DescribeMapCommandOutput
  | DescribePlaceIndexCommandOutput
  | DescribeTrackerCommandOutput
  | DisassociateTrackerConsumerCommandOutput
  | GetDevicePositionCommandOutput
  | GetDevicePositionHistoryCommandOutput
  | GetGeofenceCommandOutput
  | GetMapGlyphsCommandOutput
  | GetMapSpritesCommandOutput
  | GetMapStyleDescriptorCommandOutput
  | GetMapTileCommandOutput
  | ListGeofenceCollectionsCommandOutput
  | ListGeofencesCommandOutput
  | ListMapsCommandOutput
  | ListPlaceIndexesCommandOutput
  | ListTrackerConsumersCommandOutput
  | ListTrackersCommandOutput
  | PutGeofenceCommandOutput
  | SearchPlaceIndexForPositionCommandOutput
  | SearchPlaceIndexForTextCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
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
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Default credentials provider; Not available in browser runtime.
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

export type LocationClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;

export type LocationClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;

/**
 * Suite of geospatial services including Maps, Places, Tracking, and Geofencing
 */
export class LocationClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LocationClientResolvedConfig
> {
  readonly config: LocationClientResolvedConfig;

  constructor(configuration: LocationClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
