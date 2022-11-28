import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useLoadPost } from "../../../../data/wordpress/loaders/useLoadPost";
import { usePreloadCategory } from "../../../../data/wordpress/loaders/usePreloadCategory";
import { AANBOD_PATH } from "../../../../routes";
import "./post.css";
import { PostLoadingPlaceholder } from "./PostLoadingPlaceholder";

export const Detail = () => {
  return (
    <Container maxWidth={"container.md"} my={40}>
      <DetailPreloader />
    </Container>
  );
};

export const DetailPreloader = () => {
  const { postslug } = useParams();
  const { isLoading, category } = usePreloadCategory("aanbod");

  if (isLoading) {
    return <PostLoadingPlaceholder />;
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
          <BreadcrumbLink href={AANBOD_PATH}>Aanbod</BreadcrumbLink>
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
