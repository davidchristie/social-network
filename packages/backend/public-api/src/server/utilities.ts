import { Context } from "public-api-context";

export function delegateQueryResolver (query: string, relations: string[]) {
  return relations.reduce((accumulator, relation) => {
    accumulator[relation] = ({ id }, { }, context: Context) => {
      return context.database[query]({ id })[relation]();
    };
    return accumulator;
  }, {});
}
