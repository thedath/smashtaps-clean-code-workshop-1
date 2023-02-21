import { MealPreparation, MealSize, MealType } from "../../@types";
import DateUtil from "../../definition/util/DateUtil";
import Validator, {
  ValidatorResponse,
} from "../../definition/validator/Validator";
import Meal from "../entity/Meal";

export default class MealValidator extends Validator {
  private readonly meal: Meal;
  private readonly dateUtil: DateUtil;

  constructor(meal: Meal, dateUtil: DateUtil) {
    super();
    this.meal = meal;
    this.dateUtil = dateUtil;
  }

  private isValidMealDate() {
    return this.dateUtil.isYYYY_MM_DD(this.meal.date!);
  }

  private isValidMealPreparation() {
    return Object.values(MealPreparation).includes(this.meal.preparation!);
  }

  private isValidMealSize() {
    return Object.values(MealSize).includes(this.meal.size!);
  }

  private isValidMealType() {
    return Object.values(MealType).includes(this.meal.type!);
  }

  private isValidRefNo() {
    return !!this.meal.refNo;
  }

  private isValidUserName() {
    return !!this.meal.userName;
  }

  validate(...keys: (keyof Meal)[]): ValidatorResponse {
    const response: ValidatorResponse = [];
    keys.forEach((key) => {
      if (key === "date" && !this.isValidMealDate()) {
        response.push({
          property: key,
          reason: "Invalid date; Date you should be in YYYY-MM-DD format",
          data: { [key]: this.meal[key] },
        });
      }

      if (key === "preparation" && !this.isValidMealPreparation()) {
        response.push({
          property: key,
          reason: `Invalid meal preparation; Available preparations: ${Object.values(
            MealPreparation
          ).join(", ")}`,
          data: { [key]: this.meal[key] },
        });
      }

      if (key === "size" && !this.isValidMealSize()) {
        response.push({
          property: key,
          reason: `Invalid meal size; Available sizes: ${Object.values(
            MealSize
          ).join(", ")}`,
          data: { [key]: this.meal[key] },
        });
      }

      if (key === "type" && !this.isValidMealType()) {
        response.push({
          property: key,
          reason: `Invalid meal type; Available types: ${Object.values(
            MealType
          ).join(", ")}`,
          data: { [key]: this.meal[key] },
        });
      }

      if (key === "refNo" && !this.isValidRefNo()) {
        response.push({
          property: key,
          reason: "Invalid reference number",
          data: { [key]: this.meal[key] },
        });
      }

      if (key === "userName" && !this.isValidUserName()) {
        response.push({
          property: key,
          reason: "Invalid user name",
          data: { [key]: this.meal[key] },
        });
      }
    });

    return response;
  }
}
