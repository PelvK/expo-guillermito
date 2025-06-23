import { getMatchsByCategory } from "@/libs/api";
import { Match } from "@/libs/types";
import { useEffect, useState } from "react";

export function useMatchsByCategory(categoryID: number) {
  const [matchs, setMatchs] = useState<Match[] | null>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getMatchs = () => {
    setLoading(true);
    return getMatchsByCategory(categoryID)
      .then((matchs) => {
        setMatchs(matchs);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
        setError(true);
      });
  };
  useEffect(() => {
    getMatchs();
  }, [categoryID]);

  const refreshMatchs = () => {
    getMatchs();
  };
  return { matchs, loadingMatchs: loading, errorMatchs: error, refreshMatchs };
}
