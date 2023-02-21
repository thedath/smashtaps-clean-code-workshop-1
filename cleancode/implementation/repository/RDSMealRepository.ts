import Entity from "../../definition/entity/Entity";
import Repository from "../../definition/repository/Repository";

export default class DynamoDBMealRepository extends Repository {
  constructor() {
    super();
  }

  create(entity: Entity): Entity | Promise<Entity> {
    throw new Error("Method not implemented.");
  }
  update(oldEntity: Entity, newEntity: Entity): Entity | Promise<Entity> {
    throw new Error("Method not implemented.");
  }
  delete(entity: Entity): Entity | Promise<Entity> {
    throw new Error("Method not implemented.");
  }
  get(entity: Entity): Entity | Promise<Entity> | Entity[] | Promise<Entity[]> {
    throw new Error("Method not implemented.");
  }
}
