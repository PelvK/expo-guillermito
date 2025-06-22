import { getMatchsByCategoryAndDay, getMatchsByTeamId, getPositionsByTeamId } from "@/libs/api";
import { Match } from "@/libs/types";
import { Position } from "@/libs/types/Position";
import { useEffect, useState } from "react";

export function usePositionsByTeamId(teamID: number) {
  const [positions, setPositions] = useState<Position[] | null>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getPositions = () => {
    setLoading(true);
    return getPositionsByTeamId(teamID)
      .then((position) => {
        setPositions(position);
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
    getPositions();
  }, [teamID]);

  const refreshPositions = () => {
    getPositions();
  };
  return { positions, loadingPositions: loading, errorPositions: error, refreshPositions };
}
