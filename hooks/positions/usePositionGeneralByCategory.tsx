import { getPositionsByCategory, getPositionsGeneralByCategory } from "@/libs/api";
import { Position } from "@/libs/types";
import { useEffect, useState } from "react";

export function usePositionsGeneralByCategory(category: number) {
  const [positions, setPositions] = useState<Position[] | null>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getPositions = () => {
    setLoading(true);
    return getPositionsGeneralByCategory(category)
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
