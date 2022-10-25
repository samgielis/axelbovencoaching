import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import { PropsWithChildren } from "react"

type TitledSectionProps = PropsWithChildren<{
    bgColor: string;
    title: string
}>

export const TitledSection = ({ title, bgColor, children }: TitledSectionProps) => {
    return <Box py={10} bg={bgColor}>
        <Container maxW='container.xl' mb={5}>
            <Heading size='2xl' color='white'>{title}</Heading>
        </Container>
        <Container maxW='container.xl' pr={0} bg={bgColor} overflow='scroll' pos={'relative'}>
            {children}
            <Box w={5} pos='absolute' h='100%' top={0} right={0} bgGradient={`linear(to-r, rgba(0,0,0,0), ${bgColor})`}/>
        </Container>
    </Box>
}
