import { DynamoDB, PutItemCommand } from "@aws-sdk/client-dynamodb";
import Meal from "../../entity/impl/Meal";
import ARepository from "../ARepository";

export type MealDynamoRepositoryProps = {
  dynamoDBTableName: string;
};

export default class MealDynamoRepository extends ARepository {
  readonly props: MealDynamoRepositoryProps;
  readonly dynamodb: DynamoDB;

  constructor(props: MealDynamoRepositoryProps) {
    super();
    this.props = props;
    this.dynamodb = new DynamoDB({});
  }

  async create(meal: Meal): Meal {
    const date = (moment() as Moment).format("YYYY-MM-DD");
    const refNo = new String(new Date().getTime()).toString();

    const response = await this.dynamodb.send(
      new PutItemCommand({
        TableName: this.props.dynamoDBTableName,
        Item: {
          date: {
            S: meal.props.date!,
          },
          sortKey: {
            S: `${meal.props.userName!.replace(" ", "")}#${
              meal.props.type
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
