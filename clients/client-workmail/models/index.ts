import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AssociateDelegateToResourceRequest {
  __type?: "AssociateDelegateToResourceRequest";
  /**
   * <p>The member (user or group) to associate to the resource.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The organization under which the resource exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The resource for which members (users or groups) are associated.</p>
   */
  ResourceId: string | undefined;
}

export namespace AssociateDelegateToResourceRequest {
  export function isa(o: any): o is AssociateDelegateToResourceRequest {
    return _smithy.isa(o, "AssociateDelegateToResourceRequest");
  }
}

export interface AssociateDelegateToResourceResponse extends $MetadataBearer {
  __type?: "AssociateDelegateToResourceResponse";
}

export namespace AssociateDelegateToResourceResponse {
  export function isa(o: any): o is AssociateDelegateToResourceResponse {
    return _smithy.isa(o, "AssociateDelegateToResourceResponse");
  }
}

export interface AssociateMemberToGroupRequest {
  __type?: "AssociateMemberToGroupRequest";
  /**
   * <p>The group to which the member (user or group) is associated.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The member (user or group) to associate to the group.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The organization under which the group exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace AssociateMemberToGroupRequest {
  export function isa(o: any): o is AssociateMemberToGroupRequest {
    return _smithy.isa(o, "AssociateMemberToGroupRequest");
  }
}

export interface AssociateMemberToGroupResponse extends $MetadataBearer {
  __type?: "AssociateMemberToGroupResponse";
}

export namespace AssociateMemberToGroupResponse {
  export function isa(o: any): o is AssociateMemberToGroupResponse {
    return _smithy.isa(o, "AssociateMemberToGroupResponse");
  }
}

/**
 * <p>At least one delegate must be associated to the resource to disable automatic replies
 *          from the resource.</p>
 */
export interface BookingOptions {
  __type?: "BookingOptions";
  /**
   * <p>The resource's ability to automatically reply to requests. If disabled, delegates must be associated to the resource.</p>
   */
  AutoAcceptRequests?: boolean;

  /**
   * <p>The resource's ability to automatically decline any conflicting requests.</p>
   */
  AutoDeclineConflictingRequests?: boolean;

  /**
   * <p>The resource's ability to automatically decline any recurring requests.</p>
   */
  AutoDeclineRecurringRequests?: boolean;
}

export namespace BookingOptions {
  export function isa(o: any): o is BookingOptions {
    return _smithy.isa(o, "BookingOptions");
  }
}

export interface CreateAliasRequest {
  __type?: "CreateAliasRequest";
  /**
   * <p>The alias to add to the member set.</p>
   */
  Alias: string | undefined;

  /**
   * <p>The member (user or group) to which this alias is added.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The organization under which the member (user or group) exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace CreateAliasRequest {
  export function isa(o: any): o is CreateAliasRequest {
    return _smithy.isa(o, "CreateAliasRequest");
  }
}

export interface CreateAliasResponse extends $MetadataBearer {
  __type?: "CreateAliasResponse";
}

export namespace CreateAliasResponse {
  export function isa(o: any): o is CreateAliasResponse {
    return _smithy.isa(o, "CreateAliasResponse");
  }
}

export interface CreateGroupRequest {
  __type?: "CreateGroupRequest";
  /**
   * <p>The name of the group.</p>
   */
  Name: string | undefined;

  /**
   * <p>The organization under which the group is to be created.</p>
   */
  OrganizationId: string | undefined;
}

export namespace CreateGroupRequest {
  export function isa(o: any): o is CreateGroupRequest {
    return _smithy.isa(o, "CreateGroupRequest");
  }
}

export interface CreateGroupResponse extends $MetadataBearer {
  __type?: "CreateGroupResponse";
  /**
   * <p>The identifier of the group.</p>
   */
  GroupId?: string;
}

export namespace CreateGroupResponse {
  export function isa(o: any): o is CreateGroupResponse {
    return _smithy.isa(o, "CreateGroupResponse");
  }
}

export interface CreateResourceRequest {
  __type?: "CreateResourceRequest";
  /**
   * <p>The name of the new resource.</p>
   */
  Name: string | undefined;

  /**
   * <p>The identifier associated with the organization for which the resource is
   *          created.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The type of the new resource. The available types are <code>equipment</code> and
   *             <code>room</code>.</p>
   */
  Type: ResourceType | string | undefined;
}

export namespace CreateResourceRequest {
  export function isa(o: any): o is CreateResourceRequest {
    return _smithy.isa(o, "CreateResourceRequest");
  }
}

export interface CreateResourceResponse extends $MetadataBearer {
  __type?: "CreateResourceResponse";
  /**
   * <p>The identifier of the new resource.</p>
   */
  ResourceId?: string;
}

export namespace CreateResourceResponse {
  export function isa(o: any): o is CreateResourceResponse {
    return _smithy.isa(o, "CreateResourceResponse");
  }
}

export interface CreateUserRequest {
  __type?: "CreateUserRequest";
  /**
   * <p>The display name for the new user.</p>
   */
  DisplayName: string | undefined;

  /**
   * <p>The name for the new user. Simple AD or AD Connector user names have a maximum length of 20. All others have a maximum length of 64.</p>
   */
  Name: string | undefined;

