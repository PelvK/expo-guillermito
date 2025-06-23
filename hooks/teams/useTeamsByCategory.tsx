import { useEffect, useState } from "react";
import { getTeamsByCategory } from "@myapis";
import { Team } from "@mytypes";

export function useTeamsByCategory(categoryID: number) {
  const [teams, setTeams] = useState<Team[] | null>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const getTeams = () => {
    setLoading(true);
    return getTeamsByCategory(categoryID)
      .then((teams) => {
        setTeams(teams);
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
    getTeams();
  }, [categoryID]);

  const refreshTeams = () => {
    getTeams();
  };
  return { teams, loadingTeams: loading, errorTeams: error, refreshTeams };
}
