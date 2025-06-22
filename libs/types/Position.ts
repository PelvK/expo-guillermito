import { Team } from "./Team";

export type Position = {
  ID: number;
  position: number;
  team: Team;
  matchs: {
    played: number;
    won: number;
    drawn: number;
    lost: number;
  }
  goals: {
    favor: number;
    against: number;
    difference: number;
  }
  points: number;
};
