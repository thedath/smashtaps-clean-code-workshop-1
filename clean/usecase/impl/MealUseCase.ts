import Meal from "../../entity/impl/Meal";
import AUseCase from "../AUseCase";

export default class MealUseCase extends AUseCase {
  constructor() {
    super();
  }

  public createUserMeal(meal: Meal) {}
}
