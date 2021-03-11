import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum Mode {
  BEHIND_LIVE_EDGE = "BEHIND_LIVE_EDGE",
  OFF = "OFF",
}

/**
 * <p>The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break.</p>
 */
export interface AvailSuppression {
  /**
   * Sets the mode for avail suppression, also known as ad suppression. By default, ad suppression is off and all ad breaks are filled by MediaTailor with ads or slate.
   */
  Mode?: Mode | string;

  /**
   * The avail suppression value is a live edge offset time in HH:MM:SS. MediaTailor won't fill ad breaks on or behind this time in the manifest lookback window.
   */
  Value?: string;
}

export namespace AvailSuppression {
  export const filterSensitiveLog = (obj: AvailSuppression): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. </p>
 */
export interface Bumper {
  /**
   * <p>The URL for the end bumper asset. </p>
   */
  EndUrl?: string;

  /**
   * <p>The URL for the start bumper asset. </p>
   */
  StartUrl?: string;
}

export namespace Bumper {
  export const filterSensitiveLog = (obj: Bumper): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. </p>
 */
export interface CdnConfiguration {
  /**
   * <p>A non-default content delivery network (CDN) to serve ad segments. By default, AWS Elemental MediaTailor uses Amazon CloudFront with default cache settings as its CDN for ad segments. To set up an alternate CDN, create a rule in your CDN for the following origin: ads.mediatailor.&lt;region>.amazonaws.com. Then specify the rule's name in this AdSegmentUrlPrefix. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for ad segments.</p>
   */
  AdSegmentUrlPrefix?: string;

  /**
   * <p>A content delivery network (CDN) to cache content segments, so that content requests don’t always have to go to the origin server. First, create a rule in your CDN for the content segment origin server. Then specify the rule's name in this ContentSegmentUrlPrefix. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for content segments.</p>
   */
  ContentSegmentUrlPrefix?: string;
}

export namespace CdnConfiguration {
  export const filterSensitiveLog = (obj: CdnConfiguration): any => ({
    ...obj,
  });
}

export enum OriginManifestType {
  MULTI_PERIOD = "MULTI_PERIOD",
  SINGLE_PERIOD = "SINGLE_PERIOD",
}

/**
 * <p>The configuration for DASH content. </p>
 */
export interface DashConfiguration {
  /**
   * <p>The URL generated by MediaTailor to initiate a playback session. The session uses server-side reporting. This setting is ignored in PUT operations. </p>
   */
  ManifestEndpointPrefix?: string;

  /**
   * <p>The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are DISABLED and EMT_DEFAULT. The EMT_DEFAULT setting enables the inclusion of the tag and is the default value. </p>
   */
  MpdLocation?: string;

