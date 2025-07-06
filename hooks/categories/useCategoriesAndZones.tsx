import { useEffect, useState } from "react";
import { Category } from "@/libs/types";
import { getCategoriesAndZones } from "@/libs/api";

export function useCategoriesWithZones() {
  const [categories, setCategories] = useState<Category[] | null>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCategories = () => {
    setLoading(true);
    return getCategoriesAndZones()
      .then((data) => {
        setCategories(data);
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
    fetchCategories();
  }, []);

  const refreshCategories = () => {
    fetchCategories();
  };

  return { categories, loading, error, refreshCategories };
}
