import IEntity from "./IEntity";

export default abstract class AEntity implements IEntity {
  constructor() {}
  abstract isValid(): void;
}
