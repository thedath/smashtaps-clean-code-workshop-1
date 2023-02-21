import { IResponse } from "../../@types";
import Repository from "../../definition/repository/Repository";
import DateUtil from "../../definition/util/DateUtil";
import Meal from "../entity/Meal";
import MomentDateUtil from "../util/MomentDateUtil";
import MealValidator from "../validator/MealValidator";

export default class MealUseCase {
  private readonly mealRepository: Repository;
  private readonly dateUtil: DateUtil;

  constructor(mealRepository: Repository, dateUtil: DateUtil) {
    this.mealRepository = mealRepository;
    this.dateUtil = dateUtil;
  }

  async createUserMeal(meal: Meal): IResponse {
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
      }
      const createdMeal = await this.mealRepository.create(meal);
      // success
    } catch (error: any) {
      // error
    }
  }
}