  /**
   * <p>The identifier of the organization for which the user is created.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The password for the new user.</p>
   */
  Password: string | undefined;
}

export namespace CreateUserRequest {
  export function isa(o: any): o is CreateUserRequest {
    return _smithy.isa(o, "CreateUserRequest");
  }
}

export interface CreateUserResponse extends $MetadataBearer {
  __type?: "CreateUserResponse";
  /**
   * <p>The identifier for the new user.</p>
   */
  UserId?: string;
}

export namespace CreateUserResponse {
  export function isa(o: any): o is CreateUserResponse {
    return _smithy.isa(o, "CreateUserResponse");
  }
}

/**
 * <p>The name of the attribute, which is one of the values defined in the UserAttribute
 *          enumeration.</p>
 */
export interface Delegate {
  __type?: "Delegate";
  /**
   * <p>The identifier for the user or group associated as the resource's delegate.</p>
   */
  Id: string | undefined;

  /**
   * <p>The type of the delegate: user or group.</p>
   */
  Type: MemberType | string | undefined;
}

export namespace Delegate {
  export function isa(o: any): o is Delegate {
    return _smithy.isa(o, "Delegate");
  }
}

export interface DeleteAliasRequest {
  __type?: "DeleteAliasRequest";
  /**
   * <p>The aliases to be removed from the user's set of aliases. Duplicate entries in the
   *          list are collapsed into single entries (the list is transformed into a set).</p>
   */
  Alias: string | undefined;

  /**
   * <p>The identifier for the member (user or group) from which to have the aliases
   *          removed.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The identifier for the organization under which the user exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DeleteAliasRequest {
  export function isa(o: any): o is DeleteAliasRequest {
    return _smithy.isa(o, "DeleteAliasRequest");
  }
}

export interface DeleteAliasResponse extends $MetadataBearer {
  __type?: "DeleteAliasResponse";
}

export namespace DeleteAliasResponse {
  export function isa(o: any): o is DeleteAliasResponse {
    return _smithy.isa(o, "DeleteAliasResponse");
  }
}

export interface DeleteGroupRequest {
  __type?: "DeleteGroupRequest";
  /**
   * <p>The identifier of the group to be deleted.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The organization that contains the group.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DeleteGroupRequest {
  export function isa(o: any): o is DeleteGroupRequest {
    return _smithy.isa(o, "DeleteGroupRequest");
  }
}

export interface DeleteGroupResponse extends $MetadataBearer {
  __type?: "DeleteGroupResponse";
}

export namespace DeleteGroupResponse {
  export function isa(o: any): o is DeleteGroupResponse {
    return _smithy.isa(o, "DeleteGroupResponse");
  }
}

export interface DeleteMailboxPermissionsRequest {
  __type?: "DeleteMailboxPermissionsRequest";
  /**
   * <p>The identifier of the member (user or group)that owns the mailbox.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The identifier of the member (user or group) for which to delete granted
   *          permissions.</p>
   */
  GranteeId: string | undefined;

  /**
   * <p>The identifier of the organization under which the member (user or group)
   *          exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DeleteMailboxPermissionsRequest {
  export function isa(o: any): o is DeleteMailboxPermissionsRequest {
    return _smithy.isa(o, "DeleteMailboxPermissionsRequest");
  }
}

export interface DeleteMailboxPermissionsResponse extends $MetadataBearer {
  __type?: "DeleteMailboxPermissionsResponse";
}

export namespace DeleteMailboxPermissionsResponse {
  export function isa(o: any): o is DeleteMailboxPermissionsResponse {
    return _smithy.isa(o, "DeleteMailboxPermissionsResponse");
  }
}

export interface DeleteResourceRequest {
  __type?: "DeleteResourceRequest";
  /**
   * <p>The identifier associated with the organization from which the resource is
   *          deleted.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the resource to be deleted.</p>
   */
  ResourceId: string | undefined;
}

export namespace DeleteResourceRequest {
  export function isa(o: any): o is DeleteResourceRequest {
    return _smithy.isa(o, "DeleteResourceRequest");
  }
}

export interface DeleteResourceResponse extends $MetadataBearer {
  __type?: "DeleteResourceResponse";
}

export namespace DeleteResourceResponse {
  export function isa(o: any): o is DeleteResourceResponse {
    return _smithy.isa(o, "DeleteResourceResponse");
  }
}

export interface DeleteUserRequest {
  __type?: "DeleteUserRequest";
  /**
   * <p>The organization that contains the user to be deleted.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the user to be deleted.</p>
   */
  UserId: string | undefined;
}

export namespace DeleteUserRequest {
  export function isa(o: any): o is DeleteUserRequest {
    return _smithy.isa(o, "DeleteUserRequest");
  }
}

export interface DeleteUserResponse extends $MetadataBearer {
  __type?: "DeleteUserResponse";
}

export namespace DeleteUserResponse {
  export function isa(o: any): o is DeleteUserResponse {
    return _smithy.isa(o, "DeleteUserResponse");
  }
}

export interface DeregisterFromWorkMailRequest {
  __type?: "DeregisterFromWorkMailRequest";
  /**
   * <p>The identifier for the member (user or group) to be updated.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The identifier for the organization under which the Amazon WorkMail entity
   *          exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DeregisterFromWorkMailRequest {
  export function isa(o: any): o is DeregisterFromWorkMailRequest {
    return _smithy.isa(o, "DeregisterFromWorkMailRequest");
  }
}

export interface DeregisterFromWorkMailResponse extends $MetadataBearer {
  __type?: "DeregisterFromWorkMailResponse";
}

export namespace DeregisterFromWorkMailResponse {
  export function isa(o: any): o is DeregisterFromWorkMailResponse {
    return _smithy.isa(o, "DeregisterFromWorkMailResponse");
  }
}

export interface DescribeGroupRequest {
  __type?: "DescribeGroupRequest";
  /**
   * <p>The identifier for the group to be described.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The identifier for the organization under which the group exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DescribeGroupRequest {
  export function isa(o: any): o is DescribeGroupRequest {
    return _smithy.isa(o, "DescribeGroupRequest");
  }
}

export interface DescribeGroupResponse extends $MetadataBearer {
  __type?: "DescribeGroupResponse";
  /**
   * <p>The date and time when a user was deregistered from WorkMail, in UNIX epoch time
   *          format.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The email of the described group.</p>
   */
  Email?: string;

