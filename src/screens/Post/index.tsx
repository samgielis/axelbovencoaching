import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useLoadPost } from "../../data/wordpress/loaders/useLoadPost";
import { PostLoadingPlaceholder } from "./PostLoadingPlaceholder";
import "./post.css";

interface PostProps {
  postId: string;
  category: {
    name: string;
    path: string;
  };
}

export const Post = ({ postId, category }: PostProps) => {
  const { isLoading, post } = useLoadPost(postId);

  if (isLoading) {
    return <PostLoadingPlaceholder />;
  }

  if (!post) {
    return <p>Could not find post</p>;
  }

  return (
    <Stack spacing={10}>
      <Breadcrumb
        colorScheme={"themeGreen"}
        fontSize="lg"
        spacing="8px"
        separator={<ChevronRightIcon color="green.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href={category.path}>{category.name}</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{post.title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading as="h1" size="3xl">
        {post.title}
      </Heading>
      <div
        className="wp-post"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Stack>
  );
};
