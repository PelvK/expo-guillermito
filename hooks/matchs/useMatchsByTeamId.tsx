import { getMatchsByCategoryAndDay, getMatchsByTeamId } from "@/libs/api";
import { Match } from "@/libs/types";
import { useEffect, useState } from "react";

export function useMatchsByTeamId(teamID: number) {
  const [matchs, setMatchs] = useState<Match[] | null>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getMatchs = () => {
    setLoading(true);
    return getMatchsByTeamId(teamID)
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
  }, [teamID]);

  const refreshMatchs = () => {
    getMatchs();
  };
  return { matchs, loadingMatch: loading, errorMatch: error, refreshMatchs };
}