  /**
   * <p>The date and time when a user was registered to WorkMail, in UNIX epoch time
   *          format.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The identifier of the described group.</p>
   */
  GroupId?: string;

  /**
   * <p>The name of the described group.</p>
   */
  Name?: string;

  /**
   * <p>The state of the user: enabled (registered to Amazon WorkMail) or disabled
   *          (deregistered or never registered to WorkMail).</p>
   */
  State?: EntityState | string;
}

export namespace DescribeGroupResponse {
  export function isa(o: any): o is DescribeGroupResponse {
    return _smithy.isa(o, "DescribeGroupResponse");
  }
}

export interface DescribeOrganizationRequest {
  __type?: "DescribeOrganizationRequest";
  /**
   * <p>The identifier for the organization to be described.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DescribeOrganizationRequest {
  export function isa(o: any): o is DescribeOrganizationRequest {
    return _smithy.isa(o, "DescribeOrganizationRequest");
  }
}

export interface DescribeOrganizationResponse extends $MetadataBearer {
  __type?: "DescribeOrganizationResponse";
  /**
   * <p>The alias for an organization.</p>
   */
  Alias?: string;

  /**
   * <p>The date at which the organization became usable in the WorkMail context, in UNIX epoch
   *          time format.</p>
   */
  CompletedDate?: Date;

  /**
   * <p>The default mail domain associated with the organization.</p>
   */
  DefaultMailDomain?: string;

  /**
   * <p>The identifier for the directory associated with an Amazon WorkMail
   *          organization.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The type of directory associated with the WorkMail organization.</p>
   */
  DirectoryType?: string;

  /**
   * <p>(Optional) The error message indicating if unexpected behavior was encountered with
   *          regards to the organization.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The identifier of an organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The state of an organization.</p>
   */
  State?: string;
}

export namespace DescribeOrganizationResponse {
  export function isa(o: any): o is DescribeOrganizationResponse {
    return _smithy.isa(o, "DescribeOrganizationResponse");
  }
}

export interface DescribeResourceRequest {
  __type?: "DescribeResourceRequest";
  /**
   * <p>The identifier associated with the organization for which the resource is
   *          described.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the resource to be described.</p>
   */
  ResourceId: string | undefined;
}

export namespace DescribeResourceRequest {
  export function isa(o: any): o is DescribeResourceRequest {
    return _smithy.isa(o, "DescribeResourceRequest");
  }
}

export interface DescribeResourceResponse extends $MetadataBearer {
  __type?: "DescribeResourceResponse";
  /**
   * <p>The booking options for the described resource.</p>
   */
  BookingOptions?: BookingOptions;

  /**
   * <p>The date and time when a resource was disabled from WorkMail, in UNIX epoch time
   *          format.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The email of the described resource.</p>
   */
  Email?: string;

  /**
   * <p>The date and time when a resource was enabled for WorkMail, in UNIX epoch time
   *          format.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The name of the described resource.</p>
   */
  Name?: string;

  /**
   * <p>The identifier of the described resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The state of the resource: enabled (registered to Amazon WorkMail) or disabled
   *          (deregistered or never registered to WorkMail).</p>
   */
  State?: EntityState | string;

  /**
   * <p>The type of the described resource.</p>
   */
  Type?: ResourceType | string;
}

export namespace DescribeResourceResponse {
  export function isa(o: any): o is DescribeResourceResponse {
    return _smithy.isa(o, "DescribeResourceResponse");
  }
}

export interface DescribeUserRequest {
  __type?: "DescribeUserRequest";
  /**
   * <p>The identifier for the organization under which the user exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the user to be described.</p>
   */
  UserId: string | undefined;
}

export namespace DescribeUserRequest {
  export function isa(o: any): o is DescribeUserRequest {
    return _smithy.isa(o, "DescribeUserRequest");
  }
}

export interface DescribeUserResponse extends $MetadataBearer {
  __type?: "DescribeUserResponse";
  /**
   * <p>The date and time at which the user was disabled for Amazon WorkMail usage, in UNIX epoch time format.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The display name of the user.</p>
   */
  DisplayName?: string;

  /**
   * <p>The email of the user.</p>
   */
  Email?: string;

  /**
   * <p>The date and time at which the user was enabled for Amazon WorkMail usage, in UNIX epoch time format.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The name for the user.</p>
   */
  Name?: string;

  /**
   * <p>The state of a user: enabled (registered to Amazon WorkMail) or disabled
   *          (deregistered or never registered to WorkMail).</p>
   */
  State?: EntityState | string;

