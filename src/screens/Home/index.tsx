import { Box, Button, Center, Container, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { MIJN_MISSIE_PATH } from "../../routes"
import { MainSection } from "./MainSection"
import { MijnMissieSection } from "./MijnMissieSection"

export const Home = () => {
    return <Stack w='100%'>
        <MainSection/>
        <MijnMissieSection />

        <Box w='100%' py={20} bg='green.100'>
            <Container maxW='container.lg' centerContent>
                <Stack spacing={10}>
                    <Heading size={{base: 'xl', sm: '3xl'}} textAlign='center'>
                        "Ik help mensen om binnenin rust en vrijheid te ervaren, ook als de buitenwereld woelig is."
                    </Heading>
                    <Button size={{base: 'md', sm: 'lg'}} fontSize='2xl' as={Link} variant='link' colorScheme={'green'} to={MIJN_MISSIE_PATH}>Lees meer over mijn missie en hoe ik werk.</Button>
                </Stack>
            </Container>
        </Box>

        <MijnMissieSection />
    </Stack>
}
