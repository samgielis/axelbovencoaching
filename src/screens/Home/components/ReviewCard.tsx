import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Card } from "../../../components/Card"

interface ReviewCardProps {
    name: string;
    subtitle?: string;
}

export const ReviewCard = ({name, subtitle, children}: PropsWithChildren<ReviewCardProps>) => {
    return <Card p={6} py={12}>
        <Center h='100%'>

        <Stack spacing={8} align='center' textAlign={'center'}>
            <Text fontSize='xl' as={'i'} >
                "{children}"
            </Text>
            <Stack>
                <Heading fontSize='2xl'>{name}</Heading>
                <Heading fontSize='lg' color='themeGreen.600'>{subtitle}</Heading>
            </Stack>
        </Stack>
        </Center>
    </Card>
}
