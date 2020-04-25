

export const getAll = (sortDirection: "DESC"): Aire[] => {
  return aireFeed
    .filter(entity => entity.id)
}