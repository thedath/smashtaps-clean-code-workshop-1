import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { DynamoDB, QueryCommand } from "@aws-sdk/client-dynamodb";

import { MealPreparation, MealSize, MealType } from "../../../@types";
import respond from "../../../utils/respond";
import isValidDate from "../../../utils/isValidDate";
import moment = require("moment");

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

    if (!event.queryStringParameters) {
      return respond(403, "error", "Invalid request");
    }

    let { date } = event.queryStringParameters;

    if (!moment(date).isValid()) {
      return respond(403, "error", "Invalid date", { date });
    }

    const dynamodb = new DynamoDB({});
    const response = await dynamodb.send(
      new QueryCommand({
        TableName: tableName,
        KeyConditionExpression: "#PK = :PKV",
        ExpressionAttributeNames: {
          "#PK": "date",
        },
        ExpressionAttributeValues: {
          ":PKV": {
            S: date!,
          },
        },
      })
    );

    return respond(200, "success", `Meals for ${date}`, {
      date,
      meals: response.Items,
    });
  } catch (error) {
    return respond(
      404,
      "error",
      "Meals fetching failed",
      (error as Error).message
    );
  }
};
