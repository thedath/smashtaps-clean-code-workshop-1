import { DynamoDB, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";

import { Moment } from "moment";
const moment = require("moment");

import {
  MealPreparation,
  MealSize,
  MealType,
} from "../../../../cleancode/@types";
import respond from "../../../utils/respond";

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Context: ${JSON.stringify(context, null, 2)}`);

  try {
    const tableName = process.env.TABLE_NAME;

    if (!tableName) {
      return respond(500, "error", "Internal server error");
    }

    if (!event.body) {
      return respond(403, "error", "Invalid request");
    }

    const { userName, type, preparation, size } = JSON.parse(event.body);

    if (!userName) {
      return respond(403, "error", "User name cannot be empty", { userName });
    }

    if (!Object.values(MealType).includes(type)) {
      return respond(403, "error", "Invalid meal type", { type });
    }

    if (!Object.values(MealPreparation).includes(preparation)) {
      return respond(403, "error", "Invalid meal preparation", { preparation });
    }

    if (!Object.values(MealSize).includes(size)) {
      return respond(403, "error", "Invalid meal size", { size });
    }

    const date = (moment() as Moment).format("YYYY-MM-DD");
    const refNo = new String(new Date().getTime()).toString();

    const dynamodb = new DynamoDB({});
    const response = await dynamodb.send(
      new PutItemCommand({
        TableName: tableName,
        Item: {
          date: {
            S: date,
          },
          sortKey: {
            S: `${(userName as String).replace(" ", "")}#${
              type as string
            }#${refNo}`,
          },
          userName: {
            S: userName,
          },
          type: {
            S: type,
          },
          preparation: {
            S: preparation,
          },
          size: {
            S: size,
          },
          refNo: {
            N: refNo,
          },
        },
      })
    );

    return respond(200, "success", "Meal successfully created", {
      date,
      refNo,
    });
  } catch (error) {
    return respond(
      404,
      "error",
      "Meal creation failed",
      (error as Error).message
    );
  }
};
