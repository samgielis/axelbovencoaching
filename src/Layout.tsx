import {
  Box,
  Button,
  ButtonGroup,
  chakra,
  Collapse,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
  useDisclosure,
  Link as ExternalLink,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsWithChildren } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useMatch } from "react-router-dom";
import { AppLink } from "./components/AppLink";
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
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box w="full" minH="100vh">
      <NavigationMenu />
      {children}
      <BottomMenu />
    </Box>
  );
};

const BottomMenu = () => {
  const isMobile = useIsMobile();
  return <Flex w='100%' bg='themeGreen.600' color='white' py={20}>
    <Container maxW='container.xl' centerContent>
      <Stack spacing={8}>
        <Heading as='h3' size='xl'>Axel Boven Coaching</Heading>
        <Stack spacing={20} direction={isMobile ?'column' : 'row'} alignItems='stretch'>

          <Stack spacing={4}>
            <Heading as='h3' size='lg' color='themeGreen.900'>Contact</Heading>
            <Stack spacing={1} >
              <Text>Schoterweg 242B
              </Text>
              <Text> 3980 Tessenderlo
              </Text>

            </Stack>
            <ExternalLink  href="mailto:info@axelbovencoaching.be">info@axelbovencoaching.be</ExternalLink>
          </Stack>

          <Stack spacing={4}>
            <Heading as='h3' size='lg' color='themeGreen.900'>Policies</Heading>
            <Stack spacing={1} >
              <AppLink to={PRIVACY_BELEID_PATH}>Privacybeleid</AppLink>
              <AppLink to={ALGEMENE_VOORWAARDEN_PATH}>Algemene voorwaarden</AppLink>
            </Stack>
          </Stack>

          <Stack spacing={4}>
            <Heading as='h3' size='lg' color='themeGreen.900'>Volgen</Heading>
            <Stack spacing={1} >
              <Text><FontAwesomeIcon fontSize={'var(--chakra-fontSizes-lg)'} icon={faInstagram} /> <ExternalLink href={'https://www.instagram.com/axel.boven.coaching/'}>Instagram</ExternalLink></Text>
              <Text><FontAwesomeIcon fontSize={'var(--chakra-fontSizes-lg)'} icon={faLinkedin} /> <ExternalLink href={'https://www.linkedin.com/in/axelboven/'}>LinkedIn</ExternalLink></Text>
            </Stack>
          </Stack>

        </Stack>
      </Stack>

    </Container>

  </Flex>
}

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