  /**
   * <p>The identifier for the described user.</p>
   */
  UserId?: string;

  /**
   * <p>In certain cases, other entities are modeled as users. If interoperability is
   *          enabled, resources are imported into Amazon WorkMail as users. Because different
   *          WorkMail organizations rely on different directory types, administrators can distinguish
   *          between an unregistered user (account is disabled and has a user role) and the directory
   *          administrators. The values are USER, RESOURCE, and SYSTEM_USER.</p>
   */
  UserRole?: UserRole | string;
}

export namespace DescribeUserResponse {
  export function isa(o: any): o is DescribeUserResponse {
    return _smithy.isa(o, "DescribeUserResponse");
  }
}

/**
 * <p>The directory service doesn't recognize the credentials supplied by
 *          WorkMail.</p>
 */
export interface DirectoryServiceAuthenticationFailedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DirectoryServiceAuthenticationFailedException";
  name: "DirectoryServiceAuthenticationFailedException";
  $fault: "client";
  Message?: string;
}

export namespace DirectoryServiceAuthenticationFailedException {
  export function isa(
    o: any
  ): o is DirectoryServiceAuthenticationFailedException {
    return _smithy.isa(o, "DirectoryServiceAuthenticationFailedException");
  }
}

/**
 * <p>The directory on which you are trying to perform operations isn't
 *          available.</p>
 */
export interface DirectoryUnavailableException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DirectoryUnavailableException";
  name: "DirectoryUnavailableException";
  $fault: "client";
  Message?: string;
}

export namespace DirectoryUnavailableException {
  export function isa(o: any): o is DirectoryUnavailableException {
    return _smithy.isa(o, "DirectoryUnavailableException");
  }
}

export interface DisassociateDelegateFromResourceRequest {
  __type?: "DisassociateDelegateFromResourceRequest";
  /**
   * <p>The identifier for the member (user, group) to be removed from the resource's delegates.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The identifier for the organization under which the resource exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the resource from which delegates' set members are removed. </p>
   */
  ResourceId: string | undefined;
}

export namespace DisassociateDelegateFromResourceRequest {
  export function isa(o: any): o is DisassociateDelegateFromResourceRequest {
    return _smithy.isa(o, "DisassociateDelegateFromResourceRequest");
  }
}

export interface DisassociateDelegateFromResourceResponse
  extends $MetadataBearer {
  __type?: "DisassociateDelegateFromResourceResponse";
}

export namespace DisassociateDelegateFromResourceResponse {
  export function isa(o: any): o is DisassociateDelegateFromResourceResponse {
    return _smithy.isa(o, "DisassociateDelegateFromResourceResponse");
  }
}

export interface DisassociateMemberFromGroupRequest {
  __type?: "DisassociateMemberFromGroupRequest";
  /**
   * <p>The identifier for the group from which members are removed.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The identifier for the member to be removed to the group.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The identifier for the organization under which the group exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DisassociateMemberFromGroupRequest {
  export function isa(o: any): o is DisassociateMemberFromGroupRequest {
    return _smithy.isa(o, "DisassociateMemberFromGroupRequest");
  }
}

export interface DisassociateMemberFromGroupResponse extends $MetadataBearer {
  __type?: "DisassociateMemberFromGroupResponse";
}

export namespace DisassociateMemberFromGroupResponse {
  export function isa(o: any): o is DisassociateMemberFromGroupResponse {
    return _smithy.isa(o, "DisassociateMemberFromGroupResponse");
  }
}

/**
 * <p>The email address that you're trying to assign is already created for a different
 *          user, group, or resource.</p>
 */
export interface EmailAddressInUseException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "EmailAddressInUseException";
  name: "EmailAddressInUseException";
  $fault: "client";
  Message?: string;
}

export namespace EmailAddressInUseException {
  export function isa(o: any): o is EmailAddressInUseException {
    return _smithy.isa(o, "EmailAddressInUseException");
  }
}

/**
 * <p>The user, group, or resource that you're trying to register is already registered.</p>
 */
export interface EntityAlreadyRegisteredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "EntityAlreadyRegisteredException";
  name: "EntityAlreadyRegisteredException";
  $fault: "client";
  Message?: string;
}

export namespace EntityAlreadyRegisteredException {
  export function isa(o: any): o is EntityAlreadyRegisteredException {
    return _smithy.isa(o, "EntityAlreadyRegisteredException");
  }
}

/**
 * <p>The identifier supplied for the user, group, or resource does not
 *          exist in your organization.</p>
 */
export interface EntityNotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "EntityNotFoundException";
  name: "EntityNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace EntityNotFoundException {
  export function isa(o: any): o is EntityNotFoundException {
    return _smithy.isa(o, "EntityNotFoundException");
  }
}

export enum EntityState {
  DELETED = "DELETED",
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

/**
 * <p>You are performing an operation on a user, group, or resource that isn't in the
 *          expected state, such as trying to delete an active user.</p>
 */
export interface EntityStateException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "EntityStateException";
  name: "EntityStateException";
  $fault: "client";
  Message?: string;
}

export namespace EntityStateException {
  export function isa(o: any): o is EntityStateException {
    return _smithy.isa(o, "EntityStateException");
  }
}

export interface GetMailboxDetailsRequest {
  __type?: "GetMailboxDetailsRequest";
  /**
   * <p>The identifier for the organization that contains the user whose mailbox details are
   *          being requested.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the user whose mailbox details are being requested.</p>
   */
  UserId: string | undefined;
}

