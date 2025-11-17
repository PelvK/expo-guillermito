import { BASE_URL } from "@/constants";
import { useEffect, useState } from "react";

export type AppSettings = {
  showGeneralTable: boolean;
  showSponsors: boolean;
  appDone: boolean;
  showDivisionDescriptions: boolean;
  divisionDescriptions: Record<string, string>;
};

const SETTINGS_URL = `${BASE_URL}/data/settings.json`;

export function useRemoteSettings() {
  const [settings, setSettings] = useState<AppSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(SETTINGS_URL, { cache: "no-store" })
      .then(async (r) => {
        if (!r.ok) throw new Error("HTTP error");
        const json = await r.json();
        setSettings(json);
        setError(null);
      })
      .catch((e) => setError("No se pudo cargar configuración"))
      .finally(() => setLoading(false));
  }, []);

  return { settings, loading, error };
}
