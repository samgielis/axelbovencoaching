import {
  Box,
  Button,
  ButtonGroup,
  Center,
  chakra,
  Collapse,
  Container,
  Flex,
  Heading,
  IconButton,
  Link as ExternalLink,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsWithChildren } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useMatch } from "react-router-dom";
import { AppLink } from "./components/AppLink";
import { NewsLetterWidget } from "./components/NewsLetterWidget";
import { useIsMobile } from "./hooks/useIsMobile";
import {
  AANBOD_PATH,
  ALGEMENE_VOORWAARDEN_PATH,
  BLOG_PATH,
  CONTACT_PATH,
  HOME_PATH,
  MIJN_MISSIE_PATH,
  PRIVACY_BELEID_PATH,
} from "./routes";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box w="full" minH="100vh">
      <NavigationMenu />
      {children}
      <NewsLetterWidget/>
      <BottomMenu />
    </Box>
  );
};

const BottomMenu = () => {
  const isMobile = useIsMobile();
  return (
    <Flex w="100%" bg="themeGreen.600" color="white" py={20}>
      <Container maxW="container.xl" centerContent>
        <Stack spacing={10}>
          <Heading as="h3" size="xl">
            Axel Boven Coaching
          </Heading>

          <Stack
            spacing={20}
            direction={isMobile ? "column" : "row"}
            alignItems="stretch"
          >
            <Stack spacing={4}>
              <Heading as="h3" size="lg" color="themeGreen.900">
                Contact
              </Heading>
              <Stack spacing={1}>
                <Text>Schoterweg 242B</Text>
                <Text> 3980 Tessenderlo</Text>
              </Stack>
              <ExternalLink href="mailto:info@axelbovencoaching.be">
                info@axelbovencoaching.be
              </ExternalLink>
              <Text>BE0792.236.810</Text>
            </Stack>

            <Stack spacing={4}>
              <Heading as="h3" size="lg" color="themeGreen.900">
                Policies
              </Heading>
              <Stack spacing={1}>
                <AppLink to={PRIVACY_BELEID_PATH}>Privacybeleid</AppLink>
                <AppLink to={ALGEMENE_VOORWAARDEN_PATH}>
                  Algemene voorwaarden
                </AppLink>
              </Stack>
            </Stack>

            <Stack spacing={4}>
              <Heading as="h3" size="lg" color="themeGreen.900">
                Volgen
              </Heading>
              <Stack spacing={1}>
                <Text>
                  <chakra.span fontSize="lg" pr="1">
                    <FontAwesomeIcon icon={faInstagram} />
                  </chakra.span>{" "}
                  <ExternalLink
                    href={"https://www.instagram.com/axel.boven.coaching/"}
                  >
                    Instagram
                  </ExternalLink>
                </Text>
                <Text>
                  <chakra.span fontSize="lg" pr="1">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </chakra.span>{" "}
                  <ExternalLink href={"https://www.linkedin.com/in/axelboven/"}>
                    LinkedIn
                  </ExternalLink>
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Center>
            <Heading mt={10} as="h3" size="sm">
              <chakra.span pr="1" color="themeGreen.200">
                <FontAwesomeIcon icon={faHeart} />
              </chakra.span>{" "}
              made from friendship by{" "}
              <ExternalLink
                color="themeGreen.200"
                href="https://www.linkedin.com/in/samgielis/"
              >
                Sam Gielis
              </ExternalLink>
            </Heading>
          </Center>
        </Stack>
      </Container>
    </Flex>
  );
};

const NavigationMenu = () => {
  const isMobile = useIsMobile();
  const { isOpen, onToggle } = useDisclosure();
  const showMenu = isOpen || !isMobile;
  return (
    <chakra.nav
      position={"fixed"}
      top={0}
      right={0}
      m={3}
      zIndex={1}
      onClick={onToggle}
    >
      <Stack align={"end"}>
        {isMobile && (
          <IconButton
            colorScheme={"themeGreen"}
            isActive={isOpen}
            onClick={onToggle}
            icon={<FaBars />}
            aria-label={"Menu openen"}
          />
        )}
        <Collapse in={showMenu}>
          <ButtonGroup
            bg="themeGreen.500"
            colorScheme={"themeGreen"}
            p={2}
            flexDir={isMobile ? "column" : "row"}
            alignItems="center"
            boxShadow="lg"
          >
            <NavigationButton to={HOME_PATH} title="Home" />
            <NavigationButton to={MIJN_MISSIE_PATH} title="Mijn missie" />
            <NavigationButton to={AANBOD_PATH} title="Aanbod" />
            <NavigationButton to={BLOG_PATH} title="Blog" />
            <NavigationButton to={CONTACT_PATH} title="Contact" />
          </ButtonGroup>
        </Collapse>
      </Stack>
    </chakra.nav>
  );
};

interface NavigationButtonProps {
  to: string;
  title: string;
}

const NavigationButton = ({ to, title }: NavigationButtonProps) => {
  const a = useMatch(`${to}/*`);
  return (
    <Button as={Link} to={to} isActive={!!a}>
      {title}
    </Button>
  );
};
