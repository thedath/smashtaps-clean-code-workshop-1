export interface IDependency {
  readonly TAG: string;
}

export enum ResponseType {
  ERROR = "error",
  SUCCESS = "success",
}

export enum ErrorCode {
  E1 = "E0001",
  E2 = "E0002",
  E3 = "E0003",
}

export interface IResponse {
  type: ResponseType;
  code?: ErrorCode;
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