export namespace GetMailboxDetailsRequest {
  export function isa(o: any): o is GetMailboxDetailsRequest {
    return _smithy.isa(o, "GetMailboxDetailsRequest");
  }
}

export interface GetMailboxDetailsResponse extends $MetadataBearer {
  __type?: "GetMailboxDetailsResponse";
  /**
   * <p>The maximum allowed mailbox size, in MB, for the specified user.</p>
   */
  MailboxQuota?: number;

  /**
   * <p>The current mailbox size, in MB, for the specified user.</p>
   */
  MailboxSize?: number;
}

export namespace GetMailboxDetailsResponse {
  export function isa(o: any): o is GetMailboxDetailsResponse {
    return _smithy.isa(o, "GetMailboxDetailsResponse");
  }
}

/**
 * <p>The representation of an Amazon WorkMail group.</p>
 */
export interface Group {
  __type?: "Group";
  /**
   * <p>The date indicating when the group was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The email of the group.</p>
   */
  Email?: string;

  /**
   * <p>The date indicating when the group was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The identifier of the group.</p>
   */
  Id?: string;

  /**
   * <p>The name of the group.</p>
   */
  Name?: string;

  /**
   * <p>The state of the group, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: EntityState | string;
}

export namespace Group {
  export function isa(o: any): o is Group {
    return _smithy.isa(o, "Group");
  }
}

/**
 * <p>The configuration for a resource isn't valid. A resource must either be able to
 *          auto-respond to requests or have at least one delegate associated that can do so on its
 *          behalf.</p>
 */
export interface InvalidConfigurationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidConfigurationException";
  name: "InvalidConfigurationException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidConfigurationException {
  export function isa(o: any): o is InvalidConfigurationException {
    return _smithy.isa(o, "InvalidConfigurationException");
  }
}

/**
 * <p>One or more of the input parameters don't match the service's restrictions.</p>
 */
export interface InvalidParameterException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidParameterException";
  name: "InvalidParameterException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidParameterException {
  export function isa(o: any): o is InvalidParameterException {
    return _smithy.isa(o, "InvalidParameterException");
  }
}

/**
 * <p>The supplied password doesn't match the minimum security constraints, such as length
 *          or use of special characters.</p>
 */
export interface InvalidPasswordException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidPasswordException";
  name: "InvalidPasswordException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidPasswordException {
  export function isa(o: any): o is InvalidPasswordException {
    return _smithy.isa(o, "InvalidPasswordException");
  }
}

export interface ListAliasesRequest {
  __type?: "ListAliasesRequest";
  /**
   * <p>The identifier for the entity for which to list the aliases.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier for the organization under which the entity exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace ListAliasesRequest {
  export function isa(o: any): o is ListAliasesRequest {
    return _smithy.isa(o, "ListAliasesRequest");
  }
}

export interface ListAliasesResponse extends $MetadataBearer {
  __type?: "ListAliasesResponse";
  /**
   * <p>The entity's paginated aliases.</p>
   */
  Aliases?: Array<string>;

  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there
   *          are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace ListAliasesResponse {
  export function isa(o: any): o is ListAliasesResponse {
    return _smithy.isa(o, "ListAliasesResponse");
  }
}

export interface ListGroupMembersRequest {
  __type?: "ListGroupMembersRequest";
  /**
   * <p>The identifier for the group to which the members (users or groups) are associated.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p> The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier for the organization under which the group exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace ListGroupMembersRequest {
  export function isa(o: any): o is ListGroupMembersRequest {
    return _smithy.isa(o, "ListGroupMembersRequest");
  }
}

export interface ListGroupMembersResponse extends $MetadataBearer {
  __type?: "ListGroupMembersResponse";
  /**
   * <p>The members associated to the group.</p>
   */
  Members?: Array<Member>;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;
}

export namespace ListGroupMembersResponse {
  export function isa(o: any): o is ListGroupMembersResponse {
    return _smithy.isa(o, "ListGroupMembersResponse");
  }
}

export interface ListGroupsRequest {
  __type?: "ListGroupsRequest";
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier for the organization under which the groups exist.</p>
   */
  OrganizationId: string | undefined;
}

export namespace ListGroupsRequest {
  export function isa(o: any): o is ListGroupsRequest {
    return _smithy.isa(o, "ListGroupsRequest");
  }
}

export interface ListGroupsResponse extends $MetadataBearer {
  __type?: "ListGroupsResponse";
  /**
   * <p>The overview of groups for an organization.</p>
   */
  Groups?: Array<Group>;

  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there
   *          are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace ListGroupsResponse {
  export function isa(o: any): o is ListGroupsResponse {
    return _smithy.isa(o, "ListGroupsResponse");
  }
}

export interface ListMailboxPermissionsRequest {
  __type?: "ListMailboxPermissionsRequest";
  /**
   * <p>The identifier of the user, group, or resource for which to list mailbox
   *          permissions.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier of the organization under which the user, group, or resource
   *          exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace ListMailboxPermissionsRequest {
  export function isa(o: any): o is ListMailboxPermissionsRequest {
    return _smithy.isa(o, "ListMailboxPermissionsRequest");
  }
}

export interface ListMailboxPermissionsResponse extends $MetadataBearer {
  __type?: "ListMailboxPermissionsResponse";
  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>One page of the user, group, or resource mailbox permissions.</p>
   */
  Permissions?: Array<Permission>;
}

export namespace ListMailboxPermissionsResponse {
  export function isa(o: any): o is ListMailboxPermissionsResponse {
    return _smithy.isa(o, "ListMailboxPermissionsResponse");
  }
}

export interface ListOrganizationsRequest {
  __type?: "ListOrganizationsRequest";
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;
}

export namespace ListOrganizationsRequest {
  export function isa(o: any): o is ListOrganizationsRequest {
    return _smithy.isa(o, "ListOrganizationsRequest");
  }
}

export interface ListOrganizationsResponse extends $MetadataBearer {
  __type?: "ListOrganizationsResponse";
  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there
   *          are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The overview of owned organizations presented as a list of organization summaries.</p>
   */
  OrganizationSummaries?: Array<OrganizationSummary>;
}

export namespace ListOrganizationsResponse {
  export function isa(o: any): o is ListOrganizationsResponse {
    return _smithy.isa(o, "ListOrganizationsResponse");
  }
}

export interface ListResourceDelegatesRequest {
  __type?: "ListResourceDelegatesRequest";
  /**
   * <p>The number of maximum results in a page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token used to paginate through the delegates associated with a resource.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier for the organization that contains the resource for which delegates
   *          are listed.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the resource whose delegates are listed.</p>
   */
  ResourceId: string | undefined;
}

export namespace ListResourceDelegatesRequest {
  export function isa(o: any): o is ListResourceDelegatesRequest {
    return _smithy.isa(o, "ListResourceDelegatesRequest");
  }
}

export interface ListResourceDelegatesResponse extends $MetadataBearer {
  __type?: "ListResourceDelegatesResponse";
  /**
   * <p>One page of the resource's delegates.</p>
   */
  Delegates?: Array<Delegate>;

