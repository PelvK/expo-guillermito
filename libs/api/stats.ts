import { BASE_URL } from "@/constants";
import { Stats } from "../types";

export async function getStats(): Promise<Stats | null> {
  const API = `${BASE_URL}/apis/get_stats.php`;
  const rawData = await fetch(API);
  const json = await rawData.json();

  const { teamCount, categCount, placesCount, days } = json;

  return {
    teamCount,
    categCount,
    placesCount,
    days,
  };
}