  /**
   * <p>The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to SINGLE_PERIOD. The default setting is MULTI_PERIOD. For multi-period manifests, omit this setting or set it to MULTI_PERIOD. </p>
   */
  OriginManifestType?: OriginManifestType | string;
}

export namespace DashConfiguration {
  export const filterSensitiveLog = (obj: DashConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for HLS content. </p>
 */
export interface HlsConfiguration {
  /**
   * <p>The URL that is used to initiate a playback session for devices that support Apple HLS. The session uses server-side reporting.</p>
   */
  ManifestEndpointPrefix?: string;
}

export namespace HlsConfiguration {
  export const filterSensitiveLog = (obj: HlsConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for Ad Marker Passthrough. Ad marker passthrough can be used to pass ad markers from the origin to the customized manifest.</p>
 */
export interface AdMarkerPassthrough {
  /**
   * <p>For HLS, when set to true, MediaTailor passes through EXT-X-CUE-IN, EXT-X-CUE-OUT, and EXT-X-SPLICEPOINT-SCTE35 ad markers from the origin manifest to the MediaTailor personalized manifest.</p><p>No logic is applied to these ad markers. For example, if EXT-X-CUE-OUT has a value of 60, but no ads are filled for that ad break, MediaTailor will not set the value to 0.</p>
   */
  Enabled?: boolean;
}

export namespace AdMarkerPassthrough {
  export const filterSensitiveLog = (obj: AdMarkerPassthrough): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
 */
export interface ManifestProcessingRules {
  /**
   * <p>The configuration for Ad Marker Passthrough. Ad marker passthrough can be used to pass ad markers from the origin to the customized manifest.</p>
   */
  AdMarkerPassthrough?: AdMarkerPassthrough;
}

export namespace ManifestProcessingRules {
  export const filterSensitiveLog = (obj: ManifestProcessingRules): any => ({
    ...obj,
  });
}

/**
 * <p>The AWSMediaTailor configuration.</p>
 */
export interface PlaybackConfiguration {
  /**
   * <p>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
   */
  AdDecisionServerUrl?: string;

  /**
   * <p>The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break.</p>
   */
  AvailSuppression?: AvailSuppression;

  /**
   * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. </p>
   */
  Bumper?: Bumper;

  /**
   * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. </p>
   */
  CdnConfiguration?: CdnConfiguration;

  /**
   * <p>Predefined aliases for dynamic variables.</p>
   */
  ConfigurationAliases?: { [key: string]: { [key: string]: string } };

  /**
   * <p>The configuration for DASH content. </p>
   */
  DashConfiguration?: DashConfiguration;

  /**
   * <p>The configuration for HLS content. </p>
   */
  HlsConfiguration?: HlsConfiguration;

  /**
   * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
   */
  ManifestProcessingRules?: ManifestProcessingRules;

  /**
   * <p>The identifier for the playback configuration.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the playback configuration. </p>
   */
  PlaybackConfigurationArn?: string;

  /**
   * <p>The URL that the player accesses to get a manifest from AWS Elemental MediaTailor. This session will use server-side reporting. </p>
   */
  PlaybackEndpointPrefix?: string;

  /**
   * <p>The URL that the player uses to initialize a session that uses client-side reporting. </p>
   */
  SessionInitializationEndpointPrefix?: string;

  /**
   * <p>The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. </p>
   */
  SlateAdUrl?: string;

  /**
   * <p>The tags assigned to the playback configuration. </p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
   */
  TranscodeProfileName?: string;

  /**
   * <p>The maximum duration of underfilled ad time (in seconds) allowed in an ad break.</p>
   */
  PersonalizationThresholdSeconds?: number;

  /**
   * <p>The URL prefix for the master playlist for the stream, minus the asset ID. The maximum length is 512 characters.</p>
   */
  VideoContentSourceUrl?: string;
}

export namespace PlaybackConfiguration {
  export const filterSensitiveLog = (obj: PlaybackConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Invalid request parameters.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for DASH PUT operations. </p>
 */
export interface DashConfigurationForPut {
  /**
   * <p>The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are DISABLED and EMT_DEFAULT. The EMT_DEFAULT setting enables the inclusion of the tag and is the default value. </p>
   */
  MpdLocation?: string;

  /**
   * <p>The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to SINGLE_PERIOD. The default setting is MULTI_PERIOD. For multi-period manifests, omit this setting or set it to MULTI_PERIOD. </p>
   */
  OriginManifestType?: OriginManifestType | string;
}

export namespace DashConfigurationForPut {
  export const filterSensitiveLog = (obj: DashConfigurationForPut): any => ({
    ...obj,
  });
}

export interface DeletePlaybackConfigurationRequest {
  /**
   * <p>The identifier for the playback configuration.</p>
   */
  Name: string | undefined;
}

export namespace DeletePlaybackConfigurationRequest {
  export const filterSensitiveLog = (obj: DeletePlaybackConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeletePlaybackConfigurationResponse {}

export namespace DeletePlaybackConfigurationResponse {
  export const filterSensitiveLog = (obj: DeletePlaybackConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetPlaybackConfigurationRequest {
  /**
   * <p>The identifier for the playback configuration.</p>
   */
  Name: string | undefined;
}

export namespace GetPlaybackConfigurationRequest {
  export const filterSensitiveLog = (obj: GetPlaybackConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for pre-roll ad insertion.</p>
 */
export interface LivePreRollConfiguration {
  /**
   * <p>The URL for the ad decision server (ADS) for pre-roll ads. This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
   */
  AdDecisionServerUrl?: string;

  /**
   * The maximum allowed duration for the pre-roll ad avail. AWS Elemental MediaTailor won't play pre-roll ads to exceed this duration, regardless of the total duration of ads that the ADS returns.
   */
  MaxDurationSeconds?: number;
}

export namespace LivePreRollConfiguration {
  export const filterSensitiveLog = (obj: LivePreRollConfiguration): any => ({
    ...obj,
  });
}

export interface GetPlaybackConfigurationResponse {
  /**
   * <p>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
   */
  AdDecisionServerUrl?: string;

  /**
   * <p>The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break.</p>
   */
  AvailSuppression?: AvailSuppression;

  /**
   * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. </p>
   */
  Bumper?: Bumper;

  /**
   * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. </p>
   */
  CdnConfiguration?: CdnConfiguration;

  /**
   * <p>Predefined aliases for dynamic variables.</p>
   */
  ConfigurationAliases?: { [key: string]: { [key: string]: string } };

  /**
   * <p>The configuration for DASH content. </p>
   */
  DashConfiguration?: DashConfiguration;

  /**
   * <p>The configuration for HLS content. </p>
   */
  HlsConfiguration?: HlsConfiguration;

  /**
   * <p>The configuration for pre-roll ad insertion.</p>
   */
  LivePreRollConfiguration?: LivePreRollConfiguration;

  /**
   * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
   */
  ManifestProcessingRules?: ManifestProcessingRules;

  /**
   * <p>The identifier for the playback configuration.</p>
   */
  Name?: string;

  /**
   * <p>The maximum duration of underfilled ad time (in seconds) allowed in an ad break.</p>
   */
  PersonalizationThresholdSeconds?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the playback configuration. </p>
   */
  PlaybackConfigurationArn?: string;

  /**
   * <p>The URL that the player accesses to get a manifest from AWS Elemental MediaTailor. This session will use server-side reporting. </p>
   */
  PlaybackEndpointPrefix?: string;

  /**
   * <p>The URL that the player uses to initialize a session that uses client-side reporting. </p>
   */
  SessionInitializationEndpointPrefix?: string;

  /**
   * <p>The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. </p>
   */
  SlateAdUrl?: string;

  /**
   * <p>The tags assigned to the playback configuration. </p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
   */
  TranscodeProfileName?: string;

  /**
   * <p>The URL prefix for the master playlist for the stream, minus the asset ID. The maximum length is 512 characters.</p>
   */
  VideoContentSourceUrl?: string;
}

export namespace GetPlaybackConfigurationResponse {
  export const filterSensitiveLog = (obj: GetPlaybackConfigurationResponse): any => ({
    ...obj,
  });
}

export interface ListPlaybackConfigurationsRequest {
  /**
   * <p>Maximum number of records to return. </p>
   */
  MaxResults?: number;

  /**
   * <p>Pagination token returned by the GET list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListPlaybackConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListPlaybackConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface ListPlaybackConfigurationsResponse {
  /**
   * <p>Array of playback configurations. This might be all the available configurations or a subset, depending on the settings that you provide and the total number of configurations stored. </p>
   */
  Items?: PlaybackConfiguration[];

  /**
   * <p>Pagination token returned by the GET list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListPlaybackConfigurationsResponse {
  export const filterSensitiveLog = (obj: ListPlaybackConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the playback configuration. You can get this from the response to any playback configuration request. </p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A comma-separated list of tag key:value pairs. For example:
   *  {
   *  "Key1": "Value1",
   *  "Key2": "Value2"
   *  }
   *  </p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface PutPlaybackConfigurationRequest {
  /**
   * <p>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
   */
  AdDecisionServerUrl?: string;

  /**
   * <p>The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break.</p>
   */
  AvailSuppression?: AvailSuppression;

  /**
   * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. </p>
   */
  Bumper?: Bumper;

  /**
   * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. </p>
   */
  CdnConfiguration?: CdnConfiguration;

  /**
   * <p>Predefined aliases for dynamic variables.</p>
   */
  ConfigurationAliases?: { [key: string]: { [key: string]: string } };

  /**
   * <p>The configuration for DASH content. </p>
   */
  DashConfiguration?: DashConfigurationForPut;

  /**
   * <p>The configuration for pre-roll ad insertion.</p>
   */
  LivePreRollConfiguration?: LivePreRollConfiguration;

  /**
   * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
   */
  ManifestProcessingRules?: ManifestProcessingRules;

  /**
   * <p>The identifier for the playback configuration.</p>
   */
  Name?: string;

  /**
   * <p>The maximum duration of underfilled ad time (in seconds) allowed in an ad break.</p>
   */
  PersonalizationThresholdSeconds?: number;

  /**
   * <p>The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. </p>
   */
  SlateAdUrl?: string;

  /**
   * <p>The tags to assign to the playback configuration. </p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
   */
  TranscodeProfileName?: string;

  /**
   * <p>The URL prefix for the master playlist for the stream, minus the asset ID. The maximum length is 512 characters.</p>
   */
  VideoContentSourceUrl?: string;
}

export namespace PutPlaybackConfigurationRequest {
  export const filterSensitiveLog = (obj: PutPlaybackConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutPlaybackConfigurationResponse {
  /**
   * <p>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
   */
  AdDecisionServerUrl?: string;

  /**
   * <p>The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break.</p>
   */
  AvailSuppression?: AvailSuppression;

  /**
   * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. </p>
   */
  Bumper?: Bumper;

  /**
   * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. </p>
   */
  CdnConfiguration?: CdnConfiguration;

  /**
   * <p>Predefined aliases for dynamic variables.</p>
   */
  ConfigurationAliases?: { [key: string]: { [key: string]: string } };

  /**
   * <p>The configuration for DASH content. </p>
   */
  DashConfiguration?: DashConfiguration;

  /**
   * <p>The configuration for HLS content. </p>
   */
  HlsConfiguration?: HlsConfiguration;

  /**
   * <p>The configuration for pre-roll ad insertion.</p>
   */
  LivePreRollConfiguration?: LivePreRollConfiguration;

  /**
   * The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.
   */
  ManifestProcessingRules?: ManifestProcessingRules;

  /**
   * <p>The identifier for the playback configuration.</p>
   */
  Name?: string;

  /**
   * <p>The maximum duration of underfilled ad time (in seconds) allowed in an ad break.</p>
   */
  PersonalizationThresholdSeconds?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the playback configuration. </p>
   */
  PlaybackConfigurationArn?: string;

  /**
   * <p>The URL that the player accesses to get a manifest from AWS Elemental MediaTailor. This session will use server-side reporting. </p>
   */
  PlaybackEndpointPrefix?: string;

  /**
   * <p>The URL that the player uses to initialize a session that uses client-side reporting. </p>
   */
  SessionInitializationEndpointPrefix?: string;

  /**
   * <p>The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. </p>
   */
  SlateAdUrl?: string;

  /**
   * <p>The tags assigned to the playback configuration. </p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
   */
  TranscodeProfileName?: string;

  /**
   * <p>The URL prefix for the master playlist for the stream, minus the asset ID. The maximum length is 512 characters.</p>
   */
  VideoContentSourceUrl?: string;
}

export namespace PutPlaybackConfigurationResponse {
  export const filterSensitiveLog = (obj: PutPlaybackConfigurationResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the playback configuration. You can get this from the response to any playback configuration request. </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A comma-separated list of tag key:value pairs. For example:
   *  {
   *  "Key1": "Value1",
   *  "Key2": "Value2"
   *  }
   *  </p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the playback configuration. You can get this from the response to any playback configuration request. </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A comma-separated list of the tag keys to remove from the playback configuration. </p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}
