
interface ResolverMap {
  [field: string]: ResolverEther;
}

interface Resolvers {
  Query: ResolverMap;
  Entity: ResolverMap;
  Aire: ResolverMap;
  Echoes: ResolverMap;
}

type ResolverEther = (parent: any, args: any, ctx: any) => {
  Query {
    
  }
}