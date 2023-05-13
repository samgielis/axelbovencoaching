import { Image } from "@chakra-ui/image";
import {
  AspectRatio,
  Box,
  Center,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/layout";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AudioCollection = () => {
  return (
    <>
      <HStack
        display={{ base: "none", md: "flex" }}
        spacing={5}
        w="full"
        justifyContent={"center"}
        pos="relative"
      >
        {cards}
      </HStack>
      <Box pos="relative" display={{ base: "block", md: "none" }}>
        {cards[0]}
        <Box
          pos="absolute"
          zIndex={-5}
          opacity={0.3}
          right={"14px"}
          top="-10px"
        >
          {cards[1]}
        </Box>
        <Box
          pos="absolute"
          zIndex={-5}
          opacity={0.3}
          right={"-14px"}
          top="10px"
        >
          {cards[2]}
        </Box>
      </Box>
    </>
  );
};

interface AudioCardProps {
  imgSrc: string;
  title: string;
}
const AudioCard = ({ imgSrc, title }: AudioCardProps) => {
  return (
    <AspectRatio
      justifySelf={"center"}
      borderRadius={"md"}
      overflow={"hidden"}
      ratio={1}
      w={{ base: "250px", sm: "260px", md: "230px", lg: "250px" }}
      pos="relative"
      boxShadow={"md"}
      textAlign={'center'}
    >
      <Box>
        <VStack>
          <Box bg="black" borderRadius={"md"}>
            <Image opacity={0.7} borderRadius={"md"} src={imgSrc} />
          </Box>
          <Heading
            p={3}
            background="linear-gradient(0deg, rgba(0,0,0,.5) 0%, rgba(0,212,255,0) 100%)"
            pos={"absolute"}
            bottom={0}
            size="md"
            color="white"
          >
            {title}
          </Heading>
        </VStack>
        <Center
          pos="absolute"
          color={"white"}
          fontSize={"7xl"}
          top={0}
          bottom={0}
          margin="auto"
          opacity={0.9}
        >
          <FontAwesomeIcon icon={faHeadphones} />
        </Center>
      </Box>
    </AspectRatio>
  );
};

const cards = [
  <AudioCard
    title="Inzicht: Over Durven Vertragen en Leren Verdwalen"
    imgSrc="/audios/audio-1.jpg"
  />,
  <AudioCard
    title="Wandelmeditatie: Vind Je Natuurlijk Ritme Via Je Voeten"
    imgSrc="/audios/audio-2.jpg"
  />,
  <AudioCard
    title="Embodiment Oefening: Van Stuck Naar Spelen"
    imgSrc="/audios/audio-3.jpg"
  />,
];
