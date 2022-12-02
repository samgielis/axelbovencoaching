import { Container } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { usePreloadCategory } from "../../../../data/wordpress/loaders/usePreloadCategory";
import { BLOG_PATH } from "../../../../routes";
import { Post } from "../../../Post";
import { PostLoadingPlaceholder } from "../../../Post/PostLoadingPlaceholder";

export const BlogPost = () => {
  return (
    <Container maxWidth={"container.md"} my={40}>
      <BlogPostPreloader />
    </Container>
  );
};

const BlogPostPreloader = () => {
  const { postslug } = useParams();
  const { isLoading, category } = usePreloadCategory("blog");

  if (isLoading) {
    return <PostLoadingPlaceholder />;
  }

  const post = category?.posts.find((post) => post.slug === postslug);

  if (!post) {
    return <p>Could not find post</p>;
  }
  return <Post postId={post.ID} category={{ name: "Blog", path: BLOG_PATH }} />;
};
