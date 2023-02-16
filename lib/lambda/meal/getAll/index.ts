import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Context: ${JSON.stringify(context, null, 2)}`);

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello World!" }),
    };
  } catch (error) {
    return {
      statusCode: 403,
      body: JSON.stringify({ error: (error as Error).message }),
    };
  }
};
