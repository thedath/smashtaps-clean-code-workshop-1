export interface IDependency {
  readonly TAG: string;
}

export interface IResponse<T extends "error" | "success"> {
  type: T;
  code: T extends "error" ? 403 | 404 | 505 : 200;
  message?: string;
  data?: any;
}

export enum MealType {
  BREAKFAST = "breakfast",
  LUNCH = "lunch",
  DINNER = "dinner",
}

export enum MealPreparation {
  VEGAN = "vegan",
  MEAT = "meat",
}

export enum MealSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}
