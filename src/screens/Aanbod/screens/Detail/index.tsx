import { Container, Heading, Spinner, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useLoadPost } from "../../../../data/wordpress/loaders/useLoadPost";
import { usePreloadCategory } from "../../../../data/wordpress/loaders/usePreloadCategory";
import "./post.css";

export const Detail = () => {
  const { postslug } = useParams();
  const { isLoading, category } = usePreloadCategory("aanbod");

  if (isLoading) {
    return <Spinner />;
  }

  const post = category?.posts.find((post) => post.slug === postslug);

  if (!post) {
    return <p>Could not find post</p>;
  }
  return <DetailPostLoader postId={post.ID} />;
};

interface DetailPostLoaderProps {
  postId: string;
}

const DetailPostLoader = ({ postId }: DetailPostLoaderProps) => {
  const { isLoading, post } = useLoadPost(postId);

  if (isLoading) {
    return <Spinner />;
  }

  if (!post) {
    return <p>Could not find post</p>;
  }

  return (
    <Container
      maxWidth={"container.md"}
      my={40}
      __css={{ p: "margin-bottom: 10px" }}
    >
      <Stack spacing={10}>
        <Heading as="h1" size="3xl">
          {post.title}
        </Heading>
        <div
          className="wp-post"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Stack>
    </Container>
  );
};
