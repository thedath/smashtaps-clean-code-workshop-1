import IEntity from "../entity/Entity";

export default abstract class Repository {
  abstract create(entity: IEntity): IEntity | Promise<IEntity>;
  abstract update(
    oldEntity: IEntity,
    newEntity: IEntity
  ): IEntity | Promise<IEntity>;
  abstract delete(entity: IEntity): IEntity | Promise<IEntity>;
  abstract get(
    entity: IEntity
  ): IEntity | Promise<IEntity> | IEntity[] | Promise<IEntity[]>;
}
