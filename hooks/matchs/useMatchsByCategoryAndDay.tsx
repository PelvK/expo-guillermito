import { getMatchsByCategoryAndDay } from "@/libs/api";
import { Match } from "@/libs/types";
import { useEffect, useState } from "react";

export function useMatchsByCategoryAndDay(categoryID: number, day: string) {
  const [matchs, setMatchs] = useState<Match[] | null>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getMatchs = () => {
    setLoading(true);
    return getMatchsByCategoryAndDay(categoryID, day)
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
  }, [categoryID, day]);

  const refreshMatchs = () => {
    getMatchs();
  };
  return { matchs, loading, error, refreshMatchs };
}
