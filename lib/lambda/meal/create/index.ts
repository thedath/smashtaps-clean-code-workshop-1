import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import Meal from "../../../../cleancode/implementation/entity/Meal";
import DynamoDBMealRepository from "../../../../cleancode/implementation/repository/DynamoDBMealRepository";
import MealUseCase from "../../../../cleancode/implementation/usecase/MealUseCase";
import MomentDateUtil from "../../../../cleancode/implementation/util/MomentDateUtil";

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const tableName = process.env.TABLE_NAME;

  const { userName, type, preparation, size } = JSON.parse(event.body!);

  const dateUtil = new MomentDateUtil();
  const meal = new Meal();
  meal.preparation = preparation;
  meal.userName = userName;
  meal.type = type;
  meal.size = size;
  meal.date = dateUtil.toYYYY_MM_DD();
  meal.refNo = new String(new Date().getTime()).toString();

  const mealRepository = new DynamoDBMealRepository({
    dynamoDBTableName: tableName!,
  });

  const mealUseCase = new MealUseCase(mealRepository, dateUtil);
  const createMealResponse = await mealUseCase.createUserMeal(meal);

  return {
    statusCode: 200,
    body: JSON.stringify(createMealResponse),
  };
};
