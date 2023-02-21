import { IResponse, ResponseType } from "../../@types";
import Repository from "../../definition/repository/Repository";
import DateUtil from "../../definition/util/DateUtil";
import Meal from "../entity/Meal";
import Response from "../util/MealResponse";
import MealValidator from "../validator/MealValidator";

export default class MealUseCase {
  private readonly mealRepository: Repository;
  private readonly dateUtil: DateUtil;

  constructor(mealRepository: Repository, dateUtil: DateUtil) {
    this.mealRepository = mealRepository;
    this.dateUtil = dateUtil;
  }

  async createUserMeal(meal: Meal): Promise<IResponse> {
    const res = new Response();
    try {
      const mealValidator = new MealValidator(meal, this.dateUtil);
      const validationResponse = mealValidator.validate(
        "date",
        "preparation",
        "refNo",
        "size",
        "type",
        "userName"
      );
      if (validationResponse.length > 0) {
        return res.mealCreateValidationError(validationResponse);
      }
      const createdMeal = await this.mealRepository.create(meal);
      return res.mealCreateSuccess();
    } catch (error: any) {
      return res.mealCreateGlobalError((error as Error).message);
    }
  }
}
