import { Container, VStack, Heading, Box, Center } from "@chakra-ui/react"

export const MainSection = () => {
    return <Box w='100%' position='relative' bgImage={'/main.jpg'} h='80vh' minH='80vh' color='white' backgroundPosition='center' backgroundSize='cover'>
    <Container maxW='container.xl' minH='80vh' h='100%'>
        <Center w='100%' h='100%'>
            <VStack spacing={5} textAlign='center'>
                <Heading size='4xl'>Axel Boven</Heading>
                <Heading>Vrij en Verbonden Onderweg</Heading>
            </VStack>
        </Center>
    </Container>
</Box>
}