  /**
   * <p>The token used to paginate through the delegates associated with a resource. While
   *          results are still available, it has an associated value. When the last page is reached, the
   *          token is empty. </p>
   */
  NextToken?: string;
}

export namespace ListResourceDelegatesResponse {
  export function isa(o: any): o is ListResourceDelegatesResponse {
    return _smithy.isa(o, "ListResourceDelegatesResponse");
  }
}

export interface ListResourcesRequest {
  __type?: "ListResourcesRequest";
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier for the organization under which the resources exist.</p>
   */
  OrganizationId: string | undefined;
}

export namespace ListResourcesRequest {
  export function isa(o: any): o is ListResourcesRequest {
    return _smithy.isa(o, "ListResourcesRequest");
  }
}

export interface ListResourcesResponse extends $MetadataBearer {
  __type?: "ListResourcesResponse";
  /**
   * <p> The token used to paginate through all the organization's resources. While results
   *          are still available, it has an associated value. When the last page is reached, the token
   *          is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>One page of the organization's resource representation.</p>
   */
  Resources?: Array<Resource>;
}

export namespace ListResourcesResponse {
  export function isa(o: any): o is ListResourcesResponse {
    return _smithy.isa(o, "ListResourcesResponse");
  }
}

export interface ListUsersRequest {
  __type?: "ListUsersRequest";
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier for the organization under which the users exist.</p>
   */
  OrganizationId: string | undefined;
}

export namespace ListUsersRequest {
  export function isa(o: any): o is ListUsersRequest {
    return _smithy.isa(o, "ListUsersRequest");
  }
}

export interface ListUsersResponse extends $MetadataBearer {
  __type?: "ListUsersResponse";
  /**
   * <p> The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The overview of users for an organization.</p>
   */
  Users?: Array<User>;
}

export namespace ListUsersResponse {
  export function isa(o: any): o is ListUsersResponse {
    return _smithy.isa(o, "ListUsersResponse");
  }
}

/**
 * <p>For an email or alias to be created in Amazon WorkMail, the included domain must be
 *          defined in the organization.</p>
 */
export interface MailDomainNotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "MailDomainNotFoundException";
  name: "MailDomainNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace MailDomainNotFoundException {
  export function isa(o: any): o is MailDomainNotFoundException {
    return _smithy.isa(o, "MailDomainNotFoundException");
  }
}

/**
 * <p>After a domain has been added to the organization, it must be verified. The domain is
 *          not yet verified.</p>
 */
export interface MailDomainStateException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "MailDomainStateException";
  name: "MailDomainStateException";
  $fault: "client";
  Message?: string;
}

export namespace MailDomainStateException {
  export function isa(o: any): o is MailDomainStateException {
    return _smithy.isa(o, "MailDomainStateException");
  }
}

/**
 * <p>The representation of a user or group.</p>
 */
export interface Member {
  __type?: "Member";
  /**
   * <p>The date indicating when the member was disabled from Amazon WorkMail
   *          use.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The date indicating when the member was enabled for Amazon WorkMail
   *          use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The identifier of the member.</p>
   */
  Id?: string;

  /**
   * <p>The name of the member.</p>
   */
  Name?: string;

  /**
   * <p>The state of the member, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: EntityState | string;

  /**
   * <p>A member can be a user or group.</p>
   */
  Type?: MemberType | string;
}

export namespace Member {
  export function isa(o: any): o is Member {
    return _smithy.isa(o, "Member");
  }
}

