import Entity from "../entity/Entity";

export default abstract class Repository {
  abstract create(entity: Entity): Entity | Promise<Entity>;

  abstract update(
    oldEntity: Entity,
    newEntity: Entity
  ): Entity | Promise<Entity>;

  abstract delete(entity: Entity): Entity | Promise<Entity>;

  abstract get(
    entity: Entity
  ): Entity | Promise<Entity> | Entity[] | Promise<Entity[]>;
}
