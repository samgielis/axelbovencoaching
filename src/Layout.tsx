import { Box, Button, ButtonGroup, chakra, Collapse, HStack, IconButton, Spacer, Stack, useDisclosure } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useIsMobile } from "./hooks/useIsMobile";
import { AANBOD_PATH, BLOG_PATH, CONTACT_PATH, HOME_PATH, MIJN_MISSIE_PATH } from "./routes";

export const Layout = ({ children }: PropsWithChildren) => {
    return <Box w='full' minH='100vh'>
        <NavigationMenu />
        {children}
    </Box>
}

const NavigationMenu = () => {
    const isMobile = useIsMobile();
    const { isOpen, onToggle } = useDisclosure();
    const showMenu = (isOpen || !isMobile);
    return <chakra.nav position={'fixed'} top={0} right={0} m={3} zIndex={1} onClick={onToggle} >
        <Stack align={'end'}>
            {isMobile && <IconButton colorScheme={'green'} isActive={isOpen} onClick={onToggle} icon={<FaBars />} aria-label={"Menu openen"} />}
            <Collapse in={showMenu}>
                <ButtonGroup bg='green.500' colorScheme={'green'} p={2} flexDir={isMobile ? 'column' : 'row'} alignItems='center' boxShadow='lg'>
                    <Button as={Link} to={HOME_PATH}>Home</Button>
                    <Button as={Link} to={MIJN_MISSIE_PATH}>Mijn missie</Button>
                    <Button as={Link} to={AANBOD_PATH}>Aanbod</Button>
                    <Button as={Link} to={BLOG_PATH}>Blog</Button>
                    <Button as={Link} to={CONTACT_PATH}>Contact</Button>
                </ButtonGroup>
            </Collapse>
        </Stack>
    </chakra.nav>
}
