import { useEffect, useState } from "react";
import { decodePreloadCategory } from "../decoders";
import { WPCategoryPreload } from "../types/WPCategory";

interface usePreloadCategoryReturn {
  isLoading: boolean;
  category: WPCategoryPreload | null;
}

export function usePreloadCategory(
  categoryName: string
): usePreloadCategoryReturn {
  const [category, setCategory] = useState<WPCategoryPreload | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`/.netlify/functions/category?categoryName=${categoryName}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setCategory(decodePreloadCategory(data));
      });
  }, [categoryName]);

  return {
    isLoading,
    category,
  };
}
