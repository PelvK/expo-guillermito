import { TEAM_LIST, BASE_URL, IS_MOCKED } from "@/constants";
import { Team } from "@mytypes";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getTeamsByCategory(
  category: number
): Promise<Team[] | null> {
  if (IS_MOCKED) {
    await delay(1000);
    const TEAM_FILTER_LIST = TEAM_LIST.filter(
      (item: Team) => item.category.id == category
    );
    return TEAM_FILTER_LIST.map((item: Team) => {
      const { id, shield, name, category, zone } = item;
      const shieldURL =
        shield != null
          ? `${BASE_URL}/img/shields/${shield}`
          : `${BASE_URL}/img/shields/default_shield.png`;

      return {
        id: id,
        zone: zone,
        name: name,
        category: category,
        shield: shieldURL,
      };
    });
  }

  const API = `${BASE_URL}/apis/get_teams_by_category.php?categoryID=${category}`;
  const rawData = await fetch(API);
  const json = await rawData.json();
  console.log(json)
  return json.map((item: Team) => {
    const { id, shield, name, category, zone } = item;
    const shieldURL =
      shield != null
        ? `${BASE_URL}/img/shields/${shield}`
        : `${BASE_URL}/img/shields/default_shield.png`;

    return {
      id: id,
      zone: zone,
      name: name,
      category: category,
      shield: shieldURL,
    };
  });
}

export async function getTeamById(teamID: string): Promise<Team> {
  if (IS_MOCKED) {
    await delay(1000);
    const TEAM_FILTER: Team = TEAM_LIST.filter(
      (item: Team) => item.id.toString() == teamID
    ).at(0)!;

    const shieldURL =
      TEAM_FILTER.shield != null
        ? `${BASE_URL}/img/shields/${TEAM_FILTER.shield}`
        : `${BASE_URL}/img/shields/default_shield.png`;

    return {
      id: TEAM_FILTER.id,
      zone: TEAM_FILTER.zone,
      name: TEAM_FILTER.name,
      category: TEAM_FILTER.category,
      shield: shieldURL,
    };
  }

  const API = `${BASE_URL}/apis/get_team_by_team_id.php?teamID=${teamID}`;
  const rawData = await fetch(API);
  const json = await rawData.json();

  const { id, shield, name, category, zone } = json[0];

  const shieldURL =
    shield != null
      ? `${BASE_URL}/img/shields/${shield}`
      : `${BASE_URL}/img/shields/default_shield.png`;

  return {
    id: id,
    zone: zone,
    name: name,
    category: category,
    shield: shieldURL,
  };
}
