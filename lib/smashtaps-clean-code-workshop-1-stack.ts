import {
  Stack,
  StackProps,
  aws_dynamodb as dynamodb,
  aws_lambda as lambda,
  aws_apigateway as apiGateway,
} from "aws-cdk-lib";
import { Construct } from "constructs";
import constants from "./constants";

export class SmashtapsCleanCodeWorkshop1Stack extends Stack {
  private readonly table: dynamodb.Table;
  private readonly api: apiGateway.RestApi;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // create dynamodb table
    this.table = new dynamodb.Table(this, constants.TABLE_NAME, {
      tableName: constants.TABLE_NAME,
      partitionKey: {
        name: constants.TABLE_PK_PART_KEY_NAME,
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: constants.TABLE_PK_SORT_KEY_NAME,
        type: dynamodb.AttributeType.STRING,
      },
    });

    // create API Gateway
    this.api = new apiGateway.RestApi(this, constants.API_NAME, {
      restApiName: constants.API_NAME,
    });

    // set the initial root of the API
    this.api.root.addResource(constants.API_ROOT_NAME);
  }

  public initCreateMeal() {
    // create meal inserting Lambda
    const mealCreateLambda = new lambda.Function(
      this,
      constants.LAMBDA_NAME_MEAL_CREATE,
      {
        functionName: constants.LAMBDA_NAME_MEAL_CREATE,
        code: lambda.Code.fromAsset("lib/lambda/meal/create"),
        handler: "index.handler",
        runtime: lambda.Runtime.NODEJS_16_X,
        environment: {
          TABLE_NAME: constants.TABLE_NAME,
        },
      }
    );

    // grant the Lambda the necessary access over the table
    this.table.grantWriteData(mealCreateLambda);

    // attaching the Lambda to the API
    this.api.root
      .getResource(constants.API_ROOT_NAME)
      ?.addMethod("POST", new apiGateway.LambdaIntegration(mealCreateLambda));

    return this;
  }

  public initGetAllMeals() {
    // create meals fetching Lambda
    const getAllMealsLambda = new lambda.Function(
      this,
      constants.LAMBDA_NAME_MEAL_GET_ALL,
      {
        functionName: constants.LAMBDA_NAME_MEAL_GET_ALL,
        code: lambda.Code.fromAsset("lib/lambda/meal/getAll"),
        handler: "index.handler",
        runtime: lambda.Runtime.NODEJS_16_X,
        environment: {
          TABLE_NAME: constants.TABLE_NAME,
        },
      }
    );

    // grant the Lambda the necessary access over the table
    this.table.grantReadData(getAllMealsLambda);

    // attaching the Lambda to the API
    this.api.root
      .getResource(constants.API_ROOT_NAME)
      ?.addResource("all")
      ?.addMethod("GET", new apiGateway.LambdaIntegration(getAllMealsLambda));

    return this;
  }
}
