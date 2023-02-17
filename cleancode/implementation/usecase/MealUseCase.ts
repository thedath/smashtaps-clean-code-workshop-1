import AUseCase from "../../definition/usecase/AUseCase";
import Meal from "../entity/Meal";

export default class MealUseCase extends AUseCase {
  constructor() {
    super();
  }

  public createUserMeal(meal: Meal) {}
}
