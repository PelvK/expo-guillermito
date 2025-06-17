
import { useEffect, useState } from "react";
import { getTeamsByCategory } from "@myapis";
import { Team } from "@mytypes";

export function useTeamsByCategory(categoryID: number) {
  const [teams, setTeams] = useState<Team[] | null>([]);

  const getTeams= () => {
    return getTeamsByCategory(categoryID)
      .then((teams) => {
        setTeams(teams);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTeams();
  }, [categoryID]);

  const refreshTeams = () => {
    getTeams();
  };
  return { teams, refreshTeams };
}