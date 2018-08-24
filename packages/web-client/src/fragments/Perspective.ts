import gql from "graphql-tag";

import Player, { PlayerData } from "./Player";

export interface PerspectiveData {
  id: string;
  map: {
    __typename: "Map";
    areas: Array<{
      exits: Array<{
        __typename: "MapExit";
        destination: {
          __typename: "MapArea";
          id: string;
        }
        id: string;
        name: string;
      }>
      id: string
      name: string
      x: number
      y: number
      z: number,
    }>
  };
  player: PlayerData | null;
}

export default gql`
  ${Player}
  fragment Perspective on Campaign {
    id
    map {
      areas {
        exits {
          destination {
            id
          }
          id
          name
        }
        id
        name
        x
        y
        z
      }
    }
    player {
      ...Player
    }
  }
`;
