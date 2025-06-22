import { BASE_URL, IS_MOCKED, POSITIONS_LIST } from "@/constants";
import { Position } from "../types/Position";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


export async function getPositionsByTeamId(
  teamID: number
): Promise<Position[] | null> {
  if (IS_MOCKED) {

    await delay(1000);

    return POSITIONS_LIST.map((item: Position) => {
      const {
        ID,
        position,
        team,
        goals,
        matchs,
        points
      } = item;

      const shieldURL =
        team.shield != null
          ? `${BASE_URL}/img/shields/${team.shield}`
          : `${BASE_URL}/img/shields/default_shield.png`;

      return {
        ID,
        position,
        team: { ...team, shield: shieldURL },
        goals,
        matchs,
        points
      };
    });
  }

  const API = `${BASE_URL}/apis/get_position_by_team_id.php?teamID=${teamID}`;
  const rawData = await fetch(API);
  const json = await rawData.json();

  return json.map((item: Position) => {
    const {
        ID,
        position,
        team,
        goals,
        matchs,
        points
      } = item;

      const shieldURL =
        team.shield != null
          ? `${BASE_URL}/img/shields/${team.shield}`
          : `${BASE_URL}/img/shields/default_shield.png`;

      return {
        ID,
        position,
        team: { ...team, shield: shieldURL },
        goals,
        matchs,
        points
      };
    });
}
