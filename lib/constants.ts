const prefix = "The.Oud-";

export default {
  TABLE_NAME: `${prefix}MealTable`,
  TABLE_PK_PART_KEY_NAME: "date",
  TABLE_PK_SORT_KEY_NAME: "sortKey",

  LAMBDA_NAME_MEAL_CREATE: `${prefix}MealCreateLambda`,
  LAMBDA_NAME_MEAL_GET_ALL: `${prefix}MealCreateLambda`,

  API_NAME: `${prefix}MealRestAPI`,
  API_ROOT_NAME: "meal",
};
