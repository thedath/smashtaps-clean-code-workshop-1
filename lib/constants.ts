const prefix = "TheOud-";

export default {
  TABLE_NAME: `${prefix}MealTable`,
  TABLE_PK_PART_KEY_NAME: "date",
  TABLE_PK_SORT_KEY_NAME: "sortKey",

  LAMBDA_NAME_MEAL_CREATE: `${prefix}CreateMealLambda`,
  LAMBDA_NAME_MEAL_GET_ALL: `${prefix}GetAllMealsLambda`,

  API_NAME: `${prefix}MealRestAPI`,
  API_ROOT_NAME: "meal",
};
