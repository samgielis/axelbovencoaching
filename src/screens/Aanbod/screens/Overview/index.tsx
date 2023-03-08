import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { PageContainer } from "../../../../components/PageContainer";
import { QuoteWithCTASection } from "../../../../components/QuoteWithCTASection";
import { usePreloadCategory } from "../../../../data/wordpress/loaders/usePreloadCategory";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import { OfferingCard } from "../../../Home/components/OfferingCard";
import { PostLoadingPlaceholder } from "../../../Post/PostLoadingPlaceholder";

export const Overview = () => {
  return (
    <>
      <Helmet>
        <title>Aanbod - Axel Boven Coaching</title>
      </Helmet>
      <Stack spacing={0} w="full">
        <QuoteWithCTASection title={'"The fire, it speaks."'} />
        <Box bg="themeGreen.50" minH="100vh">
          <PageContainer hasCustomHeading>
            <AanbodContent />
          </PageContainer>
        </Box>
      </Stack>
    </>
  );
};

const AanbodContent = () => {
  const { isLoading, category } = usePreloadCategory("aanbod");
  const isMobile = useIsMobile();

  if (isLoading) {
    return <PostLoadingPlaceholder />;
  }

  const workshops =
    category?.posts.filter(
      (post) => !!Object.keys(post.tags).find((tag) => tag === "Workshop")
    ) || [];

  const trajecten =
    category?.posts.filter(
      (post) =>
        !!Object.keys(post.tags).find((tag) => tag === "Coaching traject")
    ) || [];

  const events =
    category?.posts.filter(
      (post) => !!Object.keys(post.tags).find((tag) => tag === "Event")
    ) || [];

  return (
    <Stack spacing={10}>
      <Heading size="3xl">Aanbod</Heading>

      <Accordion allowToggle allowMultiple defaultIndex={[0, 1, 2]}>
        {trajecten.length > 0 && (
          <AccordionItem border="none">
            <AccordionButton px={1}>
              <Heading size="lg">Trajecten</Heading>
              <Spacer />

              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel px={0} pb={20}>
              <Stack spacing={4}>
                {trajecten.map((post) => {
                  return (
                    <OfferingCard
                      href={`/aanbod/${post.slug}`}
                      key={post.ID}
                      type={"TRAJECT"}
                      title={post.title}
                      imageSrc={post.featured_image}
                      summary={post.excerpt}
                      isMobile={isMobile}
                    />
                  );
                })}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        )}

        {workshops.length > 0 && (
          <AccordionItem border="none">
            <AccordionButton px={1}>
              <Heading size="lg">Workshops</Heading>
              <Spacer />

              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel px={0} pb={4}>
              <Stack spacing={4}>
                {workshops.map((post) => {
                  return (
                    <OfferingCard
                      href={`/aanbod/${post.slug}`}
                      key={post.ID}
                      type={"WORKSHOP"}
                      title={post.title}
                      imageSrc={post.featured_image}
                      summary={post.excerpt}
                      isMobile={isMobile}
                    />
                  );
                })}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        )}

        {events.length > 0 && (
          <AccordionItem border="none">
            <AccordionButton px={1}>
              <Heading size="lg">Events</Heading>
              <Spacer />

              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel px={0} pb={20}>
              <Stack spacing={4}>
                {events.map((post) => {
                  return (
                    <OfferingCard
                      href={`/aanbod/${post.slug}`}
                      key={post.ID}
                      type={"TRAJECT"}
                      title={post.title}
                      imageSrc={post.featured_image}
                      summary={post.excerpt}
                      isMobile={isMobile}
                    />
                  );
                })}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        )}
      </Accordion>
    </Stack>
  );
};
