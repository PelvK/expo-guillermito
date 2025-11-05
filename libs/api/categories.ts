import { BASE_URL, CATEGORIES_LIST, IS_MOCKED } from "@/constants";
import { Category } from "@/libs/types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getCategoriesAndZones(): Promise<Category[] | null> {
  if (IS_MOCKED) {
    await delay(1000);
    return CATEGORIES_LIST;
  }

  const API = `${BASE_URL}/apis/mobile/get_categories_and_zones.php`;
  const rawData = await fetch(API);
  if (!rawData.ok) {
      throw new Error("Error al obtener categorías");
    }
    
    const json = await rawData.json();
  return json.map((item: any) => {
    return {
      id: item.id,
      description: item.description,
      limitCup: item.limitCup,
      zones: item.zones || [],
    };
  });
}
