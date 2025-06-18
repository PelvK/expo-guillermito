import { useEffect, useState } from "react";
import { Team } from "@mytypes";
import { getTeamById } from "@/libs/api"

export function useTeamsByTeamId(teamID: string) {
  const [team, setTeam] = useState<Team>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const getTeamsByID = () => {
    setLoading(true);
    if (teamID) {
      return getTeamById(teamID)
        .then((team) => {
          setTeam(team)
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setError(true);
        });
    }
  };
  
  useEffect(() => {
    getTeamsByID();
  }, [teamID]);

  const refreshTeam = () => {
    getTeamsByID();
  };
  return { team, errorTeam: error, loadingTeam: loading, refreshTeam };
}
