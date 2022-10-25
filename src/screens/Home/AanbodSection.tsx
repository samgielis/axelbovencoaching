import { Box, HStack } from "@chakra-ui/react"
import { OfferingCard } from "./components/OfferingCard"
import { TitledSection } from "./components/TitledSection"

export const AanbodSection = () => {
    return <TitledSection bgColor='green.100' title={"Aanbod"}>
        <Box w='full' overflow={'auto'}>
            <HStack spacing={8} alignItems='stretch'>
                <OfferingCard type='TRAJECT' title={"Innerlijk Anker"} imageSrc={"/offerings/innerlijkanker.jpg"} summary={"Leven in een wereld waarin iedereen zich vrij en veilig voelt in eigen hoofd en eigen lijf. Ik creeer plekken, momenten, ontmoetingen... die jou toelaten ongeremd jezelf te zijn en die stimuleren om im het hier en nu te komen."} />
                <OfferingCard type={"WORKSHOP"} title={"Bewegen naar vrijheid: Deel 1"} imageSrc={"/offerings/innerlijkanker.jpg"} summary={"Leven in een wereld waarin iedereen zich vrij en veilig voelt in eigen hoofd en eigen lijf. Ik creeer plekken, momenten, ontmoetingen... die jou toelaten ongeremd jezelf te zijn en die stimuleren om im het hier en nu te komen."} />
                <OfferingCard type={"WORKSHOP"} title={"Bewegen naar vrijheid: Deel 2"} imageSrc={"/offerings/innerlijkanker.jpg"} summary={"Leven in een wereld waarin iedereen zich vrij en veilig voelt in eigen hoofd en eigen lijf. Ik creeer plekken, momenten, ontmoetingen... die jou toelaten ongeremd jezelf te zijn en die stimuleren om im het hier en nu te komen."} />
            </HStack>
        </Box>
    </TitledSection>
}
