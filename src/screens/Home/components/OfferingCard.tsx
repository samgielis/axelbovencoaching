import { Badge, Box, Text, Heading, HStack, Image, Spacer, Stack, Button, ButtonGroup, Flex, AspectRatio } from "@chakra-ui/react";
import React from "react";

type OfferingType = 'WORKSHOP' | 'TRAJECT';

interface OfferingCardProps {
    type: OfferingType;
    title: string;
    imageSrc: string;
    summary: string;
}

export const OfferingCard = ({ type, title, summary, imageSrc }: OfferingCardProps) => {
    return <Box minW='550px' borderRadius={'md'} boxShadow='md' overflow='hidden' bg='white'>
        <HStack spacing={0} alignItems='stretch' h='100%'>
            <Image w='45%' src={imageSrc} alt={title} objectFit='cover' />
            <Stack w='55%' p={4} >
                <Stack>
                    <OfferingTypeLabel type={type} />
                    <Heading>{title}</Heading>
                </Stack>

                <Spacer />

                <Text>{summary}</Text>

                <Spacer />

                <ButtonGroup size='sm'>
                    <Button flex={.5} colorScheme='green'>Starten</Button>
                    <Button flex={.5} variant='link'>Meer leren</Button>
                </ButtonGroup>
            </Stack>
        </HStack>
    </Box>
}

interface OfferingTypeLabelProps {
    type: OfferingType;
}

const OfferingTypeLabel = ({ type }: OfferingTypeLabelProps) => {
    return <span><Badge fontSize='sm' colorScheme={type === 'TRAJECT' ? 'green' : 'yellow'}>{type}</Badge></span>
}
