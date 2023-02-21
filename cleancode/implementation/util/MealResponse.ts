import { ErrorCode, IResponse, ResponseType } from "../../@types";

export default class MealResponse implements IResponse {
  type: ResponseType;
  code?: ErrorCode | undefined;
  message?: string | undefined;
  data?: any;

  mealCreateValidationError(data: any): IResponse {
    return {
      type: ResponseType.ERROR,
      code: ErrorCode.E1,
      message: "Invalid meal create request",
      data,
    };
  }

  mealCreateSuccess(): IResponse {
    return {
      type: ResponseType.SUCCESS,
      message: "Meal successfully created",
    };
  }

  mealCreateGlobalError(message: string): IResponse {
    return {
      type: ResponseType.ERROR,
      code: ErrorCode.E2,
      message,
    };
  }
}
