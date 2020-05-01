import {
  AddTagsCommandInput,
  AddTagsCommandOutput
} from "../commands/AddTagsCommand";
import {
  ApplySecurityGroupsToLoadBalancerCommandInput,
  ApplySecurityGroupsToLoadBalancerCommandOutput
} from "../commands/ApplySecurityGroupsToLoadBalancerCommand";
import {
  AttachLoadBalancerToSubnetsCommandInput,
  AttachLoadBalancerToSubnetsCommandOutput
} from "../commands/AttachLoadBalancerToSubnetsCommand";
import {
  ConfigureHealthCheckCommandInput,
  ConfigureHealthCheckCommandOutput
} from "../commands/ConfigureHealthCheckCommand";
import {
  CreateAppCookieStickinessPolicyCommandInput,
  CreateAppCookieStickinessPolicyCommandOutput
} from "../commands/CreateAppCookieStickinessPolicyCommand";
import {
  CreateLBCookieStickinessPolicyCommandInput,
  CreateLBCookieStickinessPolicyCommandOutput
} from "../commands/CreateLBCookieStickinessPolicyCommand";
import {
  CreateLoadBalancerCommandInput,
  CreateLoadBalancerCommandOutput
} from "../commands/CreateLoadBalancerCommand";
import {
  CreateLoadBalancerListenersCommandInput,
  CreateLoadBalancerListenersCommandOutput
} from "../commands/CreateLoadBalancerListenersCommand";
import {
  CreateLoadBalancerPolicyCommandInput,
  CreateLoadBalancerPolicyCommandOutput
} from "../commands/CreateLoadBalancerPolicyCommand";
import {
  DeleteLoadBalancerCommandInput,
  DeleteLoadBalancerCommandOutput
} from "../commands/DeleteLoadBalancerCommand";
import {
  DeleteLoadBalancerListenersCommandInput,
  DeleteLoadBalancerListenersCommandOutput
} from "../commands/DeleteLoadBalancerListenersCommand";
import {
  DeleteLoadBalancerPolicyCommandInput,
  DeleteLoadBalancerPolicyCommandOutput
} from "../commands/DeleteLoadBalancerPolicyCommand";
import {
  DeregisterInstancesFromLoadBalancerCommandInput,
  DeregisterInstancesFromLoadBalancerCommandOutput
} from "../commands/DeregisterInstancesFromLoadBalancerCommand";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput
} from "../commands/DescribeAccountLimitsCommand";
import {
  DescribeInstanceHealthCommandInput,
  DescribeInstanceHealthCommandOutput
} from "../commands/DescribeInstanceHealthCommand";
import {
  DescribeLoadBalancerAttributesCommandInput,
  DescribeLoadBalancerAttributesCommandOutput
} from "../commands/DescribeLoadBalancerAttributesCommand";
import {
  DescribeLoadBalancerPoliciesCommandInput,
  DescribeLoadBalancerPoliciesCommandOutput
} from "../commands/DescribeLoadBalancerPoliciesCommand";
import {
  DescribeLoadBalancerPolicyTypesCommandInput,
  DescribeLoadBalancerPolicyTypesCommandOutput
} from "../commands/DescribeLoadBalancerPolicyTypesCommand";
import {
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput
} from "../commands/DescribeLoadBalancersCommand";
import {
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput
} from "../commands/DescribeTagsCommand";
import {
  DetachLoadBalancerFromSubnetsCommandInput,
  DetachLoadBalancerFromSubnetsCommandOutput
} from "../commands/DetachLoadBalancerFromSubnetsCommand";
import {
  DisableAvailabilityZonesForLoadBalancerCommandInput,
  DisableAvailabilityZonesForLoadBalancerCommandOutput
} from "../commands/DisableAvailabilityZonesForLoadBalancerCommand";
import {
  EnableAvailabilityZonesForLoadBalancerCommandInput,
  EnableAvailabilityZonesForLoadBalancerCommandOutput
} from "../commands/EnableAvailabilityZonesForLoadBalancerCommand";
import {
  ModifyLoadBalancerAttributesCommandInput,
  ModifyLoadBalancerAttributesCommandOutput
} from "../commands/ModifyLoadBalancerAttributesCommand";
import {
  RegisterInstancesWithLoadBalancerCommandInput,
  RegisterInstancesWithLoadBalancerCommandOutput
} from "../commands/RegisterInstancesWithLoadBalancerCommand";
import {
  RemoveTagsCommandInput,
  RemoveTagsCommandOutput
} from "../commands/RemoveTagsCommand";
import {
  SetLoadBalancerListenerSSLCertificateCommandInput,
  SetLoadBalancerListenerSSLCertificateCommandOutput
} from "../commands/SetLoadBalancerListenerSSLCertificateCommand";
import {
  SetLoadBalancerPoliciesForBackendServerCommandInput,
  SetLoadBalancerPoliciesForBackendServerCommandOutput
} from "../commands/SetLoadBalancerPoliciesForBackendServerCommand";
import {
  SetLoadBalancerPoliciesOfListenerCommandInput,
  SetLoadBalancerPoliciesOfListenerCommandOutput
} from "../commands/SetLoadBalancerPoliciesOfListenerCommand";
import {
  AccessLog,
  AccessPointNotFoundException,
  AddAvailabilityZonesInput,
  AddAvailabilityZonesOutput,
  AddTagsInput,
  AddTagsOutput,
  AdditionalAttribute,
  AppCookieStickinessPolicy,
  ApplySecurityGroupsToLoadBalancerInput,
  ApplySecurityGroupsToLoadBalancerOutput,
  AttachLoadBalancerToSubnetsInput,
  AttachLoadBalancerToSubnetsOutput,
  BackendServerDescription,
  CertificateNotFoundException,
  ConfigureHealthCheckInput,
  ConfigureHealthCheckOutput,
  ConnectionDraining,
  ConnectionSettings,
  CreateAccessPointInput,
  CreateAccessPointOutput,
  CreateAppCookieStickinessPolicyInput,
  CreateAppCookieStickinessPolicyOutput,
  CreateLBCookieStickinessPolicyInput,
  CreateLBCookieStickinessPolicyOutput,
  CreateLoadBalancerListenerInput,
  CreateLoadBalancerListenerOutput,
  CreateLoadBalancerPolicyInput,
  CreateLoadBalancerPolicyOutput,
  CrossZoneLoadBalancing,
  DeleteAccessPointInput,
  DeleteAccessPointOutput,
  DeleteLoadBalancerListenerInput,
  DeleteLoadBalancerListenerOutput,
  DeleteLoadBalancerPolicyInput,
  DeleteLoadBalancerPolicyOutput,
  DependencyThrottleException,
  DeregisterEndPointsInput,
  DeregisterEndPointsOutput,
  DescribeAccessPointsInput,
  DescribeAccessPointsOutput,
  DescribeAccountLimitsInput,
  DescribeAccountLimitsOutput,
  DescribeEndPointStateInput,
  DescribeEndPointStateOutput,
  DescribeLoadBalancerAttributesInput,
  DescribeLoadBalancerAttributesOutput,
  DescribeLoadBalancerPoliciesInput,
  DescribeLoadBalancerPoliciesOutput,
  DescribeLoadBalancerPolicyTypesInput,
  DescribeLoadBalancerPolicyTypesOutput,
  DescribeTagsInput,
  DescribeTagsOutput,
  DetachLoadBalancerFromSubnetsInput,
  DetachLoadBalancerFromSubnetsOutput,
  DuplicateAccessPointNameException,
  DuplicateListenerException,
  DuplicatePolicyNameException,
  DuplicateTagKeysException,
  HealthCheck,
  Instance,
  InstanceState,
  InvalidConfigurationRequestException,
  InvalidEndPointException,
  InvalidSchemeException,
  InvalidSecurityGroupException,
  InvalidSubnetException,
  LBCookieStickinessPolicy,
  Limit,
  Listener,
  ListenerDescription,
  ListenerNotFoundException,
  LoadBalancerAttributeNotFoundException,
  LoadBalancerAttributes,
  LoadBalancerDescription,
  ModifyLoadBalancerAttributesInput,
  ModifyLoadBalancerAttributesOutput,
  OperationNotPermittedException,
  Policies,
  PolicyAttribute,
  PolicyAttributeDescription,
  PolicyAttributeTypeDescription,
  PolicyDescription,
  PolicyNotFoundException,
  PolicyTypeDescription,
  PolicyTypeNotFoundException,
  RegisterEndPointsInput,
  RegisterEndPointsOutput,
  RemoveAvailabilityZonesInput,
  RemoveAvailabilityZonesOutput,
  RemoveTagsInput,
  RemoveTagsOutput,
  SetLoadBalancerListenerSSLCertificateInput,
  SetLoadBalancerListenerSSLCertificateOutput,
  SetLoadBalancerPoliciesForBackendServerInput,
  SetLoadBalancerPoliciesForBackendServerOutput,
  SetLoadBalancerPoliciesOfListenerInput,
  SetLoadBalancerPoliciesOfListenerOutput,
  SourceSecurityGroup,
  SubnetNotFoundException,
  Tag,
  TagDescription,
  TagKeyOnly,
  TooManyAccessPointsException,
  TooManyPoliciesException,
  TooManyTagsException,
  UnsupportedProtocolException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { parse as xmlParse } from "fast-xml-parser";

export async function serializeAws_queryAddTagsCommand(
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryAddTagsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "AddTags",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryApplySecurityGroupsToLoadBalancerCommand(
  input: ApplySecurityGroupsToLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryApplySecurityGroupsToLoadBalancerInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ApplySecurityGroupsToLoadBalancer",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryAttachLoadBalancerToSubnetsCommand(
  input: AttachLoadBalancerToSubnetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryAttachLoadBalancerToSubnetsInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "AttachLoadBalancerToSubnets",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryConfigureHealthCheckCommand(
  input: ConfigureHealthCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryConfigureHealthCheckInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ConfigureHealthCheck",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateAppCookieStickinessPolicyCommand(
  input: CreateAppCookieStickinessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateAppCookieStickinessPolicyInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateAppCookieStickinessPolicy",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateLBCookieStickinessPolicyCommand(
  input: CreateLBCookieStickinessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateLBCookieStickinessPolicyInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateLBCookieStickinessPolicy",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateLoadBalancerCommand(
  input: CreateLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateAccessPointInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateLoadBalancer",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateLoadBalancerListenersCommand(
  input: CreateLoadBalancerListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateLoadBalancerListenerInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateLoadBalancerListeners",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateLoadBalancerPolicyCommand(
  input: CreateLoadBalancerPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateLoadBalancerPolicyInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateLoadBalancerPolicy",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteLoadBalancerCommand(
  input: DeleteLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteAccessPointInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteLoadBalancer",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteLoadBalancerListenersCommand(
  input: DeleteLoadBalancerListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteLoadBalancerListenerInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteLoadBalancerListeners",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteLoadBalancerPolicyCommand(
  input: DeleteLoadBalancerPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteLoadBalancerPolicyInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteLoadBalancerPolicy",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeregisterInstancesFromLoadBalancerCommand(
  input: DeregisterInstancesFromLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeregisterEndPointsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeregisterInstancesFromLoadBalancer",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeAccountLimitsCommand(
  input: DescribeAccountLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeAccountLimitsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeAccountLimits",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeInstanceHealthCommand(
  input: DescribeInstanceHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeEndPointStateInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeInstanceHealth",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeLoadBalancerAttributesCommand(
  input: DescribeLoadBalancerAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeLoadBalancerAttributesInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeLoadBalancerAttributes",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeLoadBalancerPoliciesCommand(
  input: DescribeLoadBalancerPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeLoadBalancerPoliciesInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeLoadBalancerPolicies",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeLoadBalancerPolicyTypesCommand(
  input: DescribeLoadBalancerPolicyTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeLoadBalancerPolicyTypesInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeLoadBalancerPolicyTypes",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeLoadBalancersCommand(
  input: DescribeLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeAccessPointsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeLoadBalancers",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeTagsCommand(
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeTagsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeTags",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDetachLoadBalancerFromSubnetsCommand(
  input: DetachLoadBalancerFromSubnetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDetachLoadBalancerFromSubnetsInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DetachLoadBalancerFromSubnets",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand(
  input: DisableAvailabilityZonesForLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryRemoveAvailabilityZonesInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DisableAvailabilityZonesForLoadBalancer",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand(
  input: EnableAvailabilityZonesForLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryAddAvailabilityZonesInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "EnableAvailabilityZonesForLoadBalancer",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryModifyLoadBalancerAttributesCommand(
  input: ModifyLoadBalancerAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryModifyLoadBalancerAttributesInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ModifyLoadBalancerAttributes",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryRegisterInstancesWithLoadBalancerCommand(
  input: RegisterInstancesWithLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryRegisterEndPointsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "RegisterInstancesWithLoadBalancer",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryRemoveTagsCommand(
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryRemoveTagsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "RemoveTags",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_querySetLoadBalancerListenerSSLCertificateCommand(
  input: SetLoadBalancerListenerSSLCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_querySetLoadBalancerListenerSSLCertificateInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "SetLoadBalancerListenerSSLCertificate",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_querySetLoadBalancerPoliciesForBackendServerCommand(
  input: SetLoadBalancerPoliciesForBackendServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_querySetLoadBalancerPoliciesForBackendServerInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "SetLoadBalancerPoliciesForBackendServer",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_querySetLoadBalancerPoliciesOfListenerCommand(
  input: SetLoadBalancerPoliciesOfListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_querySetLoadBalancerPoliciesOfListenerInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "SetLoadBalancerPoliciesOfListener",
    Version: "2012-06-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_queryAddTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAddTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAddTagsOutput(data.AddTagsResult, context);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddTagsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryAddTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateTagKeysException":
    case "com.amazon.elb.version_2012_06_01#DuplicateTagKeysException":
      response = {
        ...(await deserializeAws_queryDuplicateTagKeysExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazon.elb.version_2012_06_01#TooManyTagsException":
      response = {
        ...(await deserializeAws_queryTooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryApplySecurityGroupsToLoadBalancerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplySecurityGroupsToLoadBalancerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryApplySecurityGroupsToLoadBalancerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplySecurityGroupsToLoadBalancerOutput(
    data.ApplySecurityGroupsToLoadBalancerResult,
    context
  );
  const response: ApplySecurityGroupsToLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ApplySecurityGroupsToLoadBalancerOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryApplySecurityGroupsToLoadBalancerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplySecurityGroupsToLoadBalancerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSecurityGroupException":
    case "com.amazon.elb.version_2012_06_01#InvalidSecurityGroupException":
      response = {
        ...(await deserializeAws_queryInvalidSecurityGroupExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryAttachLoadBalancerToSubnetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerToSubnetsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAttachLoadBalancerToSubnetsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAttachLoadBalancerToSubnetsOutput(
    data.AttachLoadBalancerToSubnetsResult,
    context
  );
  const response: AttachLoadBalancerToSubnetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachLoadBalancerToSubnetsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryAttachLoadBalancerToSubnetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerToSubnetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSubnetException":
    case "com.amazon.elb.version_2012_06_01#InvalidSubnetException":
      response = {
        ...(await deserializeAws_queryInvalidSubnetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetNotFoundException":
    case "com.amazon.elb.version_2012_06_01#SubnetNotFoundException":
      response = {
        ...(await deserializeAws_querySubnetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryConfigureHealthCheckCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureHealthCheckCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryConfigureHealthCheckCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryConfigureHealthCheckOutput(
    data.ConfigureHealthCheckResult,
    context
  );
  const response: ConfigureHealthCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfigureHealthCheckOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryConfigureHealthCheckCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureHealthCheckCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateAppCookieStickinessPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCookieStickinessPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateAppCookieStickinessPolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateAppCookieStickinessPolicyOutput(
    data.CreateAppCookieStickinessPolicyResult,
    context
  );
  const response: CreateAppCookieStickinessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAppCookieStickinessPolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateAppCookieStickinessPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCookieStickinessPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicatePolicyNameException":
    case "com.amazon.elb.version_2012_06_01#DuplicatePolicyNameException":
      response = {
        ...(await deserializeAws_queryDuplicatePolicyNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyPoliciesException":
    case "com.amazon.elb.version_2012_06_01#TooManyPoliciesException":
      response = {
        ...(await deserializeAws_queryTooManyPoliciesExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateLBCookieStickinessPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLBCookieStickinessPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateLBCookieStickinessPolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateLBCookieStickinessPolicyOutput(
    data.CreateLBCookieStickinessPolicyResult,
    context
  );
  const response: CreateLBCookieStickinessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLBCookieStickinessPolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateLBCookieStickinessPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLBCookieStickinessPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicatePolicyNameException":
    case "com.amazon.elb.version_2012_06_01#DuplicatePolicyNameException":
      response = {
        ...(await deserializeAws_queryDuplicatePolicyNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyPoliciesException":
    case "com.amazon.elb.version_2012_06_01#TooManyPoliciesException":
      response = {
        ...(await deserializeAws_queryTooManyPoliciesExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateLoadBalancerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateAccessPointOutput(
    data.CreateLoadBalancerResult,
    context
  );
  const response: CreateLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAccessPointOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateLoadBalancerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateNotFoundException":
    case "com.amazon.elb.version_2012_06_01#CertificateNotFoundException":
      response = {
        ...(await deserializeAws_queryCertificateNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateAccessPointNameException":
    case "com.amazon.elb.version_2012_06_01#DuplicateAccessPointNameException":
      response = {
        ...(await deserializeAws_queryDuplicateAccessPointNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateTagKeysException":
    case "com.amazon.elb.version_2012_06_01#DuplicateTagKeysException":
      response = {
        ...(await deserializeAws_queryDuplicateTagKeysExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSchemeException":
    case "com.amazon.elb.version_2012_06_01#InvalidSchemeException":
      response = {
        ...(await deserializeAws_queryInvalidSchemeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSecurityGroupException":
    case "com.amazon.elb.version_2012_06_01#InvalidSecurityGroupException":
      response = {
        ...(await deserializeAws_queryInvalidSecurityGroupExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSubnetException":
    case "com.amazon.elb.version_2012_06_01#InvalidSubnetException":
      response = {
        ...(await deserializeAws_queryInvalidSubnetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazon.elb.version_2012_06_01#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetNotFoundException":
    case "com.amazon.elb.version_2012_06_01#SubnetNotFoundException":
      response = {
        ...(await deserializeAws_querySubnetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyAccessPointsException":
    case "com.amazon.elb.version_2012_06_01#TooManyAccessPointsException":
      response = {
        ...(await deserializeAws_queryTooManyAccessPointsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazon.elb.version_2012_06_01#TooManyTagsException":
      response = {
        ...(await deserializeAws_queryTooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedProtocolException":
    case "com.amazon.elb.version_2012_06_01#UnsupportedProtocolException":
      response = {
        ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateLoadBalancerListenersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerListenersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateLoadBalancerListenersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateLoadBalancerListenerOutput(
    data.CreateLoadBalancerListenersResult,
    context
  );
  const response: CreateLoadBalancerListenersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLoadBalancerListenerOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateLoadBalancerListenersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerListenersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CertificateNotFoundException":
    case "com.amazon.elb.version_2012_06_01#CertificateNotFoundException":
      response = {
        ...(await deserializeAws_queryCertificateNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateListenerException":
    case "com.amazon.elb.version_2012_06_01#DuplicateListenerException":
      response = {
        ...(await deserializeAws_queryDuplicateListenerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedProtocolException":
    case "com.amazon.elb.version_2012_06_01#UnsupportedProtocolException":
      response = {
        ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateLoadBalancerPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateLoadBalancerPolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateLoadBalancerPolicyOutput(
    data.CreateLoadBalancerPolicyResult,
    context
  );
  const response: CreateLoadBalancerPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLoadBalancerPolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateLoadBalancerPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicatePolicyNameException":
    case "com.amazon.elb.version_2012_06_01#DuplicatePolicyNameException":
      response = {
        ...(await deserializeAws_queryDuplicatePolicyNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyTypeNotFoundException":
    case "com.amazon.elb.version_2012_06_01#PolicyTypeNotFoundException":
      response = {
        ...(await deserializeAws_queryPolicyTypeNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyPoliciesException":
    case "com.amazon.elb.version_2012_06_01#TooManyPoliciesException":
      response = {
        ...(await deserializeAws_queryTooManyPoliciesExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteLoadBalancerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteAccessPointOutput(
    data.DeleteLoadBalancerResult,
    context
  );
  const response: DeleteLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAccessPointOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteLoadBalancerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteLoadBalancerListenersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerListenersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteLoadBalancerListenersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteLoadBalancerListenerOutput(
    data.DeleteLoadBalancerListenersResult,
    context
  );
  const response: DeleteLoadBalancerListenersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLoadBalancerListenerOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteLoadBalancerListenersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerListenersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteLoadBalancerPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteLoadBalancerPolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteLoadBalancerPolicyOutput(
    data.DeleteLoadBalancerPolicyResult,
    context
  );
  const response: DeleteLoadBalancerPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLoadBalancerPolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteLoadBalancerPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeregisterInstancesFromLoadBalancerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterInstancesFromLoadBalancerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeregisterInstancesFromLoadBalancerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeregisterEndPointsOutput(
    data.DeregisterInstancesFromLoadBalancerResult,
    context
  );
  const response: DeregisterInstancesFromLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterEndPointsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeregisterInstancesFromLoadBalancerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterInstancesFromLoadBalancerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndPointException":
    case "com.amazon.elb.version_2012_06_01#InvalidEndPointException":
      response = {
        ...(await deserializeAws_queryInvalidEndPointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeAccountLimitsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeAccountLimitsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAccountLimitsOutput(
    data.DescribeAccountLimitsResult,
    context
  );
  const response: DescribeAccountLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAccountLimitsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeAccountLimitsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeInstanceHealthCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceHealthCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeInstanceHealthCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeEndPointStateOutput(
    data.DescribeInstanceHealthResult,
    context
  );
  const response: DescribeInstanceHealthCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEndPointStateOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeInstanceHealthCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceHealthCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndPointException":
    case "com.amazon.elb.version_2012_06_01#InvalidEndPointException":
      response = {
        ...(await deserializeAws_queryInvalidEndPointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeLoadBalancerAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerAttributesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeLoadBalancerAttributesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeLoadBalancerAttributesOutput(
    data.DescribeLoadBalancerAttributesResult,
    context
  );
  const response: DescribeLoadBalancerAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLoadBalancerAttributesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeLoadBalancerAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerAttributesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LoadBalancerAttributeNotFoundException":
    case "com.amazon.elb.version_2012_06_01#LoadBalancerAttributeNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerAttributeNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeLoadBalancerPoliciesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerPoliciesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeLoadBalancerPoliciesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeLoadBalancerPoliciesOutput(
    data.DescribeLoadBalancerPoliciesResult,
    context
  );
  const response: DescribeLoadBalancerPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLoadBalancerPoliciesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeLoadBalancerPoliciesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerPoliciesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyNotFoundException":
    case "com.amazon.elb.version_2012_06_01#PolicyNotFoundException":
      response = {
        ...(await deserializeAws_queryPolicyNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerPolicyTypesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeLoadBalancerPolicyTypesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeLoadBalancerPolicyTypesOutput(
    data.DescribeLoadBalancerPolicyTypesResult,
    context
  );
  const response: DescribeLoadBalancerPolicyTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLoadBalancerPolicyTypesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeLoadBalancerPolicyTypesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerPolicyTypesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "PolicyTypeNotFoundException":
    case "com.amazon.elb.version_2012_06_01#PolicyTypeNotFoundException":
      response = {
        ...(await deserializeAws_queryPolicyTypeNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeLoadBalancersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeLoadBalancersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAccessPointsOutput(
    data.DescribeLoadBalancersResult,
    context
  );
  const response: DescribeLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAccessPointsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeLoadBalancersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependencyThrottleException":
    case "com.amazon.elb.version_2012_06_01#DependencyThrottleException":
      response = {
        ...(await deserializeAws_queryDependencyThrottleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeTagsOutput(
    data.DescribeTagsResult,
    context
  );
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTagsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDetachLoadBalancerFromSubnetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachLoadBalancerFromSubnetsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDetachLoadBalancerFromSubnetsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDetachLoadBalancerFromSubnetsOutput(
    data.DetachLoadBalancerFromSubnetsResult,
    context
  );
  const response: DetachLoadBalancerFromSubnetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetachLoadBalancerFromSubnetsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDetachLoadBalancerFromSubnetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachLoadBalancerFromSubnetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAvailabilityZonesForLoadBalancerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRemoveAvailabilityZonesOutput(
    data.DisableAvailabilityZonesForLoadBalancerResult,
    context
  );
  const response: DisableAvailabilityZonesForLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveAvailabilityZonesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAvailabilityZonesForLoadBalancerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAvailabilityZonesForLoadBalancerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAddAvailabilityZonesOutput(
    data.EnableAvailabilityZonesForLoadBalancerResult,
    context
  );
  const response: EnableAvailabilityZonesForLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddAvailabilityZonesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAvailabilityZonesForLoadBalancerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryModifyLoadBalancerAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyLoadBalancerAttributesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryModifyLoadBalancerAttributesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyLoadBalancerAttributesOutput(
    data.ModifyLoadBalancerAttributesResult,
    context
  );
  const response: ModifyLoadBalancerAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyLoadBalancerAttributesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryModifyLoadBalancerAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyLoadBalancerAttributesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LoadBalancerAttributeNotFoundException":
    case "com.amazon.elb.version_2012_06_01#LoadBalancerAttributeNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerAttributeNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryRegisterInstancesWithLoadBalancerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterInstancesWithLoadBalancerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRegisterInstancesWithLoadBalancerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRegisterEndPointsOutput(
    data.RegisterInstancesWithLoadBalancerResult,
    context
  );
  const response: RegisterInstancesWithLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterEndPointsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryRegisterInstancesWithLoadBalancerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterInstancesWithLoadBalancerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndPointException":
    case "com.amazon.elb.version_2012_06_01#InvalidEndPointException":
      response = {
        ...(await deserializeAws_queryInvalidEndPointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryRemoveTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRemoveTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRemoveTagsOutput(
    data.RemoveTagsResult,
    context
  );
  const response: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveTagsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryRemoveTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_querySetLoadBalancerListenerSSLCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBalancerListenerSSLCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetLoadBalancerListenerSSLCertificateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetLoadBalancerListenerSSLCertificateOutput(
    data.SetLoadBalancerListenerSSLCertificateResult,
    context
  );
  const response: SetLoadBalancerListenerSSLCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SetLoadBalancerListenerSSLCertificateOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_querySetLoadBalancerListenerSSLCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBalancerListenerSSLCertificateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CertificateNotFoundException":
    case "com.amazon.elb.version_2012_06_01#CertificateNotFoundException":
      response = {
        ...(await deserializeAws_queryCertificateNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazon.elb.version_2012_06_01#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedProtocolException":
    case "com.amazon.elb.version_2012_06_01#UnsupportedProtocolException":
      response = {
        ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBalancerPoliciesForBackendServerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetLoadBalancerPoliciesForBackendServerOutput(
    data.SetLoadBalancerPoliciesForBackendServerResult,
    context
  );
  const response: SetLoadBalancerPoliciesForBackendServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SetLoadBalancerPoliciesForBackendServerOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBalancerPoliciesForBackendServerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyNotFoundException":
    case "com.amazon.elb.version_2012_06_01#PolicyNotFoundException":
      response = {
        ...(await deserializeAws_queryPolicyNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_querySetLoadBalancerPoliciesOfListenerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBalancerPoliciesOfListenerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetLoadBalancerPoliciesOfListenerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetLoadBalancerPoliciesOfListenerOutput(
    data.SetLoadBalancerPoliciesOfListenerResult,
    context
  );
  const response: SetLoadBalancerPoliciesOfListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SetLoadBalancerPoliciesOfListenerOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_querySetLoadBalancerPoliciesOfListenerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBalancerPoliciesOfListenerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFoundException":
    case "com.amazon.elb.version_2012_06_01#AccessPointNotFoundException":
      response = {
        ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2012_06_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazon.elb.version_2012_06_01#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyNotFoundException":
    case "com.amazon.elb.version_2012_06_01#PolicyNotFoundException":
      response = {
        ...(await deserializeAws_queryPolicyNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_queryAccessPointNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessPointNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAccessPointNotFoundException(
    body.Error,
    context
  );
  const contents: AccessPointNotFoundException = {
    name: "AccessPointNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryCertificateNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCertificateNotFoundException(
    body.Error,
    context
  );
  const contents: CertificateNotFoundException = {
    name: "CertificateNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDependencyThrottleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyThrottleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDependencyThrottleException(
    body.Error,
    context
  );
  const contents: DependencyThrottleException = {
    name: "DependencyThrottleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDuplicateAccessPointNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateAccessPointNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateAccessPointNameException(
    body.Error,
    context
  );
  const contents: DuplicateAccessPointNameException = {
    name: "DuplicateAccessPointNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDuplicateListenerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateListenerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateListenerException(
    body.Error,
    context
  );
  const contents: DuplicateListenerException = {
    name: "DuplicateListenerException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDuplicatePolicyNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicatePolicyNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicatePolicyNameException(
    body.Error,
    context
  );
  const contents: DuplicatePolicyNameException = {
    name: "DuplicatePolicyNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDuplicateTagKeysExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateTagKeysException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateTagKeysException(
    body.Error,
    context
  );
  const contents: DuplicateTagKeysException = {
    name: "DuplicateTagKeysException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidConfigurationRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConfigurationRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidConfigurationRequestException(
    body.Error,
    context
  );
  const contents: InvalidConfigurationRequestException = {
    name: "InvalidConfigurationRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidEndPointExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEndPointException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidEndPointException(
    body.Error,
    context
  );
  const contents: InvalidEndPointException = {
    name: "InvalidEndPointException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidSchemeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSchemeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSchemeException(
    body.Error,
    context
  );
  const contents: InvalidSchemeException = {
    name: "InvalidSchemeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidSecurityGroupExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSecurityGroupException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSecurityGroupException(
    body.Error,
    context
  );
  const contents: InvalidSecurityGroupException = {
    name: "InvalidSecurityGroupException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidSubnetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubnetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSubnetException(
    body.Error,
    context
  );
  const contents: InvalidSubnetException = {
    name: "InvalidSubnetException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryListenerNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ListenerNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryListenerNotFoundException(
    body.Error,
    context
  );
  const contents: ListenerNotFoundException = {
    name: "ListenerNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryLoadBalancerAttributeNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LoadBalancerAttributeNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryLoadBalancerAttributeNotFoundException(
    body.Error,
    context
  );
  const contents: LoadBalancerAttributeNotFoundException = {
    name: "LoadBalancerAttributeNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryOperationNotPermittedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOperationNotPermittedException(
    body.Error,
    context
  );
  const contents: OperationNotPermittedException = {
    name: "OperationNotPermittedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryPolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPolicyNotFoundException(
    body.Error,
    context
  );
  const contents: PolicyNotFoundException = {
    name: "PolicyNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryPolicyTypeNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyTypeNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPolicyTypeNotFoundException(
    body.Error,
    context
  );
  const contents: PolicyTypeNotFoundException = {
    name: "PolicyTypeNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_querySubnetNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubnetNotFoundException(
    body.Error,
    context
  );
  const contents: SubnetNotFoundException = {
    name: "SubnetNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyAccessPointsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyAccessPointsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyAccessPointsException(
    body.Error,
    context
  );
  const contents: TooManyAccessPointsException = {
    name: "TooManyAccessPointsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyPoliciesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyPoliciesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyPoliciesException(
    body.Error,
    context
  );
  const contents: TooManyPoliciesException = {
    name: "TooManyPoliciesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyTagsException(
    body.Error,
    context
  );
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryUnsupportedProtocolExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedProtocolException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUnsupportedProtocolException(
    body.Error,
    context
  );
  const contents: UnsupportedProtocolException = {
    name: "UnsupportedProtocolException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_queryAccessLog = (
  input: AccessLog,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EmitInterval !== undefined) {
    entries["EmitInterval"] = input.EmitInterval;
  }
  if (input.Enabled !== undefined) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.S3BucketName !== undefined) {
    entries["S3BucketName"] = input.S3BucketName;
  }
  if (input.S3BucketPrefix !== undefined) {
    entries["S3BucketPrefix"] = input.S3BucketPrefix;
  }
  return entries;
};

const serializeAws_queryAddAvailabilityZonesInput = (
  input: AddAvailabilityZonesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AvailabilityZones !== undefined) {
    const memberEntries = serializeAws_queryAvailabilityZones(
      input.AvailabilityZones,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  return entries;
};

const serializeAws_queryAddTagsInput = (
  input: AddTagsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerNames !== undefined) {
    const memberEntries = serializeAws_queryLoadBalancerNames(
      input.LoadBalancerNames,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryAdditionalAttribute = (
  input: AdditionalAttribute,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Key !== undefined) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryAdditionalAttributes = (
  input: Array<AdditionalAttribute>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryAdditionalAttribute(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryApplySecurityGroupsToLoadBalancerInput = (
  input: ApplySecurityGroupsToLoadBalancerInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.SecurityGroups !== undefined) {
    const memberEntries = serializeAws_querySecurityGroups(
      input.SecurityGroups,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `SecurityGroups.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryAttachLoadBalancerToSubnetsInput = (
  input: AttachLoadBalancerToSubnetsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.Subnets !== undefined) {
    const memberEntries = serializeAws_querySubnets(input.Subnets, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Subnets.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryAvailabilityZones = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryConfigureHealthCheckInput = (
  input: ConfigureHealthCheckInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.HealthCheck !== undefined) {
    const memberEntries = serializeAws_queryHealthCheck(
      input.HealthCheck,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `HealthCheck.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  return entries;
};

const serializeAws_queryConnectionDraining = (
  input: ConnectionDraining,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Enabled !== undefined) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.Timeout !== undefined) {
    entries["Timeout"] = input.Timeout;
  }
  return entries;
};

const serializeAws_queryConnectionSettings = (
  input: ConnectionSettings,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.IdleTimeout !== undefined) {
    entries["IdleTimeout"] = input.IdleTimeout;
  }
  return entries;
};

const serializeAws_queryCreateAccessPointInput = (
  input: CreateAccessPointInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AvailabilityZones !== undefined) {
    const memberEntries = serializeAws_queryAvailabilityZones(
      input.AvailabilityZones,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Listeners !== undefined) {
    const memberEntries = serializeAws_queryListeners(input.Listeners, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Listeners.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.Scheme !== undefined) {
    entries["Scheme"] = input.Scheme;
  }
  if (input.SecurityGroups !== undefined) {
    const memberEntries = serializeAws_querySecurityGroups(
      input.SecurityGroups,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `SecurityGroups.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Subnets !== undefined) {
    const memberEntries = serializeAws_querySubnets(input.Subnets, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Subnets.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryCreateAppCookieStickinessPolicyInput = (
  input: CreateAppCookieStickinessPolicyInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CookieName !== undefined) {
    entries["CookieName"] = input.CookieName;
  }
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.PolicyName !== undefined) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

const serializeAws_queryCreateLBCookieStickinessPolicyInput = (
  input: CreateLBCookieStickinessPolicyInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CookieExpirationPeriod !== undefined) {
    entries["CookieExpirationPeriod"] = input.CookieExpirationPeriod;
  }
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.PolicyName !== undefined) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

const serializeAws_queryCreateLoadBalancerListenerInput = (
  input: CreateLoadBalancerListenerInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Listeners !== undefined) {
    const memberEntries = serializeAws_queryListeners(input.Listeners, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Listeners.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  return entries;
};

const serializeAws_queryCreateLoadBalancerPolicyInput = (
  input: CreateLoadBalancerPolicyInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.PolicyAttributes !== undefined) {
    const memberEntries = serializeAws_queryPolicyAttributes(
      input.PolicyAttributes,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `PolicyAttributes.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.PolicyName !== undefined) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.PolicyTypeName !== undefined) {
    entries["PolicyTypeName"] = input.PolicyTypeName;
  }
  return entries;
};

const serializeAws_queryCrossZoneLoadBalancing = (
  input: CrossZoneLoadBalancing,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Enabled !== undefined) {
    entries["Enabled"] = input.Enabled;
  }
  return entries;
};

const serializeAws_queryDeleteAccessPointInput = (
  input: DeleteAccessPointInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  return entries;
};

const serializeAws_queryDeleteLoadBalancerListenerInput = (
  input: DeleteLoadBalancerListenerInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.LoadBalancerPorts !== undefined) {
    const memberEntries = serializeAws_queryPorts(
      input.LoadBalancerPorts,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `LoadBalancerPorts.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryDeleteLoadBalancerPolicyInput = (
  input: DeleteLoadBalancerPolicyInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.PolicyName !== undefined) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

const serializeAws_queryDeregisterEndPointsInput = (
  input: DeregisterEndPointsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Instances !== undefined) {
    const memberEntries = serializeAws_queryInstances(input.Instances, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Instances.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  return entries;
};

const serializeAws_queryDescribeAccessPointsInput = (
  input: DescribeAccessPointsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerNames !== undefined) {
    const memberEntries = serializeAws_queryLoadBalancerNames(
      input.LoadBalancerNames,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize !== undefined) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

const serializeAws_queryDescribeAccountLimitsInput = (
  input: DescribeAccountLimitsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize !== undefined) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

const serializeAws_queryDescribeEndPointStateInput = (
  input: DescribeEndPointStateInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Instances !== undefined) {
    const memberEntries = serializeAws_queryInstances(input.Instances, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Instances.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  return entries;
};

const serializeAws_queryDescribeLoadBalancerAttributesInput = (
  input: DescribeLoadBalancerAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  return entries;
};

const serializeAws_queryDescribeLoadBalancerPoliciesInput = (
  input: DescribeLoadBalancerPoliciesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.PolicyNames !== undefined) {
    const memberEntries = serializeAws_queryPolicyNames(
      input.PolicyNames,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `PolicyNames.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryDescribeLoadBalancerPolicyTypesInput = (
  input: DescribeLoadBalancerPolicyTypesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PolicyTypeNames !== undefined) {
    const memberEntries = serializeAws_queryPolicyTypeNames(
      input.PolicyTypeNames,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `PolicyTypeNames.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryDescribeTagsInput = (
  input: DescribeTagsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerNames !== undefined) {
    const memberEntries = serializeAws_queryLoadBalancerNamesMax20(
      input.LoadBalancerNames,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryDetachLoadBalancerFromSubnetsInput = (
  input: DetachLoadBalancerFromSubnetsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.Subnets !== undefined) {
    const memberEntries = serializeAws_querySubnets(input.Subnets, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Subnets.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryHealthCheck = (
  input: HealthCheck,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.HealthyThreshold !== undefined) {
    entries["HealthyThreshold"] = input.HealthyThreshold;
  }
  if (input.Interval !== undefined) {
    entries["Interval"] = input.Interval;
  }
  if (input.Target !== undefined) {
    entries["Target"] = input.Target;
  }
  if (input.Timeout !== undefined) {
    entries["Timeout"] = input.Timeout;
  }
  if (input.UnhealthyThreshold !== undefined) {
    entries["UnhealthyThreshold"] = input.UnhealthyThreshold;
  }
  return entries;
};

const serializeAws_queryInstance = (
  input: Instance,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.InstanceId !== undefined) {
    entries["InstanceId"] = input.InstanceId;
  }
  return entries;
};

const serializeAws_queryInstances = (
  input: Array<Instance>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryInstance(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryListener = (
  input: Listener,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.InstancePort !== undefined) {
    entries["InstancePort"] = input.InstancePort;
  }
  if (input.InstanceProtocol !== undefined) {
    entries["InstanceProtocol"] = input.InstanceProtocol;
  }
  if (input.LoadBalancerPort !== undefined) {
    entries["LoadBalancerPort"] = input.LoadBalancerPort;
  }
  if (input.Protocol !== undefined) {
    entries["Protocol"] = input.Protocol;
  }
  if (input.SSLCertificateId !== undefined) {
    entries["SSLCertificateId"] = input.SSLCertificateId;
  }
  return entries;
};

const serializeAws_queryListeners = (
  input: Array<Listener>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryListener(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryLoadBalancerAttributes = (
  input: LoadBalancerAttributes,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AccessLog !== undefined) {
    const memberEntries = serializeAws_queryAccessLog(input.AccessLog, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `AccessLog.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.AdditionalAttributes !== undefined) {
    const memberEntries = serializeAws_queryAdditionalAttributes(
      input.AdditionalAttributes,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `AdditionalAttributes.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ConnectionDraining !== undefined) {
    const memberEntries = serializeAws_queryConnectionDraining(
      input.ConnectionDraining,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ConnectionDraining.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ConnectionSettings !== undefined) {
    const memberEntries = serializeAws_queryConnectionSettings(
      input.ConnectionSettings,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ConnectionSettings.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.CrossZoneLoadBalancing !== undefined) {
    const memberEntries = serializeAws_queryCrossZoneLoadBalancing(
      input.CrossZoneLoadBalancing,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `CrossZoneLoadBalancing.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryLoadBalancerNames = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryLoadBalancerNamesMax20 = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryModifyLoadBalancerAttributesInput = (
  input: ModifyLoadBalancerAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerAttributes !== undefined) {
    const memberEntries = serializeAws_queryLoadBalancerAttributes(
      input.LoadBalancerAttributes,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `LoadBalancerAttributes.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  return entries;
};

const serializeAws_queryPolicyAttribute = (
  input: PolicyAttribute,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AttributeName !== undefined) {
    entries["AttributeName"] = input.AttributeName;
  }
  if (input.AttributeValue !== undefined) {
    entries["AttributeValue"] = input.AttributeValue;
  }
  return entries;
};

const serializeAws_queryPolicyAttributes = (
  input: Array<PolicyAttribute>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryPolicyAttribute(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryPolicyNames = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryPolicyTypeNames = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryPorts = (
  input: Array<number>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryRegisterEndPointsInput = (
  input: RegisterEndPointsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Instances !== undefined) {
    const memberEntries = serializeAws_queryInstances(input.Instances, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Instances.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  return entries;
};

const serializeAws_queryRemoveAvailabilityZonesInput = (
  input: RemoveAvailabilityZonesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AvailabilityZones !== undefined) {
    const memberEntries = serializeAws_queryAvailabilityZones(
      input.AvailabilityZones,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  return entries;
};

const serializeAws_queryRemoveTagsInput = (
  input: RemoveTagsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerNames !== undefined) {
    const memberEntries = serializeAws_queryLoadBalancerNames(
      input.LoadBalancerNames,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagKeyList(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_querySecurityGroups = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_querySetLoadBalancerListenerSSLCertificateInput = (
  input: SetLoadBalancerListenerSSLCertificateInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.LoadBalancerPort !== undefined) {
    entries["LoadBalancerPort"] = input.LoadBalancerPort;
  }
  if (input.SSLCertificateId !== undefined) {
    entries["SSLCertificateId"] = input.SSLCertificateId;
  }
  return entries;
};

const serializeAws_querySetLoadBalancerPoliciesForBackendServerInput = (
  input: SetLoadBalancerPoliciesForBackendServerInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.InstancePort !== undefined) {
    entries["InstancePort"] = input.InstancePort;
  }
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.PolicyNames !== undefined) {
    const memberEntries = serializeAws_queryPolicyNames(
      input.PolicyNames,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `PolicyNames.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_querySetLoadBalancerPoliciesOfListenerInput = (
  input: SetLoadBalancerPoliciesOfListenerInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName !== undefined) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.LoadBalancerPort !== undefined) {
    entries["LoadBalancerPort"] = input.LoadBalancerPort;
  }
  if (input.PolicyNames !== undefined) {
    const memberEntries = serializeAws_queryPolicyNames(
      input.PolicyNames,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `PolicyNames.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_querySubnets = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key !== undefined) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTagKeyList = (
  input: Array<TagKeyOnly>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryTagKeyOnly(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTagKeyOnly = (
  input: TagKeyOnly,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Key !== undefined) {
    entries["Key"] = input.Key;
  }
  return entries;
};

const serializeAws_queryTagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const deserializeAws_queryAccessLog = (
  output: any,
  context: __SerdeContext
): AccessLog => {
  let contents: any = {
    __type: "AccessLog",
    EmitInterval: undefined,
    Enabled: undefined,
    S3BucketName: undefined,
    S3BucketPrefix: undefined
  };
  if (output["EmitInterval"] !== undefined) {
    contents.EmitInterval = parseInt(
      output["EmitInterval"]["#text"] !== undefined
        ? output["EmitInterval"]["#text"]
        : output["EmitInterval"]
    );
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled =
      (output["Enabled"]["#text"] !== undefined
        ? output["Enabled"]["#text"]
        : output["Enabled"]) == "true";
  }
  if (output["S3BucketName"] !== undefined) {
    contents.S3BucketName =
      output["S3BucketName"]["#text"] !== undefined
        ? output["S3BucketName"]["#text"]
        : output["S3BucketName"];
  }
  if (output["S3BucketPrefix"] !== undefined) {
    contents.S3BucketPrefix =
      output["S3BucketPrefix"]["#text"] !== undefined
        ? output["S3BucketPrefix"]["#text"]
        : output["S3BucketPrefix"];
  }
  return contents;
};

const deserializeAws_queryAccessPointNotFoundException = (
  output: any,
  context: __SerdeContext
): AccessPointNotFoundException => {
  let contents: any = {
    __type: "AccessPointNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryAddAvailabilityZonesOutput = (
  output: any,
  context: __SerdeContext
): AddAvailabilityZonesOutput => {
  let contents: any = {
    __type: "AddAvailabilityZonesOutput",
    AvailabilityZones: undefined
  };
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  }
  if (
    output["AvailabilityZones"] !== undefined &&
    output["AvailabilityZones"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["AvailabilityZones"]["member"] instanceof Array
        ? output["AvailabilityZones"]["member"]
        : [output["AvailabilityZones"]["member"]];
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryAddTagsOutput = (
  output: any,
  context: __SerdeContext
): AddTagsOutput => {
  let contents: any = {
    __type: "AddTagsOutput"
  };
  return contents;
};

const deserializeAws_queryAdditionalAttribute = (
  output: any,
  context: __SerdeContext
): AdditionalAttribute => {
  let contents: any = {
    __type: "AdditionalAttribute",
    Key: undefined,
    Value: undefined
  };
  if (output["Key"] !== undefined) {
    contents.Key =
      output["Key"]["#text"] !== undefined
        ? output["Key"]["#text"]
        : output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value =
      output["Value"]["#text"] !== undefined
        ? output["Value"]["#text"]
        : output["Value"];
  }
  return contents;
};

const deserializeAws_queryAdditionalAttributes = (
  output: any,
  context: __SerdeContext
): Array<AdditionalAttribute> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryAdditionalAttribute(entry, context));
  });
  return contents;
};

const deserializeAws_queryAppCookieStickinessPolicies = (
  output: any,
  context: __SerdeContext
): Array<AppCookieStickinessPolicy> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(
      deserializeAws_queryAppCookieStickinessPolicy(entry, context)
    );
  });
  return contents;
};

const deserializeAws_queryAppCookieStickinessPolicy = (
  output: any,
  context: __SerdeContext
): AppCookieStickinessPolicy => {
  let contents: any = {
    __type: "AppCookieStickinessPolicy",
    CookieName: undefined,
    PolicyName: undefined
  };
  if (output["CookieName"] !== undefined) {
    contents.CookieName =
      output["CookieName"]["#text"] !== undefined
        ? output["CookieName"]["#text"]
        : output["CookieName"];
  }
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName =
      output["PolicyName"]["#text"] !== undefined
        ? output["PolicyName"]["#text"]
        : output["PolicyName"];
  }
  return contents;
};

const deserializeAws_queryApplySecurityGroupsToLoadBalancerOutput = (
  output: any,
  context: __SerdeContext
): ApplySecurityGroupsToLoadBalancerOutput => {
  let contents: any = {
    __type: "ApplySecurityGroupsToLoadBalancerOutput",
    SecurityGroups: undefined
  };
  if (output.SecurityGroups === "") {
    contents.SecurityGroups = [];
  }
  if (
    output["SecurityGroups"] !== undefined &&
    output["SecurityGroups"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["SecurityGroups"]["member"] instanceof Array
        ? output["SecurityGroups"]["member"]
        : [output["SecurityGroups"]["member"]];
    contents.SecurityGroups = deserializeAws_querySecurityGroups(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryAttachLoadBalancerToSubnetsOutput = (
  output: any,
  context: __SerdeContext
): AttachLoadBalancerToSubnetsOutput => {
  let contents: any = {
    __type: "AttachLoadBalancerToSubnetsOutput",
    Subnets: undefined
  };
  if (output.Subnets === "") {
    contents.Subnets = [];
  }
  if (
    output["Subnets"] !== undefined &&
    output["Subnets"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Subnets"]["member"] instanceof Array
        ? output["Subnets"]["member"]
        : [output["Subnets"]["member"]];
    contents.Subnets = deserializeAws_querySubnets(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryAvailabilityZones = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_queryBackendServerDescription = (
  output: any,
  context: __SerdeContext
): BackendServerDescription => {
  let contents: any = {
    __type: "BackendServerDescription",
    InstancePort: undefined,
    PolicyNames: undefined
  };
  if (output["InstancePort"] !== undefined) {
    contents.InstancePort = parseInt(
      output["InstancePort"]["#text"] !== undefined
        ? output["InstancePort"]["#text"]
        : output["InstancePort"]
    );
  }
  if (output.PolicyNames === "") {
    contents.PolicyNames = [];
  }
  if (
    output["PolicyNames"] !== undefined &&
    output["PolicyNames"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["PolicyNames"]["member"] instanceof Array
        ? output["PolicyNames"]["member"]
        : [output["PolicyNames"]["member"]];
    contents.PolicyNames = deserializeAws_queryPolicyNames(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryBackendServerDescriptions = (
  output: any,
  context: __SerdeContext
): Array<BackendServerDescription> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryBackendServerDescription(entry, context));
  });
  return contents;
};

const deserializeAws_queryCertificateNotFoundException = (
  output: any,
  context: __SerdeContext
): CertificateNotFoundException => {
  let contents: any = {
    __type: "CertificateNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryConfigureHealthCheckOutput = (
  output: any,
  context: __SerdeContext
): ConfigureHealthCheckOutput => {
  let contents: any = {
    __type: "ConfigureHealthCheckOutput",
    HealthCheck: undefined
  };
  if (output["HealthCheck"] !== undefined) {
    contents.HealthCheck = deserializeAws_queryHealthCheck(
      output["HealthCheck"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryConnectionDraining = (
  output: any,
  context: __SerdeContext
): ConnectionDraining => {
  let contents: any = {
    __type: "ConnectionDraining",
    Enabled: undefined,
    Timeout: undefined
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled =
      (output["Enabled"]["#text"] !== undefined
        ? output["Enabled"]["#text"]
        : output["Enabled"]) == "true";
  }
  if (output["Timeout"] !== undefined) {
    contents.Timeout = parseInt(
      output["Timeout"]["#text"] !== undefined
        ? output["Timeout"]["#text"]
        : output["Timeout"]
    );
  }
  return contents;
};

const deserializeAws_queryConnectionSettings = (
  output: any,
  context: __SerdeContext
): ConnectionSettings => {
  let contents: any = {
    __type: "ConnectionSettings",
    IdleTimeout: undefined
  };
  if (output["IdleTimeout"] !== undefined) {
    contents.IdleTimeout = parseInt(
      output["IdleTimeout"]["#text"] !== undefined
        ? output["IdleTimeout"]["#text"]
        : output["IdleTimeout"]
    );
  }
  return contents;
};

const deserializeAws_queryCreateAccessPointOutput = (
  output: any,
  context: __SerdeContext
): CreateAccessPointOutput => {
  let contents: any = {
    __type: "CreateAccessPointOutput",
    DNSName: undefined
  };
  if (output["DNSName"] !== undefined) {
    contents.DNSName =
      output["DNSName"]["#text"] !== undefined
        ? output["DNSName"]["#text"]
        : output["DNSName"];
  }
  return contents;
};

const deserializeAws_queryCreateAppCookieStickinessPolicyOutput = (
  output: any,
  context: __SerdeContext
): CreateAppCookieStickinessPolicyOutput => {
  let contents: any = {
    __type: "CreateAppCookieStickinessPolicyOutput"
  };
  return contents;
};

const deserializeAws_queryCreateLBCookieStickinessPolicyOutput = (
  output: any,
  context: __SerdeContext
): CreateLBCookieStickinessPolicyOutput => {
  let contents: any = {
    __type: "CreateLBCookieStickinessPolicyOutput"
  };
  return contents;
};

const deserializeAws_queryCreateLoadBalancerListenerOutput = (
  output: any,
  context: __SerdeContext
): CreateLoadBalancerListenerOutput => {
  let contents: any = {
    __type: "CreateLoadBalancerListenerOutput"
  };
  return contents;
};

const deserializeAws_queryCreateLoadBalancerPolicyOutput = (
  output: any,
  context: __SerdeContext
): CreateLoadBalancerPolicyOutput => {
  let contents: any = {
    __type: "CreateLoadBalancerPolicyOutput"
  };
  return contents;
};

const deserializeAws_queryCrossZoneLoadBalancing = (
  output: any,
  context: __SerdeContext
): CrossZoneLoadBalancing => {
  let contents: any = {
    __type: "CrossZoneLoadBalancing",
    Enabled: undefined
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled =
      (output["Enabled"]["#text"] !== undefined
        ? output["Enabled"]["#text"]
        : output["Enabled"]) == "true";
  }
  return contents;
};

const deserializeAws_queryDeleteAccessPointOutput = (
  output: any,
  context: __SerdeContext
): DeleteAccessPointOutput => {
  let contents: any = {
    __type: "DeleteAccessPointOutput"
  };
  return contents;
};

const deserializeAws_queryDeleteLoadBalancerListenerOutput = (
  output: any,
  context: __SerdeContext
): DeleteLoadBalancerListenerOutput => {
  let contents: any = {
    __type: "DeleteLoadBalancerListenerOutput"
  };
  return contents;
};

const deserializeAws_queryDeleteLoadBalancerPolicyOutput = (
  output: any,
  context: __SerdeContext
): DeleteLoadBalancerPolicyOutput => {
  let contents: any = {
    __type: "DeleteLoadBalancerPolicyOutput"
  };
  return contents;
};

const deserializeAws_queryDependencyThrottleException = (
  output: any,
  context: __SerdeContext
): DependencyThrottleException => {
  let contents: any = {
    __type: "DependencyThrottleException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryDeregisterEndPointsOutput = (
  output: any,
  context: __SerdeContext
): DeregisterEndPointsOutput => {
  let contents: any = {
    __type: "DeregisterEndPointsOutput",
    Instances: undefined
  };
  if (output.Instances === "") {
    contents.Instances = [];
  }
  if (
    output["Instances"] !== undefined &&
    output["Instances"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Instances"]["member"] instanceof Array
        ? output["Instances"]["member"]
        : [output["Instances"]["member"]];
    contents.Instances = deserializeAws_queryInstances(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryDescribeAccessPointsOutput = (
  output: any,
  context: __SerdeContext
): DescribeAccessPointsOutput => {
  let contents: any = {
    __type: "DescribeAccessPointsOutput",
    LoadBalancerDescriptions: undefined,
    NextMarker: undefined
  };
  if (output.LoadBalancerDescriptions === "") {
    contents.LoadBalancerDescriptions = [];
  }
  if (
    output["LoadBalancerDescriptions"] !== undefined &&
    output["LoadBalancerDescriptions"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["LoadBalancerDescriptions"]["member"] instanceof Array
        ? output["LoadBalancerDescriptions"]["member"]
        : [output["LoadBalancerDescriptions"]["member"]];
    contents.LoadBalancerDescriptions = deserializeAws_queryLoadBalancerDescriptions(
      wrappedItem,
      context
    );
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker =
      output["NextMarker"]["#text"] !== undefined
        ? output["NextMarker"]["#text"]
        : output["NextMarker"];
  }
  return contents;
};

const deserializeAws_queryDescribeAccountLimitsOutput = (
  output: any,
  context: __SerdeContext
): DescribeAccountLimitsOutput => {
  let contents: any = {
    __type: "DescribeAccountLimitsOutput",
    Limits: undefined,
    NextMarker: undefined
  };
  if (output.Limits === "") {
    contents.Limits = [];
  }
  if (
    output["Limits"] !== undefined &&
    output["Limits"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Limits"]["member"] instanceof Array
        ? output["Limits"]["member"]
        : [output["Limits"]["member"]];
    contents.Limits = deserializeAws_queryLimits(wrappedItem, context);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker =
      output["NextMarker"]["#text"] !== undefined
        ? output["NextMarker"]["#text"]
        : output["NextMarker"];
  }
  return contents;
};

const deserializeAws_queryDescribeEndPointStateOutput = (
  output: any,
  context: __SerdeContext
): DescribeEndPointStateOutput => {
  let contents: any = {
    __type: "DescribeEndPointStateOutput",
    InstanceStates: undefined
  };
  if (output.InstanceStates === "") {
    contents.InstanceStates = [];
  }
  if (
    output["InstanceStates"] !== undefined &&
    output["InstanceStates"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["InstanceStates"]["member"] instanceof Array
        ? output["InstanceStates"]["member"]
        : [output["InstanceStates"]["member"]];
    contents.InstanceStates = deserializeAws_queryInstanceStates(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeLoadBalancerAttributesOutput = (
  output: any,
  context: __SerdeContext
): DescribeLoadBalancerAttributesOutput => {
  let contents: any = {
    __type: "DescribeLoadBalancerAttributesOutput",
    LoadBalancerAttributes: undefined
  };
  if (output["LoadBalancerAttributes"] !== undefined) {
    contents.LoadBalancerAttributes = deserializeAws_queryLoadBalancerAttributes(
      output["LoadBalancerAttributes"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeLoadBalancerPoliciesOutput = (
  output: any,
  context: __SerdeContext
): DescribeLoadBalancerPoliciesOutput => {
  let contents: any = {
    __type: "DescribeLoadBalancerPoliciesOutput",
    PolicyDescriptions: undefined
  };
  if (output.PolicyDescriptions === "") {
    contents.PolicyDescriptions = [];
  }
  if (
    output["PolicyDescriptions"] !== undefined &&
    output["PolicyDescriptions"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["PolicyDescriptions"]["member"] instanceof Array
        ? output["PolicyDescriptions"]["member"]
        : [output["PolicyDescriptions"]["member"]];
    contents.PolicyDescriptions = deserializeAws_queryPolicyDescriptions(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeLoadBalancerPolicyTypesOutput = (
  output: any,
  context: __SerdeContext
): DescribeLoadBalancerPolicyTypesOutput => {
  let contents: any = {
    __type: "DescribeLoadBalancerPolicyTypesOutput",
    PolicyTypeDescriptions: undefined
  };
  if (output.PolicyTypeDescriptions === "") {
    contents.PolicyTypeDescriptions = [];
  }
  if (
    output["PolicyTypeDescriptions"] !== undefined &&
    output["PolicyTypeDescriptions"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["PolicyTypeDescriptions"]["member"] instanceof Array
        ? output["PolicyTypeDescriptions"]["member"]
        : [output["PolicyTypeDescriptions"]["member"]];
    contents.PolicyTypeDescriptions = deserializeAws_queryPolicyTypeDescriptions(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeTagsOutput = (
  output: any,
  context: __SerdeContext
): DescribeTagsOutput => {
  let contents: any = {
    __type: "DescribeTagsOutput",
    TagDescriptions: undefined
  };
  if (output.TagDescriptions === "") {
    contents.TagDescriptions = [];
  }
  if (
    output["TagDescriptions"] !== undefined &&
    output["TagDescriptions"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["TagDescriptions"]["member"] instanceof Array
        ? output["TagDescriptions"]["member"]
        : [output["TagDescriptions"]["member"]];
    contents.TagDescriptions = deserializeAws_queryTagDescriptions(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryDetachLoadBalancerFromSubnetsOutput = (
  output: any,
  context: __SerdeContext
): DetachLoadBalancerFromSubnetsOutput => {
  let contents: any = {
    __type: "DetachLoadBalancerFromSubnetsOutput",
    Subnets: undefined
  };
  if (output.Subnets === "") {
    contents.Subnets = [];
  }
  if (
    output["Subnets"] !== undefined &&
    output["Subnets"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Subnets"]["member"] instanceof Array
        ? output["Subnets"]["member"]
        : [output["Subnets"]["member"]];
    contents.Subnets = deserializeAws_querySubnets(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryDuplicateAccessPointNameException = (
  output: any,
  context: __SerdeContext
): DuplicateAccessPointNameException => {
  let contents: any = {
    __type: "DuplicateAccessPointNameException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryDuplicateListenerException = (
  output: any,
  context: __SerdeContext
): DuplicateListenerException => {
  let contents: any = {
    __type: "DuplicateListenerException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryDuplicatePolicyNameException = (
  output: any,
  context: __SerdeContext
): DuplicatePolicyNameException => {
  let contents: any = {
    __type: "DuplicatePolicyNameException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryDuplicateTagKeysException = (
  output: any,
  context: __SerdeContext
): DuplicateTagKeysException => {
  let contents: any = {
    __type: "DuplicateTagKeysException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryHealthCheck = (
  output: any,
  context: __SerdeContext
): HealthCheck => {
  let contents: any = {
    __type: "HealthCheck",
    HealthyThreshold: undefined,
    Interval: undefined,
    Target: undefined,
    Timeout: undefined,
    UnhealthyThreshold: undefined
  };
  if (output["HealthyThreshold"] !== undefined) {
    contents.HealthyThreshold = parseInt(
      output["HealthyThreshold"]["#text"] !== undefined
        ? output["HealthyThreshold"]["#text"]
        : output["HealthyThreshold"]
    );
  }
  if (output["Interval"] !== undefined) {
    contents.Interval = parseInt(
      output["Interval"]["#text"] !== undefined
        ? output["Interval"]["#text"]
        : output["Interval"]
    );
  }
  if (output["Target"] !== undefined) {
    contents.Target =
      output["Target"]["#text"] !== undefined
        ? output["Target"]["#text"]
        : output["Target"];
  }
  if (output["Timeout"] !== undefined) {
    contents.Timeout = parseInt(
      output["Timeout"]["#text"] !== undefined
        ? output["Timeout"]["#text"]
        : output["Timeout"]
    );
  }
  if (output["UnhealthyThreshold"] !== undefined) {
    contents.UnhealthyThreshold = parseInt(
      output["UnhealthyThreshold"]["#text"] !== undefined
        ? output["UnhealthyThreshold"]["#text"]
        : output["UnhealthyThreshold"]
    );
  }
  return contents;
};

const deserializeAws_queryInstance = (
  output: any,
  context: __SerdeContext
): Instance => {
  let contents: any = {
    __type: "Instance",
    InstanceId: undefined
  };
  if (output["InstanceId"] !== undefined) {
    contents.InstanceId =
      output["InstanceId"]["#text"] !== undefined
        ? output["InstanceId"]["#text"]
        : output["InstanceId"];
  }
  return contents;
};

const deserializeAws_queryInstanceState = (
  output: any,
  context: __SerdeContext
): InstanceState => {
  let contents: any = {
    __type: "InstanceState",
    Description: undefined,
    InstanceId: undefined,
    ReasonCode: undefined,
    State: undefined
  };
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  if (output["InstanceId"] !== undefined) {
    contents.InstanceId =
      output["InstanceId"]["#text"] !== undefined
        ? output["InstanceId"]["#text"]
        : output["InstanceId"];
  }
  if (output["ReasonCode"] !== undefined) {
    contents.ReasonCode =
      output["ReasonCode"]["#text"] !== undefined
        ? output["ReasonCode"]["#text"]
        : output["ReasonCode"];
  }
  if (output["State"] !== undefined) {
    contents.State =
      output["State"]["#text"] !== undefined
        ? output["State"]["#text"]
        : output["State"];
  }
  return contents;
};

const deserializeAws_queryInstanceStates = (
  output: any,
  context: __SerdeContext
): Array<InstanceState> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryInstanceState(entry, context));
  });
  return contents;
};

const deserializeAws_queryInstances = (
  output: any,
  context: __SerdeContext
): Array<Instance> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryInstance(entry, context));
  });
  return contents;
};

const deserializeAws_queryInvalidConfigurationRequestException = (
  output: any,
  context: __SerdeContext
): InvalidConfigurationRequestException => {
  let contents: any = {
    __type: "InvalidConfigurationRequestException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryInvalidEndPointException = (
  output: any,
  context: __SerdeContext
): InvalidEndPointException => {
  let contents: any = {
    __type: "InvalidEndPointException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryInvalidSchemeException = (
  output: any,
  context: __SerdeContext
): InvalidSchemeException => {
  let contents: any = {
    __type: "InvalidSchemeException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryInvalidSecurityGroupException = (
  output: any,
  context: __SerdeContext
): InvalidSecurityGroupException => {
  let contents: any = {
    __type: "InvalidSecurityGroupException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryInvalidSubnetException = (
  output: any,
  context: __SerdeContext
): InvalidSubnetException => {
  let contents: any = {
    __type: "InvalidSubnetException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryLBCookieStickinessPolicies = (
  output: any,
  context: __SerdeContext
): Array<LBCookieStickinessPolicy> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryLBCookieStickinessPolicy(entry, context));
  });
  return contents;
};

const deserializeAws_queryLBCookieStickinessPolicy = (
  output: any,
  context: __SerdeContext
): LBCookieStickinessPolicy => {
  let contents: any = {
    __type: "LBCookieStickinessPolicy",
    CookieExpirationPeriod: undefined,
    PolicyName: undefined
  };
  if (output["CookieExpirationPeriod"] !== undefined) {
    contents.CookieExpirationPeriod = parseInt(
      output["CookieExpirationPeriod"]["#text"] !== undefined
        ? output["CookieExpirationPeriod"]["#text"]
        : output["CookieExpirationPeriod"]
    );
  }
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName =
      output["PolicyName"]["#text"] !== undefined
        ? output["PolicyName"]["#text"]
        : output["PolicyName"];
  }
  return contents;
};

const deserializeAws_queryLimit = (
  output: any,
  context: __SerdeContext
): Limit => {
  let contents: any = {
    __type: "Limit",
    Max: undefined,
    Name: undefined
  };
  if (output["Max"] !== undefined) {
    contents.Max =
      output["Max"]["#text"] !== undefined
        ? output["Max"]["#text"]
        : output["Max"];
  }
  if (output["Name"] !== undefined) {
    contents.Name =
      output["Name"]["#text"] !== undefined
        ? output["Name"]["#text"]
        : output["Name"];
  }
  return contents;
};

const deserializeAws_queryLimits = (
  output: any,
  context: __SerdeContext
): Array<Limit> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryLimit(entry, context));
  });
  return contents;
};

const deserializeAws_queryListener = (
  output: any,
  context: __SerdeContext
): Listener => {
  let contents: any = {
    __type: "Listener",
    InstancePort: undefined,
    InstanceProtocol: undefined,
    LoadBalancerPort: undefined,
    Protocol: undefined,
    SSLCertificateId: undefined
  };
  if (output["InstancePort"] !== undefined) {
    contents.InstancePort = parseInt(
      output["InstancePort"]["#text"] !== undefined
        ? output["InstancePort"]["#text"]
        : output["InstancePort"]
    );
  }
  if (output["InstanceProtocol"] !== undefined) {
    contents.InstanceProtocol =
      output["InstanceProtocol"]["#text"] !== undefined
        ? output["InstanceProtocol"]["#text"]
        : output["InstanceProtocol"];
  }
  if (output["LoadBalancerPort"] !== undefined) {
    contents.LoadBalancerPort = parseInt(
      output["LoadBalancerPort"]["#text"] !== undefined
        ? output["LoadBalancerPort"]["#text"]
        : output["LoadBalancerPort"]
    );
  }
  if (output["Protocol"] !== undefined) {
    contents.Protocol =
      output["Protocol"]["#text"] !== undefined
        ? output["Protocol"]["#text"]
        : output["Protocol"];
  }
  if (output["SSLCertificateId"] !== undefined) {
    contents.SSLCertificateId =
      output["SSLCertificateId"]["#text"] !== undefined
        ? output["SSLCertificateId"]["#text"]
        : output["SSLCertificateId"];
  }
  return contents;
};

const deserializeAws_queryListenerDescription = (
  output: any,
  context: __SerdeContext
): ListenerDescription => {
  let contents: any = {
    __type: "ListenerDescription",
    Listener: undefined,
    PolicyNames: undefined
  };
  if (output["Listener"] !== undefined) {
    contents.Listener = deserializeAws_queryListener(
      output["Listener"],
      context
    );
  }
  if (output.PolicyNames === "") {
    contents.PolicyNames = [];
  }
  if (
    output["PolicyNames"] !== undefined &&
    output["PolicyNames"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["PolicyNames"]["member"] instanceof Array
        ? output["PolicyNames"]["member"]
        : [output["PolicyNames"]["member"]];
    contents.PolicyNames = deserializeAws_queryPolicyNames(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryListenerDescriptions = (
  output: any,
  context: __SerdeContext
): Array<ListenerDescription> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryListenerDescription(entry, context));
  });
  return contents;
};

const deserializeAws_queryListenerNotFoundException = (
  output: any,
  context: __SerdeContext
): ListenerNotFoundException => {
  let contents: any = {
    __type: "ListenerNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryLoadBalancerAttributeNotFoundException = (
  output: any,
  context: __SerdeContext
): LoadBalancerAttributeNotFoundException => {
  let contents: any = {
    __type: "LoadBalancerAttributeNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryLoadBalancerAttributes = (
  output: any,
  context: __SerdeContext
): LoadBalancerAttributes => {
  let contents: any = {
    __type: "LoadBalancerAttributes",
    AccessLog: undefined,
    AdditionalAttributes: undefined,
    ConnectionDraining: undefined,
    ConnectionSettings: undefined,
    CrossZoneLoadBalancing: undefined
  };
  if (output["AccessLog"] !== undefined) {
    contents.AccessLog = deserializeAws_queryAccessLog(
      output["AccessLog"],
      context
    );
  }
  if (output.AdditionalAttributes === "") {
    contents.AdditionalAttributes = [];
  }
  if (
    output["AdditionalAttributes"] !== undefined &&
    output["AdditionalAttributes"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["AdditionalAttributes"]["member"] instanceof Array
        ? output["AdditionalAttributes"]["member"]
        : [output["AdditionalAttributes"]["member"]];
    contents.AdditionalAttributes = deserializeAws_queryAdditionalAttributes(
      wrappedItem,
      context
    );
  }
  if (output["ConnectionDraining"] !== undefined) {
    contents.ConnectionDraining = deserializeAws_queryConnectionDraining(
      output["ConnectionDraining"],
      context
    );
  }
  if (output["ConnectionSettings"] !== undefined) {
    contents.ConnectionSettings = deserializeAws_queryConnectionSettings(
      output["ConnectionSettings"],
      context
    );
  }
  if (output["CrossZoneLoadBalancing"] !== undefined) {
    contents.CrossZoneLoadBalancing = deserializeAws_queryCrossZoneLoadBalancing(
      output["CrossZoneLoadBalancing"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryLoadBalancerDescription = (
  output: any,
  context: __SerdeContext
): LoadBalancerDescription => {
  let contents: any = {
    __type: "LoadBalancerDescription",
    AvailabilityZones: undefined,
    BackendServerDescriptions: undefined,
    CanonicalHostedZoneName: undefined,
    CanonicalHostedZoneNameID: undefined,
    CreatedTime: undefined,
    DNSName: undefined,
    HealthCheck: undefined,
    Instances: undefined,
    ListenerDescriptions: undefined,
    LoadBalancerName: undefined,
    Policies: undefined,
    Scheme: undefined,
    SecurityGroups: undefined,
    SourceSecurityGroup: undefined,
    Subnets: undefined,
    VPCId: undefined
  };
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  }
  if (
    output["AvailabilityZones"] !== undefined &&
    output["AvailabilityZones"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["AvailabilityZones"]["member"] instanceof Array
        ? output["AvailabilityZones"]["member"]
        : [output["AvailabilityZones"]["member"]];
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(
      wrappedItem,
      context
    );
  }
  if (output.BackendServerDescriptions === "") {
    contents.BackendServerDescriptions = [];
  }
  if (
    output["BackendServerDescriptions"] !== undefined &&
    output["BackendServerDescriptions"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["BackendServerDescriptions"]["member"] instanceof Array
        ? output["BackendServerDescriptions"]["member"]
        : [output["BackendServerDescriptions"]["member"]];
    contents.BackendServerDescriptions = deserializeAws_queryBackendServerDescriptions(
      wrappedItem,
      context
    );
  }
  if (output["CanonicalHostedZoneName"] !== undefined) {
    contents.CanonicalHostedZoneName =
      output["CanonicalHostedZoneName"]["#text"] !== undefined
        ? output["CanonicalHostedZoneName"]["#text"]
        : output["CanonicalHostedZoneName"];
  }
  if (output["CanonicalHostedZoneNameID"] !== undefined) {
    contents.CanonicalHostedZoneNameID =
      output["CanonicalHostedZoneNameID"]["#text"] !== undefined
        ? output["CanonicalHostedZoneNameID"]["#text"]
        : output["CanonicalHostedZoneNameID"];
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = new Date(output["CreatedTime"]);
  }
  if (output["DNSName"] !== undefined) {
    contents.DNSName =
      output["DNSName"]["#text"] !== undefined
        ? output["DNSName"]["#text"]
        : output["DNSName"];
  }
  if (output["HealthCheck"] !== undefined) {
    contents.HealthCheck = deserializeAws_queryHealthCheck(
      output["HealthCheck"],
      context
    );
  }
  if (output.Instances === "") {
    contents.Instances = [];
  }
  if (
    output["Instances"] !== undefined &&
    output["Instances"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Instances"]["member"] instanceof Array
        ? output["Instances"]["member"]
        : [output["Instances"]["member"]];
    contents.Instances = deserializeAws_queryInstances(wrappedItem, context);
  }
  if (output.ListenerDescriptions === "") {
    contents.ListenerDescriptions = [];
  }
  if (
    output["ListenerDescriptions"] !== undefined &&
    output["ListenerDescriptions"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["ListenerDescriptions"]["member"] instanceof Array
        ? output["ListenerDescriptions"]["member"]
        : [output["ListenerDescriptions"]["member"]];
    contents.ListenerDescriptions = deserializeAws_queryListenerDescriptions(
      wrappedItem,
      context
    );
  }
  if (output["LoadBalancerName"] !== undefined) {
    contents.LoadBalancerName =
      output["LoadBalancerName"]["#text"] !== undefined
        ? output["LoadBalancerName"]["#text"]
        : output["LoadBalancerName"];
  }
  if (output["Policies"] !== undefined) {
    contents.Policies = deserializeAws_queryPolicies(
      output["Policies"],
      context
    );
  }
  if (output["Scheme"] !== undefined) {
    contents.Scheme =
      output["Scheme"]["#text"] !== undefined
        ? output["Scheme"]["#text"]
        : output["Scheme"];
  }
  if (output.SecurityGroups === "") {
    contents.SecurityGroups = [];
  }
  if (
    output["SecurityGroups"] !== undefined &&
    output["SecurityGroups"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["SecurityGroups"]["member"] instanceof Array
        ? output["SecurityGroups"]["member"]
        : [output["SecurityGroups"]["member"]];
    contents.SecurityGroups = deserializeAws_querySecurityGroups(
      wrappedItem,
      context
    );
  }
  if (output["SourceSecurityGroup"] !== undefined) {
    contents.SourceSecurityGroup = deserializeAws_querySourceSecurityGroup(
      output["SourceSecurityGroup"],
      context
    );
  }
  if (output.Subnets === "") {
    contents.Subnets = [];
  }
  if (
    output["Subnets"] !== undefined &&
    output["Subnets"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Subnets"]["member"] instanceof Array
        ? output["Subnets"]["member"]
        : [output["Subnets"]["member"]];
    contents.Subnets = deserializeAws_querySubnets(wrappedItem, context);
  }
  if (output["VPCId"] !== undefined) {
    contents.VPCId =
      output["VPCId"]["#text"] !== undefined
        ? output["VPCId"]["#text"]
        : output["VPCId"];
  }
  return contents;
};

const deserializeAws_queryLoadBalancerDescriptions = (
  output: any,
  context: __SerdeContext
): Array<LoadBalancerDescription> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryLoadBalancerDescription(entry, context));
  });
  return contents;
};

const deserializeAws_queryModifyLoadBalancerAttributesOutput = (
  output: any,
  context: __SerdeContext
): ModifyLoadBalancerAttributesOutput => {
  let contents: any = {
    __type: "ModifyLoadBalancerAttributesOutput",
    LoadBalancerAttributes: undefined,
    LoadBalancerName: undefined
  };
  if (output["LoadBalancerAttributes"] !== undefined) {
    contents.LoadBalancerAttributes = deserializeAws_queryLoadBalancerAttributes(
      output["LoadBalancerAttributes"],
      context
    );
  }
  if (output["LoadBalancerName"] !== undefined) {
    contents.LoadBalancerName =
      output["LoadBalancerName"]["#text"] !== undefined
        ? output["LoadBalancerName"]["#text"]
        : output["LoadBalancerName"];
  }
  return contents;
};

const deserializeAws_queryOperationNotPermittedException = (
  output: any,
  context: __SerdeContext
): OperationNotPermittedException => {
  let contents: any = {
    __type: "OperationNotPermittedException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryPolicies = (
  output: any,
  context: __SerdeContext
): Policies => {
  let contents: any = {
    __type: "Policies",
    AppCookieStickinessPolicies: undefined,
    LBCookieStickinessPolicies: undefined,
    OtherPolicies: undefined
  };
  if (output.AppCookieStickinessPolicies === "") {
    contents.AppCookieStickinessPolicies = [];
  }
  if (
    output["AppCookieStickinessPolicies"] !== undefined &&
    output["AppCookieStickinessPolicies"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["AppCookieStickinessPolicies"]["member"] instanceof Array
        ? output["AppCookieStickinessPolicies"]["member"]
        : [output["AppCookieStickinessPolicies"]["member"]];
    contents.AppCookieStickinessPolicies = deserializeAws_queryAppCookieStickinessPolicies(
      wrappedItem,
      context
    );
  }
  if (output.LBCookieStickinessPolicies === "") {
    contents.LBCookieStickinessPolicies = [];
  }
  if (
    output["LBCookieStickinessPolicies"] !== undefined &&
    output["LBCookieStickinessPolicies"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["LBCookieStickinessPolicies"]["member"] instanceof Array
        ? output["LBCookieStickinessPolicies"]["member"]
        : [output["LBCookieStickinessPolicies"]["member"]];
    contents.LBCookieStickinessPolicies = deserializeAws_queryLBCookieStickinessPolicies(
      wrappedItem,
      context
    );
  }
  if (output.OtherPolicies === "") {
    contents.OtherPolicies = [];
  }
  if (
    output["OtherPolicies"] !== undefined &&
    output["OtherPolicies"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["OtherPolicies"]["member"] instanceof Array
        ? output["OtherPolicies"]["member"]
        : [output["OtherPolicies"]["member"]];
    contents.OtherPolicies = deserializeAws_queryPolicyNames(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryPolicyAttributeDescription = (
  output: any,
  context: __SerdeContext
): PolicyAttributeDescription => {
  let contents: any = {
    __type: "PolicyAttributeDescription",
    AttributeName: undefined,
    AttributeValue: undefined
  };
  if (output["AttributeName"] !== undefined) {
    contents.AttributeName =
      output["AttributeName"]["#text"] !== undefined
        ? output["AttributeName"]["#text"]
        : output["AttributeName"];
  }
  if (output["AttributeValue"] !== undefined) {
    contents.AttributeValue =
      output["AttributeValue"]["#text"] !== undefined
        ? output["AttributeValue"]["#text"]
        : output["AttributeValue"];
  }
  return contents;
};

const deserializeAws_queryPolicyAttributeDescriptions = (
  output: any,
  context: __SerdeContext
): Array<PolicyAttributeDescription> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(
      deserializeAws_queryPolicyAttributeDescription(entry, context)
    );
  });
  return contents;
};

const deserializeAws_queryPolicyAttributeTypeDescription = (
  output: any,
  context: __SerdeContext
): PolicyAttributeTypeDescription => {
  let contents: any = {
    __type: "PolicyAttributeTypeDescription",
    AttributeName: undefined,
    AttributeType: undefined,
    Cardinality: undefined,
    DefaultValue: undefined,
    Description: undefined
  };
  if (output["AttributeName"] !== undefined) {
    contents.AttributeName =
      output["AttributeName"]["#text"] !== undefined
        ? output["AttributeName"]["#text"]
        : output["AttributeName"];
  }
  if (output["AttributeType"] !== undefined) {
    contents.AttributeType =
      output["AttributeType"]["#text"] !== undefined
        ? output["AttributeType"]["#text"]
        : output["AttributeType"];
  }
  if (output["Cardinality"] !== undefined) {
    contents.Cardinality =
      output["Cardinality"]["#text"] !== undefined
        ? output["Cardinality"]["#text"]
        : output["Cardinality"];
  }
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue =
      output["DefaultValue"]["#text"] !== undefined
        ? output["DefaultValue"]["#text"]
        : output["DefaultValue"];
  }
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  return contents;
};

const deserializeAws_queryPolicyAttributeTypeDescriptions = (
  output: any,
  context: __SerdeContext
): Array<PolicyAttributeTypeDescription> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(
      deserializeAws_queryPolicyAttributeTypeDescription(entry, context)
    );
  });
  return contents;
};

const deserializeAws_queryPolicyDescription = (
  output: any,
  context: __SerdeContext
): PolicyDescription => {
  let contents: any = {
    __type: "PolicyDescription",
    PolicyAttributeDescriptions: undefined,
    PolicyName: undefined,
    PolicyTypeName: undefined
  };
  if (output.PolicyAttributeDescriptions === "") {
    contents.PolicyAttributeDescriptions = [];
  }
  if (
    output["PolicyAttributeDescriptions"] !== undefined &&
    output["PolicyAttributeDescriptions"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["PolicyAttributeDescriptions"]["member"] instanceof Array
        ? output["PolicyAttributeDescriptions"]["member"]
        : [output["PolicyAttributeDescriptions"]["member"]];
    contents.PolicyAttributeDescriptions = deserializeAws_queryPolicyAttributeDescriptions(
      wrappedItem,
      context
    );
  }
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName =
      output["PolicyName"]["#text"] !== undefined
        ? output["PolicyName"]["#text"]
        : output["PolicyName"];
  }
  if (output["PolicyTypeName"] !== undefined) {
    contents.PolicyTypeName =
      output["PolicyTypeName"]["#text"] !== undefined
        ? output["PolicyTypeName"]["#text"]
        : output["PolicyTypeName"];
  }
  return contents;
};

const deserializeAws_queryPolicyDescriptions = (
  output: any,
  context: __SerdeContext
): Array<PolicyDescription> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryPolicyDescription(entry, context));
  });
  return contents;
};

const deserializeAws_queryPolicyNames = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_queryPolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): PolicyNotFoundException => {
  let contents: any = {
    __type: "PolicyNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryPolicyTypeDescription = (
  output: any,
  context: __SerdeContext
): PolicyTypeDescription => {
  let contents: any = {
    __type: "PolicyTypeDescription",
    Description: undefined,
    PolicyAttributeTypeDescriptions: undefined,
    PolicyTypeName: undefined
  };
  if (output["Description"] !== undefined) {
    contents.Description =
      output["Description"]["#text"] !== undefined
        ? output["Description"]["#text"]
        : output["Description"];
  }
  if (output.PolicyAttributeTypeDescriptions === "") {
    contents.PolicyAttributeTypeDescriptions = [];
  }
  if (
    output["PolicyAttributeTypeDescriptions"] !== undefined &&
    output["PolicyAttributeTypeDescriptions"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["PolicyAttributeTypeDescriptions"]["member"] instanceof Array
        ? output["PolicyAttributeTypeDescriptions"]["member"]
        : [output["PolicyAttributeTypeDescriptions"]["member"]];
    contents.PolicyAttributeTypeDescriptions = deserializeAws_queryPolicyAttributeTypeDescriptions(
      wrappedItem,
      context
    );
  }
  if (output["PolicyTypeName"] !== undefined) {
    contents.PolicyTypeName =
      output["PolicyTypeName"]["#text"] !== undefined
        ? output["PolicyTypeName"]["#text"]
        : output["PolicyTypeName"];
  }
  return contents;
};

const deserializeAws_queryPolicyTypeDescriptions = (
  output: any,
  context: __SerdeContext
): Array<PolicyTypeDescription> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryPolicyTypeDescription(entry, context));
  });
  return contents;
};

const deserializeAws_queryPolicyTypeNotFoundException = (
  output: any,
  context: __SerdeContext
): PolicyTypeNotFoundException => {
  let contents: any = {
    __type: "PolicyTypeNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryRegisterEndPointsOutput = (
  output: any,
  context: __SerdeContext
): RegisterEndPointsOutput => {
  let contents: any = {
    __type: "RegisterEndPointsOutput",
    Instances: undefined
  };
  if (output.Instances === "") {
    contents.Instances = [];
  }
  if (
    output["Instances"] !== undefined &&
    output["Instances"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Instances"]["member"] instanceof Array
        ? output["Instances"]["member"]
        : [output["Instances"]["member"]];
    contents.Instances = deserializeAws_queryInstances(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryRemoveAvailabilityZonesOutput = (
  output: any,
  context: __SerdeContext
): RemoveAvailabilityZonesOutput => {
  let contents: any = {
    __type: "RemoveAvailabilityZonesOutput",
    AvailabilityZones: undefined
  };
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  }
  if (
    output["AvailabilityZones"] !== undefined &&
    output["AvailabilityZones"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["AvailabilityZones"]["member"] instanceof Array
        ? output["AvailabilityZones"]["member"]
        : [output["AvailabilityZones"]["member"]];
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryRemoveTagsOutput = (
  output: any,
  context: __SerdeContext
): RemoveTagsOutput => {
  let contents: any = {
    __type: "RemoveTagsOutput"
  };
  return contents;
};

const deserializeAws_querySecurityGroups = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_querySetLoadBalancerListenerSSLCertificateOutput = (
  output: any,
  context: __SerdeContext
): SetLoadBalancerListenerSSLCertificateOutput => {
  let contents: any = {
    __type: "SetLoadBalancerListenerSSLCertificateOutput"
  };
  return contents;
};

const deserializeAws_querySetLoadBalancerPoliciesForBackendServerOutput = (
  output: any,
  context: __SerdeContext
): SetLoadBalancerPoliciesForBackendServerOutput => {
  let contents: any = {
    __type: "SetLoadBalancerPoliciesForBackendServerOutput"
  };
  return contents;
};

const deserializeAws_querySetLoadBalancerPoliciesOfListenerOutput = (
  output: any,
  context: __SerdeContext
): SetLoadBalancerPoliciesOfListenerOutput => {
  let contents: any = {
    __type: "SetLoadBalancerPoliciesOfListenerOutput"
  };
  return contents;
};

const deserializeAws_querySourceSecurityGroup = (
  output: any,
  context: __SerdeContext
): SourceSecurityGroup => {
  let contents: any = {
    __type: "SourceSecurityGroup",
    GroupName: undefined,
    OwnerAlias: undefined
  };
  if (output["GroupName"] !== undefined) {
    contents.GroupName =
      output["GroupName"]["#text"] !== undefined
        ? output["GroupName"]["#text"]
        : output["GroupName"];
  }
  if (output["OwnerAlias"] !== undefined) {
    contents.OwnerAlias =
      output["OwnerAlias"]["#text"] !== undefined
        ? output["OwnerAlias"]["#text"]
        : output["OwnerAlias"];
  }
  return contents;
};

const deserializeAws_querySubnetNotFoundException = (
  output: any,
  context: __SerdeContext
): SubnetNotFoundException => {
  let contents: any = {
    __type: "SubnetNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_querySubnets = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_queryTag = (output: any, context: __SerdeContext): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output["Key"] !== undefined) {
    contents.Key =
      output["Key"]["#text"] !== undefined
        ? output["Key"]["#text"]
        : output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value =
      output["Value"]["#text"] !== undefined
        ? output["Value"]["#text"]
        : output["Value"];
  }
  return contents;
};

const deserializeAws_queryTagDescription = (
  output: any,
  context: __SerdeContext
): TagDescription => {
  let contents: any = {
    __type: "TagDescription",
    LoadBalancerName: undefined,
    Tags: undefined
  };
  if (output["LoadBalancerName"] !== undefined) {
    contents.LoadBalancerName =
      output["LoadBalancerName"]["#text"] !== undefined
        ? output["LoadBalancerName"]["#text"]
        : output["LoadBalancerName"];
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    const wrappedItem =
      output["Tags"]["member"] instanceof Array
        ? output["Tags"]["member"]
        : [output["Tags"]["member"]];
    contents.Tags = deserializeAws_queryTagList(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryTagDescriptions = (
  output: any,
  context: __SerdeContext
): Array<TagDescription> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryTagDescription(entry, context));
  });
  return contents;
};

const deserializeAws_queryTagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryTag(entry, context));
  });
  return contents;
};

const deserializeAws_queryTooManyAccessPointsException = (
  output: any,
  context: __SerdeContext
): TooManyAccessPointsException => {
  let contents: any = {
    __type: "TooManyAccessPointsException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryTooManyPoliciesException = (
  output: any,
  context: __SerdeContext
): TooManyPoliciesException => {
  let contents: any = {
    __type: "TooManyPoliciesException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryTooManyTagsException = (
  output: any,
  context: __SerdeContext
): TooManyTagsException => {
  let contents: any = {
    __type: "TooManyTagsException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_queryUnsupportedProtocolException = (
  output: any,
  context: __SerdeContext
): UnsupportedProtocolException => {
  let contents: any = {
    __type: "UnsupportedProtocolException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const decodeEscapedXML = (str: string) => {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        tagValueProcessor: (val, tagName) => decodeEscapedXML(val)
      });
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return parsedObjToReturn;
    }
    return {};
  });
};

const buildFormUrlencodedString = (entries: any): string => {
  return Object.keys(entries)
    .map(
      key =>
        __extendedEncodeURIComponent(key) +
        "=" +
        __extendedEncodeURIComponent(entries[key])
    )
    .join("&");
};

const loadQueryErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
