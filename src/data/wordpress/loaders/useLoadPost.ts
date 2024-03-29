import { useEffect, useState } from "react";
import { decodePost } from "../decoders";
import { WPPost } from "../types/WPPost";

interface useLoadPostReturn {
  isLoading: boolean;
  post: WPPost | null;
}

export function useLoadPost(postId: string): useLoadPostReturn {
  const [post, setPost] = useState<WPPost | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`/.netlify/functions/post?postId=${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setPost(decodePost(data));
      });
  }, [postId]);

  return {
    isLoading,
    post,
  };
}
