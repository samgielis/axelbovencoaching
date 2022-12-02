import { Box, Button, Heading, HStack, Image, LinkBox, LinkOverlay, Stack, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { AppLink } from "../../../../components/AppLink";
import { Card } from "../../../../components/Card";
import { HumanDate } from "../../../../components/HumanDate";
import { PageContainer } from "../../../../components/PageContainer";
import { usePreloadCategory } from "../../../../data/wordpress/loaders/usePreloadCategory";
import { WPPostPreload } from "../../../../data/wordpress/types/WPPost";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import { PostLoadingPlaceholder } from "../../../Post/PostLoadingPlaceholder";

export const Overview = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Axel Boven Coaching</title>
      </Helmet>
      <Box bg='themeGreen.50' minH="100vh">
        <PageContainer>
          <ListofBlogPosts />
        </PageContainer>
      </Box>
    </>
  );
};

const ListofBlogPosts = () => {
  const { isLoading, category } = usePreloadCategory("blog");

  if (isLoading) {
    return <PostLoadingPlaceholder />;
  }

  return <Stack spacing={10}>
    <Heading size='3xl'>Axel's blog</Heading>
    {category?.posts.map(post => <BlogPostCard key={post.ID} post={post} />)}
  </Stack>
}

const BlogPostCard = ({ post }: { post: WPPostPreload }) => {
  const isMobile = useIsMobile();
  
  const blogUrl = `./${post.slug}`;
  
  return <Card p={4}>
    <LinkBox as='article'>
      <Stack flexDir={isMobile ? 'column' : 'row'} w='100%' h='100%' gap={5} alignItems={isMobile? 'unset' : 'stretch'}>
        <Box flex={.3}>
          <Image w='100%' h='100%'  objectFit='cover' borderRadius='sm' src={post.featured_image} />
        </Box>
        <Stack spacing={5} flex={.7}>
          <Stack>
            <LinkOverlay as={AppLink} to={blogUrl}>
              <Heading size='lg'>{post.title}</Heading>
            </LinkOverlay>
            <em>
              <HumanDate date={new Date(post.date)} />
            </em>
          </Stack>
          <LinkOverlay as={AppLink} to={blogUrl}>
            <Text dangerouslySetInnerHTML={{ __html: post.excerpt }}></Text>
          </LinkOverlay>
          <Box alignSelf={'end'}>
            <Button size='sm' colorScheme={'themeGreen'} as={AppLink} to={blogUrl}>Verder lezen</Button>
          </Box>
        </Stack>
      </Stack>
    </LinkBox>
  </Card>
}
