import { MealPreparation, MealSize, MealType } from "../../../lib/@types";
import AEntity from "../AEntity";

export interface MealProps {
  date?: string;
  userName?: string;
  type?: MealType;
  preparation?: MealPreparation;
  size?: MealSize;
  refNo?: number;
}

export default class Meal implements AEntity {
  readonly props: MealProps;

  constructor(props: MealProps) {
    this.props = props;
  }

  isValid(): void {
    throw new Error("Method not implemented.");
  }
}
