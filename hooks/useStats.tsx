import { useEffect, useState } from "react";
import { Stats } from "@mytypes";
import { getStats } from "@/libs/api"

export function useStats() {
  const [stats, setStats] = useState<Stats | null>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const getStatsHook = () => {
    setLoading(true);
    return getStats()
        .then((stats) => {
          setStats(stats)
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setError(true);
        });
  };
  
  useEffect(() => {
    getStatsHook();
  }, [stats]);

  const refreshStats = () => {
    getStatsHook();
  };
  return { stats, errorStats: error, loadingStats: loading, refreshStats };
}
