import { useEffect, useState } from "react";
import { WPConfig } from "../config";
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
    fetch(
      `${WPConfig.apiEndpoint}/posts?category=${categoryName}&fields=slug,ID,excerpt,title,featured_image,tags`
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setCategory(data);
      });
  }, [categoryName]);

  return {
    isLoading,
    category,
  };
}
