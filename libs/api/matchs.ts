import { BASE_URL, IS_MOCKED, MATCHES_LIST } from "@/constants";
import { Match } from "../types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getMatchsByCategoryAndDay(
  category: number,
  day: string
): Promise<Match[] | null> {
  if (IS_MOCKED) {
    const MATCH_FILTER_LIST = MATCHES_LIST.filter(
      (item: Match) => item.category == category && item.date == day
    );

    await delay(1000);

    return MATCH_FILTER_LIST.map((item: Match) => {
      const {
        ID,
        localTeam,
        visitTeam,
        localResult,
        visitResult,
        localPenalty,
        visitPenalty,
        date,
        hour,
        legend,
      } = item;

      const localShieldURL =
        localTeam.shield != null
          ? `${BASE_URL}/img/shields/${localTeam.shield}`
          : `${BASE_URL}/img/shields/default_shield.png`;

      const visitShieldURL =
        visitTeam.shield != null
          ? `${BASE_URL}/img/shields/${visitTeam.shield}`
          : `${BASE_URL}/img/shields/default_shield.png`;

      return {
        ID,
        localTeam: { ...localTeam, shield: localShieldURL },
        visitTeam: { ...visitTeam, shield: visitShieldURL },
        localResult,
        visitResult,
        localPenalty,
        visitPenalty,
        date,
        hour,
        legend,
      };
    });
  }

  const API = `${BASE_URL}/apis/get_matchs_by_category_and_day.php?categoryID=${category}&day=${day}`;
  const rawData = await fetch(API);
  const json = await rawData.json();

  return json.map((item: Match) => {
    const {
      ID,
      localTeam,
      visitTeam,
      localResult,
      visitResult,
      localPenalty,
      visitPenalty,
      date,
      hour,
      legend,
    } = item;

    const localShieldURL =
      localTeam.shield != null
        ? `${BASE_URL}/img/shields/${localTeam.shield}`
        : `${BASE_URL}/img/shields/default_shield.png`;

    const visitShieldURL =
      visitTeam.shield != null
        ? `${BASE_URL}/img/shields/${visitTeam.shield}`
        : `${BASE_URL}/img/shields/default_shield.png`;

    return {
      ID,
      localTeam: { ...localTeam, shield: localShieldURL },
      visitTeam: { ...visitTeam, shield: visitShieldURL },
      localResult,
      visitResult,
      localPenalty,
      visitPenalty,
      date,
      hour,
      legend,
    };
  });
}

export async function getMatchsByTeamId(
  teamID: number
): Promise<Match[] | null> {
  if (IS_MOCKED) {
    const MATCH_FILTER_LIST = MATCHES_LIST.filter(
      (item: Match) =>
        item.localTeam.id == teamID || item.visitTeam.id == teamID
    );

    await delay(1000);

    return MATCH_FILTER_LIST.map((item: Match) => {
      const {
        ID,
        localTeam,
        visitTeam,
        localResult,
        visitResult,
        localPenalty,
        visitPenalty,
        date,
        hour,
        legend,
      } = item;

      const localShieldURL =
        localTeam.shield != null
          ? `${BASE_URL}/img/shields/${localTeam.shield}`
          : `${BASE_URL}/img/shields/default_shield.png`;

      const visitShieldURL =
        visitTeam.shield != null
          ? `${BASE_URL}/img/shields/${visitTeam.shield}`
          : `${BASE_URL}/img/shields/default_shield.png`;

      return {
        ID,
        localTeam: { ...localTeam, shield: localShieldURL },
        visitTeam: { ...visitTeam, shield: visitShieldURL },
        localResult,
        visitResult,
        localPenalty,
        visitPenalty,
        date,
        hour,
        legend,
      };
    });
  }

  const API = `${BASE_URL}/apis/get_matchs_by_team_id.php?teamID=${teamID}`;
  const rawData = await fetch(API);
  const json = await rawData.json();

  return json.map((item: Match) => {
    const {
      ID,
      localTeam,
      visitTeam,
      localResult,
      visitResult,
      localPenalty,
      visitPenalty,
      date,
      hour,
      legend,
    } = item;

    const localShieldURL =
      localTeam.shield != null
        ? `${BASE_URL}/img/shields/${localTeam.shield}`
        : `${BASE_URL}/img/shields/default_shield.png`;

    const visitShieldURL =
      visitTeam.shield != null
        ? `${BASE_URL}/img/shields/${visitTeam.shield}`
        : `${BASE_URL}/img/shields/default_shield.png`;

    return {
      ID,
      localTeam: { ...localTeam, shield: localShieldURL },
      visitTeam: { ...visitTeam, shield: visitShieldURL },
      localResult,
      visitResult,
      localPenalty,
      visitPenalty,
      date,
      hour,
      legend,
    };
  });
}
