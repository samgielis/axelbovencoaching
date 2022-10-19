import { Box, Button, ButtonGroup, chakra, HStack, Spacer } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { AANBOD_PATH, BLOG_PATH, CONTACT_PATH, HOME_PATH, MIJN_MISSIE_PATH } from "./routes";

export const Layout = ({ children }: PropsWithChildren) => {
    return <Box w='full' minH='100vh'>
        <NavigationMenu />
        {children}
    </Box>
}

const NavigationMenu = () => {
    return <chakra.nav position={'fixed'} top={0} right={0} m={3} zIndex={1}>
        <HStack>
            <Spacer />
            <ButtonGroup bg='green.500'  colorScheme={'green'} p={2}>
                <Button as={Link} to={HOME_PATH}>Home</Button>
                <Button as={Link} to={MIJN_MISSIE_PATH}>Mijn missie</Button>
                <Button as={Link} to={AANBOD_PATH}>Aanbod</Button>
                <Button as={Link} to={BLOG_PATH}>Blog</Button>
                <Button as={Link} to={CONTACT_PATH}>Contact</Button>
            </ButtonGroup>
        </HStack>
    </chakra.nav>
}