export enum MemberType {
  GROUP = "GROUP",
  USER = "USER"
}

/**
 * <p>The user, group, or resource name isn't unique in Amazon WorkMail.</p>
 */
export interface NameAvailabilityException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "NameAvailabilityException";
  name: "NameAvailabilityException";
  $fault: "client";
  Message?: string;
}

export namespace NameAvailabilityException {
  export function isa(o: any): o is NameAvailabilityException {
    return _smithy.isa(o, "NameAvailabilityException");
  }
}

/**
 * <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 */
export interface OrganizationNotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "OrganizationNotFoundException";
  name: "OrganizationNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace OrganizationNotFoundException {
  export function isa(o: any): o is OrganizationNotFoundException {
    return _smithy.isa(o, "OrganizationNotFoundException");
  }
}

/**
 * <p>The organization must have a valid state (Active or Synchronizing) to perform certain
 *          operations on the organization or its members.</p>
 */
export interface OrganizationStateException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "OrganizationStateException";
  name: "OrganizationStateException";
  $fault: "client";
  Message?: string;
}

export namespace OrganizationStateException {
  export function isa(o: any): o is OrganizationStateException {
    return _smithy.isa(o, "OrganizationStateException");
  }
}

/**
 * <p>The representation of an organization.</p>
 */
export interface OrganizationSummary {
  __type?: "OrganizationSummary";
  /**
   * <p>The alias associated with the organization.</p>
   */
  Alias?: string;

  /**
   * <p>The error message associated with the organization. It is only  present if unexpected
   *          behavior has occurred with regards to the organization. It provides insight or solutions
   *          regarding unexpected behavior.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The identifier associated with the organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The state associated with the organization.</p>
   */
  State?: string;
}

export namespace OrganizationSummary {
  export function isa(o: any): o is OrganizationSummary {
    return _smithy.isa(o, "OrganizationSummary");
  }
}

/**
 * <p>Permission granted to a user, group, or resource to access a certain aspect of
 *          another user, group, or resource mailbox.</p>
 */
export interface Permission {
  __type?: "Permission";
  /**
   * <p>The identifier of the user, group, or resource to which the permissions are
   *          granted.</p>
   */
  GranteeId: string | undefined;

  /**
   * <p>The type of user, group, or resource referred to in GranteeId.</p>
   */
  GranteeType: MemberType | string | undefined;

  /**
   * <p>The permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox.</p>
   */
  PermissionValues: Array<PermissionType | string> | undefined;
}

export namespace Permission {
  export function isa(o: any): o is Permission {
    return _smithy.isa(o, "Permission");
  }
}

export enum PermissionType {
  FULL_ACCESS = "FULL_ACCESS",
  SEND_AS = "SEND_AS",
  SEND_ON_BEHALF = "SEND_ON_BEHALF"
}

export interface PutMailboxPermissionsRequest {
  __type?: "PutMailboxPermissionsRequest";
  /**
   * <p>The identifier of the user, group, or resource for which to update mailbox
   *          permissions.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The identifier of the user, group, or resource to which to grant the
   *          permissions.</p>
   */
  GranteeId: string | undefined;

  /**
   * <p>The identifier of the organization under which the user, group, or resource
   *          exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox.</p>
   */
  PermissionValues: Array<PermissionType | string> | undefined;
}

export namespace PutMailboxPermissionsRequest {
  export function isa(o: any): o is PutMailboxPermissionsRequest {
    return _smithy.isa(o, "PutMailboxPermissionsRequest");
  }
}

export interface PutMailboxPermissionsResponse extends $MetadataBearer {
  __type?: "PutMailboxPermissionsResponse";
}

export namespace PutMailboxPermissionsResponse {
  export function isa(o: any): o is PutMailboxPermissionsResponse {
    return _smithy.isa(o, "PutMailboxPermissionsResponse");
  }
}

export interface RegisterToWorkMailRequest {
  __type?: "RegisterToWorkMailRequest";
  /**
   * <p>The email for the user, group, or resource to be updated.</p>
   */
  Email: string | undefined;

  /**
   * <p>The identifier for the user, group, or resource to be updated.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The identifier for the organization under which the user, group, or resource
   *          exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace RegisterToWorkMailRequest {
  export function isa(o: any): o is RegisterToWorkMailRequest {
    return _smithy.isa(o, "RegisterToWorkMailRequest");
  }
}

export interface RegisterToWorkMailResponse extends $MetadataBearer {
  __type?: "RegisterToWorkMailResponse";
}

export namespace RegisterToWorkMailResponse {
  export function isa(o: any): o is RegisterToWorkMailResponse {
    return _smithy.isa(o, "RegisterToWorkMailResponse");
  }
}

/**
 * <p>This user, group, or resource name is not allowed in Amazon WorkMail.</p>
 */
export interface ReservedNameException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ReservedNameException";
  name: "ReservedNameException";
  $fault: "client";
  Message?: string;
}

export namespace ReservedNameException {
  export function isa(o: any): o is ReservedNameException {
    return _smithy.isa(o, "ReservedNameException");
  }
}

export interface ResetPasswordRequest {
  __type?: "ResetPasswordRequest";
  /**
   * <p>The identifier of the organization that contains the user for which the password is
   *          reset.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The new password for the user.</p>
   */
  Password: string | undefined;

  /**
   * <p>The identifier of the user for whom the password is reset.</p>
   */
  UserId: string | undefined;
}

