import { BASE_URL, MATCHES_LIST, TEAM_LIST } from "@/constants/theme";
import { Team } from "@mytypes";

export async function getTeamsByCategory(
  category: number
): Promise<Team[] | null> {

  /**@todo por el momento se harcodea, luego cambiar cuando exista la api */
  const TEAM_FILTER_LIST = TEAM_LIST.filter((item: Team) => item.category.id == category)
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

  const API = `${BASE_URL}/apis/get_teams_by_category.php?categoryID=${category}`;
  const rawData = await fetch(API);
  const json = await rawData.json();

  return json.map((item: Team) => {
    const { id, shield, name, category, zone } = item;
    const shieldURL =
      shield != null
        ? `${BASE_URL}/img/${shield}`
        : `${BASE_URL}/img/default_shield.png`;

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

     /**@todo por el momento se harcodea, luego cambiar cuando exista la api */
  const TEAM_FILTER: Team[] = TEAM_LIST.filter((item: Team) => item.id.toString() == teamID)

  const shieldURL =
    TEAM_FILTER[0].shield != null
      ? `${BASE_URL}/img/shields/${TEAM_FILTER[0].shield}`
      : `${BASE_URL}/img/shields/default_shield.png`;
      
  return {
      id: TEAM_FILTER[0].id,
      zone: TEAM_FILTER[0].zone,
      name: TEAM_FILTER[0].name,
      category: TEAM_FILTER[0].category,
      shield: shieldURL,
    };


  const API = `${BASE_URL}/apis/get_team_by_team_id.php?teamID=${teamID}`;
  const rawData = await fetch(API);
  const json = await rawData.json();

  const { id, shield, name, category, zone } = json[0];

  return {
    id: id,
    zone: zone,
    name: name,
    category: category,
    shield: shieldURL,
  };
}
