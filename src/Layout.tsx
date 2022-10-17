import { Button, ButtonGroup, chakra, HStack, Spacer } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export const Layout = ({ children }: PropsWithChildren) => {
    return <>
        <NavigationMenu />
        {children}
    </>
}

const NavigationMenu = () => {
    return <chakra.nav position={'sticky'} m={3}>
        <HStack>
            <Spacer />
            <ButtonGroup bg='green.100'  colorScheme={'green'} p={2}>
                <Button as={Link} to='/'>Home</Button>
                <Button as={Link} to='/mijn-missie'>Mijn missie</Button>
                <Button as={Link} to='/aanbod'>Aanbod</Button>
                <Button as={Link} to='/blog'>Blog</Button>
                <Button as={Link} to='/contact'>Contact</Button>
            </ButtonGroup>
        </HStack>
    </chakra.nav>
}
