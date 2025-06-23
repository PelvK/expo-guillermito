import { getMatchsByCategoryAndDay, getMatchsByTeamId, getPositionsByCategory, getPositionsByTeamId } from "@/libs/api";
import { Match, PositionUnionZone, Zone } from "@/libs/types";
import { Position } from "@/libs/types/Position";
import { useEffect, useState } from "react";

export function usePositionsByCategory(category: number) {
  const [positions, setPositions] = useState<PositionUnionZone[] | null>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getPositions = () => {
    setLoading(true);
    return getPositionsByCategory(category)
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
  }, [category]);

  const refreshPositions = () => {
    getPositions();
  };
  return { positions, loadingPositions: loading, errorPositions: error, refreshPositions };
}
