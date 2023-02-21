import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import Repository from "../../definition/repository/Repository";
import Meal from "../entity/Meal";

export type MealDynamoRepositoryProps = {
  dynamoDBTableName: string;
};

export default class DynamoDBMealRepository extends Repository {
  readonly props: MealDynamoRepositoryProps;
  readonly dynamodb: DynamoDBDocumentClient;

  constructor(props: MealDynamoRepositoryProps) {
    super();
    this.props = props;

    const marshallOptions = {
      // Whether to automatically convert empty strings, blobs, and sets to `null`.
      convertEmptyValues: false, // false, by default.
      // Whether to remove undefined values while marshalling.
      removeUndefinedValues: false, // false, by default.
      // Whether to convert typeof object to map attribute.
      convertClassInstanceToMap: false, // false, by default.
    };

    const unmarshallOptions = {
      // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
      wrapNumbers: false, // false, by default.
    };

    this.dynamodb = DynamoDBDocumentClient.from(new DynamoDB({}), {
      marshallOptions,
      unmarshallOptions,
    });
  }

  async create(meal: Meal): Promise<Meal> {
    await this.dynamodb.send(
      new PutCommand({
        TableName: this.props.dynamoDBTableName,
        Item: {
          ...meal.toObject(),
        },
      })
    );
    return meal;
  }

  update(oldMeal: Meal, newMeal: Meal): Meal {
    throw new Error("Method not implemented.");
  }
  delete(meal: Meal): Meal {
    throw new Error("Method not implemented.");
  }
  get(meal: Meal): Meal | Meal[] {
    throw new Error("Method not implemented.");
  }
}
