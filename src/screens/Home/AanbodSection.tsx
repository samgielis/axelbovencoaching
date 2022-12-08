import { Box, HStack } from "@chakra-ui/react";
import { TitledSection } from "../../components/TitledSection";
import { usePreloadCategory } from "../../data/wordpress/loaders/usePreloadCategory";
import { useIsMobile } from "../../hooks/useIsMobile";
import { OfferingCard } from "./components/OfferingCard";

export const AanbodSection = () => {
  const { isLoading, category } = usePreloadCategory("aanbod");
  const isMobile = useIsMobile();
  if (isLoading) return null;

  return (
    <TitledSection bgColor="themeGreen.400" title={"Aanbod"} useAsScrollbox>
      <Box w="full" overflow={"auto"}>
        <HStack spacing={4} alignItems="stretch">
          {category?.posts.map((post) => {
            const type = Object.keys(post.tags).find(
              (tag) => tag === "Workshop"
            )
              ? "WORKSHOP"
              : "TRAJECT";
            return (
              <OfferingCard
                href={`/aanbod/${post.slug}`}
                key={post.ID}
                type={type}
                title={post.title}
                imageSrc={post.featured_image}
                summary={post.excerpt}
                isMobile={isMobile}
              />
            );
          })}
        </HStack>
      </Box>
    </TitledSection>
  );
};
