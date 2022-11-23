import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { usePreloadCategory } from "../../../../data/wordpress/loaders/usePreloadCategory";

export const Detail = () => {
  const { postslug } = useParams();
  const { isLoading, category } = usePreloadCategory("aanbod");

  if (isLoading) {
    return <Spinner />;
  }

  const post = JSON.stringify(category?.posts.find((post) => post.slug === postslug));

  return (
    <p>
    </p>
  );
};

interface DetailPostLoaderProps {
    postId: string;
}

const DetailPostLoader = ({postId}: DetailPostLoaderProps) => {

}
