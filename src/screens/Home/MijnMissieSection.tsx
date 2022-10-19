import { Box, Button, Container, Heading, Link, Stack } from "@chakra-ui/react"
import { MIJN_MISSIE_PATH } from "../../routes"

export const MijnMissieSection = () => {
    return <Box w='100%' py={20}>
        <Container maxW='container.lg' centerContent p={2}>
            <Stack spacing={10}>
                <Heading size={{base: 'xl', sm: '3xl'}} textAlign='center'>
                    "Ik help mensen om binnenin rust en vrijheid te ervaren, ook als de buitenwereld woelig is."
                </Heading>
                <Button size={{base: 'md', sm: 'lg'}} fontSize='2xl' as={Link} variant='link' colorScheme={'green'} to={MIJN_MISSIE_PATH}>Lees meer over mijn missie en hoe ik werk.</Button>
            </Stack>
        </Container>
    </Box>
}
