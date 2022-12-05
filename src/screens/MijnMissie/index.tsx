import { Box, Container, Stack } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { PageContainer } from "../../components/PageContainer";
import { QuoteWithCTASection } from "../../components/QuoteWithCTASection";
import { Post } from "../Post";

const MISSIE_POST_ID = "204";
export const MijnMissie = () => {
  return (
    <>
      <Helmet>
        <title>Mijn missie - Axel Boven Coaching</title>
      </Helmet>
      <Stack w="full" spacing={0}>
        <QuoteWithCTASection
          title={
            '"Ik help mensen rust en vrijheid ervaren, ook als de buitenwereld woelig is."'
          }
        />
        <Box bg="themeGreen.50" minH="100vh">
          <PageContainer hasCustomHeading>
            <Post postId={MISSIE_POST_ID} hideDate />
          </PageContainer>
        </Box>
      </Stack>
    </>
  );
};
