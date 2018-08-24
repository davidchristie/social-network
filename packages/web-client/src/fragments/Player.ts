import gql from "graphql-tag";

import Item, { ItemData } from "./Item";

interface Area {
  __typename: "Area";
  description: string;
  exits: Exit[];
  id: string;
  items: ItemData[];
  name: string;
  region: Region;
}

interface Exit {
  __typename: "Exit";
  destination: {
    area: {
      id: string;
      name: string;
    }
    id: string;
  };
  description: string;
  id: string;
  name: string;
  options: Option[];
}

interface Option {
  __typename: "Option";
  name: string;
}

interface Region {
  __typename: "Region";
  id: string;
  name: string;
}

export interface PlayerData {
  __typename: "Character";
  area: Area;
  id: string;
  items: ItemData[];
  name: string;
}

export default gql`
  ${Item}
  fragment Player on Character {
    area {
      description
      exits {
        description
        destination {
          area {
            id
            name
          }
          id
        }
        id
        name
        options {
          name
        }
      }
      items {
        ...Item
      }
      id
      name
      region {
        id
        name
      }
    }
    id
    items {
      ...Item
    }
    name
  }
`;
