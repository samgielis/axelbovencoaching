import {
  Box,
  Button,
  ButtonGroup,
  chakra,
  Collapse,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useMatch } from "react-router-dom";
import { useIsMobile } from "./hooks/useIsMobile";
import {
  AANBOD_PATH,
  BLOG_PATH,
  CONTACT_PATH,
  HOME_PATH,
  MIJN_MISSIE_PATH,
} from "./routes";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box w="full" minH="100vh">
      <NavigationMenu />
      {children}
    </Box>
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
