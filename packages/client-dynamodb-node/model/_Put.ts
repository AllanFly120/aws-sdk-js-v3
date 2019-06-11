import { _PutItemInputAttributeMap } from "./_PutItemInputAttributeMap";
import { _ExpressionAttributeNameMap } from "./_ExpressionAttributeNameMap";
import { _ExpressionAttributeValueMap } from "./_ExpressionAttributeValueMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Put: _Structure_ = {
  type: "structure",
  required: ["Item", "TableName"],
  members: {
    Item: {
      shape: _PutItemInputAttributeMap
    },
    TableName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    ConditionExpression: {
      shape: {
        type: "string"
      }
    },
    ExpressionAttributeNames: {
      shape: _ExpressionAttributeNameMap
    },
    ExpressionAttributeValues: {
      shape: _ExpressionAttributeValueMap
    },
    ReturnValuesOnConditionCheckFailure: {
      shape: {
        type: "string"
      }
    }
  }
};
