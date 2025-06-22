import { Place } from "./Place";
import { Team } from "./Team";

export type Match = {
  ID: number;
  localTeam: Team,
  visitTeam: Team,
  localResult: number;
  visitResult: number;
  localPenalty?: number;
  visitPenalty?: number;
  date: string;
  hour: string;
  legend: string;
  place: Place;
  type: number;
  

  /** @todo sacar este parametro, es solo para filtrar la lista de partidos 
   * falsos, pero luego el parametro es para la condicion del SELECT nomas */
  category?: number;
};
