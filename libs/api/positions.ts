import {
  BASE_URL,
  IS_MOCKED,
  POSITIONS_LIST,
  POSITIONS_UNION_ZONE_LIST,
} from "@/constants";
import { Position } from "../types/Position";
import { PositionUnionZone } from "../types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getPositionsByTeamId(
  teamID: number
): Promise<Position[] | null> {
  if (IS_MOCKED) {
    await delay(1000);

    return POSITIONS_LIST.map((item: Position) => {
      const { ID, position, team, goals, matchs, points } = item;

      const shieldURL =
        team.shield != null
          ? `${BASE_URL}/data/img/shields/${team.shield}`
          : `${BASE_URL}/data/img/shields/default_shield.png`;

      return {
        ID,
        position,
        team: { ...team, shield: shieldURL },
        goals,
        matchs,
        points,
      };
    });
  }

  const API = `${BASE_URL}/apis/mobile/get_position_by_team_id.php?teamID=${teamID}`;
  const rawData = await fetch(API);
  const json = await rawData.json();

  return json.map((item: Position) => {
    const { ID, position, team, goals, matchs, points } = item;

    const shieldURL =
      team.shield != null
        ? `${BASE_URL}/data/img/shields/${team.shield}`
        : `${BASE_URL}/data/img/shields/default_shield.png`;

    return {
      ID,
      position,
      team: { ...team, shield: shieldURL },
      goals,
      matchs,
      points,
    };
  });
}

export async function getPositionsByCategory(
  category: number
): Promise<PositionUnionZone[] | null> {
  if (IS_MOCKED) {
    await delay(1000);

    return POSITIONS_UNION_ZONE_LIST.map((item: PositionUnionZone) => {
      const { zone, positions } = item;

      const positionsRetrurn = item.positions.map((item: Position) => {
        const { ID, position, team, goals, matchs, points } = item;

        const shieldURL =
          team.shield != null
            ? `${BASE_URL}/data/img/shields/${team.shield}`
            : `${BASE_URL}/data/img/shields/default_shield.png`;

        return {
          ID,
          position,
          team: { ...team, shield: shieldURL },
          goals,
          matchs,
          points,
        };
      });
      return {
        zone,
        positions: positionsRetrurn,
      };
    });
  }

  const API = `${BASE_URL}/apis/mobile/get_position_by_category.php?category=${category}`;
  const rawData = await fetch(API);
  const json = await rawData.json();

  return json.map((item: PositionUnionZone) => {
    const { zone, positions } = item;

    const positionsReturn = positions.map((item: Position) => {
      const { ID, position, team, goals, matchs, points } = item;

      const shieldURL =
        team.shield != null
          ? `${BASE_URL}/data/img/shields/${team.shield}`
          : `${BASE_URL}/data/img/shields/default_shield.png`;

      return {
        ID,
        position,
        team: { ...team, shield: shieldURL },
        goals,
        matchs,
        points,
      };
    });
    return {
      zone,
      positions: positionsReturn,
    };
  });
}

export async function getPositionsGeneralByCategory(
  category: number
): Promise<Position[] | null> {
  if (IS_MOCKED) {
    await delay(1000);

    return POSITIONS_LIST.map((item: Position) => {
      const { ID, position, team, goals, matchs, points } = item;

      const shieldURL =
        team.shield != null
          ? `${BASE_URL}/data/img/shields/${team.shield}`
          : `${BASE_URL}/data/img/shields/default_shield.png`;

      return {
        ID,
        position,
        team: { ...team, shield: shieldURL },
        goals,
        matchs,
        points,
      };
    });
  }

  const API = `${BASE_URL}/apis/mobile/get_position_general_by_category.php?category=${category}`;
  const rawData = await fetch(API);
  const json = await rawData.json();

  return json.map((item: Position) => {
    const { ID, position, team, goals, matchs, points } = item;

    const shieldURL =
      team.shield != null
        ? `${BASE_URL}/data/img/shields/${team.shield}`
        : `${BASE_URL}/data/img/shields/default_shield.png`;

    return {
      ID,
      position,
      team: { ...team, shield: shieldURL },
      goals,
      matchs,
      points,
    };
  });
}

