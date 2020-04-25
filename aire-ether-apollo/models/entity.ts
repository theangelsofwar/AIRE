// import { entities, Entity } from '../data/entities'

export const getById = (entityId: number): Entity | void => {
  return entities.find(entity => entity.id === entityId);
};

