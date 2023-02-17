import IEntity from "../entity/IEntity";

export default interface IRepository {
  create(entity: IEntity): IEntity;
  update(oldEntity: IEntity, newEntity: IEntity): IEntity;
  delete(entity: IEntity): IEntity;
  get(entity: IEntity): IEntity | IEntity[];
}
