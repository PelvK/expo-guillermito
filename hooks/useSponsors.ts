import { BASE_URL } from "@/constants";
import { useEffect, useState } from "react";

type Sponsor = {
  id: string;
  image: string;
  link?: string;
};

export function useSponsors() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API = `${BASE_URL}/apis/mobile/get_sponsors.php`;
  
  useEffect(() => {
    setLoading(true);
    fetch(API)
      .then((r) => r.json())
      .then((json) => {
        setSponsors(json);
        setError(null);
      })
      .catch(() => setError("No se pudo cargar sponsors"))
      .finally(() => setLoading(false));
  }, []);

  return { sponsors, loading, error };
}
