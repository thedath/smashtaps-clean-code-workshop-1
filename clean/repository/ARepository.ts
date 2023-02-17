import IEntity from "../entity/IEntity";
import IRepository from "./IRepository";

export default abstract class ARepository implements IRepository {
  constructor() {}
  abstract create(entity: IEntity): IEntity;
  abstract update(oldEntity: IEntity, newEntity: IEntity): IEntity;
  abstract delete(entity: IEntity): IEntity;
  abstract get(entity: IEntity): IEntity | IEntity[];
}
