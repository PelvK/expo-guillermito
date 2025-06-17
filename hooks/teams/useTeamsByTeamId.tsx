import { useEffect, useState } from "react";
import { Team } from "@mytypes";
import { getTeamById } from "@/libs/api"

export function useTeamsByTeamId(teamID: string) {
  const [team, setTeam] = useState<Team>();

  const getTeamsByID = () => {
    if (teamID) {
      return getTeamById(teamID)
        .then((team) => setTeam(team))
        .catch((err) => {
          console.log(err);
        });
    }
  };
  
  useEffect(() => {
    getTeamsByID();
  }, [teamID]);

  const refreshTeam = () => {
    getTeamsByID();
  };
  return { team, refreshTeam };
}