export namespace ResetPasswordRequest {
  export function isa(o: any): o is ResetPasswordRequest {
    return _smithy.isa(o, "ResetPasswordRequest");
  }
}

export interface ResetPasswordResponse extends $MetadataBearer {
  __type?: "ResetPasswordResponse";
}

export namespace ResetPasswordResponse {
  export function isa(o: any): o is ResetPasswordResponse {
    return _smithy.isa(o, "ResetPasswordResponse");
  }
}

/**
 * <p>The representation of a resource.</p>
 */
export interface Resource {
  __type?: "Resource";
  /**
   * <p>The date indicating when the resource was disabled from Amazon WorkMail
   *          use.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The email of the resource.</p>
   */
  Email?: string;

  /**
   * <p>The date indicating when the resource was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The identifier of the resource.</p>
   */
  Id?: string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The state of the resource, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: EntityState | string;

  /**
   * <p>The type of the resource: equipment or room.</p>
   */
  Type?: ResourceType | string;
}

export namespace Resource {
  export function isa(o: any): o is Resource {
    return _smithy.isa(o, "Resource");
  }
}

export enum ResourceType {
  EQUIPMENT = "EQUIPMENT",
  ROOM = "ROOM"
}

/**
 * <p>You can't perform a write operation against a read-only directory.</p>
 */
export interface UnsupportedOperationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "UnsupportedOperationException";
  name: "UnsupportedOperationException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedOperationException {
  export function isa(o: any): o is UnsupportedOperationException {
    return _smithy.isa(o, "UnsupportedOperationException");
  }
}

export interface UpdateMailboxQuotaRequest {
  __type?: "UpdateMailboxQuotaRequest";
  /**
   * <p>The updated mailbox quota, in MB, for the specified user.</p>
   */
  MailboxQuota: number | undefined;

  /**
   * <p>The identifier for the organization that contains the user for whom to update the mailbox quota.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifer for the user for whom to update the mailbox quota.</p>
   */
  UserId: string | undefined;
}

export namespace UpdateMailboxQuotaRequest {
  export function isa(o: any): o is UpdateMailboxQuotaRequest {
    return _smithy.isa(o, "UpdateMailboxQuotaRequest");
  }
}

export interface UpdateMailboxQuotaResponse extends $MetadataBearer {
  __type?: "UpdateMailboxQuotaResponse";
}

export namespace UpdateMailboxQuotaResponse {
  export function isa(o: any): o is UpdateMailboxQuotaResponse {
    return _smithy.isa(o, "UpdateMailboxQuotaResponse");
  }
}

export interface UpdatePrimaryEmailAddressRequest {
  __type?: "UpdatePrimaryEmailAddressRequest";
  /**
   * <p>The value of the email to be updated as primary.</p>
   */
  Email: string | undefined;

  /**
   * <p>The user, group, or resource to update.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The organization that contains the user, group, or resource to update.</p>
   */
  OrganizationId: string | undefined;
}

export namespace UpdatePrimaryEmailAddressRequest {
  export function isa(o: any): o is UpdatePrimaryEmailAddressRequest {
    return _smithy.isa(o, "UpdatePrimaryEmailAddressRequest");
  }
}

export interface UpdatePrimaryEmailAddressResponse extends $MetadataBearer {
  __type?: "UpdatePrimaryEmailAddressResponse";
}

export namespace UpdatePrimaryEmailAddressResponse {
  export function isa(o: any): o is UpdatePrimaryEmailAddressResponse {
    return _smithy.isa(o, "UpdatePrimaryEmailAddressResponse");
  }
}

export interface UpdateResourceRequest {
  __type?: "UpdateResourceRequest";
  /**
   * <p>The resource's booking options to be updated.</p>
   */
  BookingOptions?: BookingOptions;

  /**
   * <p>The name of the resource to be updated.</p>
   */
  Name?: string;

  /**
   * <p>The identifier associated with the organization for which the resource is
   *          updated.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the resource to be updated.</p>
   */
  ResourceId: string | undefined;
}

export namespace UpdateResourceRequest {
  export function isa(o: any): o is UpdateResourceRequest {
    return _smithy.isa(o, "UpdateResourceRequest");
  }
}

export interface UpdateResourceResponse extends $MetadataBearer {
  __type?: "UpdateResourceResponse";
}

export namespace UpdateResourceResponse {
  export function isa(o: any): o is UpdateResourceResponse {
    return _smithy.isa(o, "UpdateResourceResponse");
  }
}

/**
 * <p>The representation of an Amazon WorkMail user.</p>
 */
export interface User {
  __type?: "User";
  /**
   * <p>The date indicating when the user was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The display name of the user.</p>
   */
  DisplayName?: string;

  /**
   * <p>The email of the user.</p>
   */
  Email?: string;

  /**
   * <p>The date indicating when the user was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The identifier of the user.</p>
   */
  Id?: string;

  /**
   * <p>The name of the user.</p>
   */
  Name?: string;

  /**
   * <p>The state of the user, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: EntityState | string;

  /**
   * <p>The role of the user.</p>
   */
  UserRole?: UserRole | string;
}

export namespace User {
  export function isa(o: any): o is User {
    return _smithy.isa(o, "User");
  }
}

export enum UserRole {
  RESOURCE = "RESOURCE",
  SYSTEM_USER = "SYSTEM_USER",
  USER = "USER"
}
