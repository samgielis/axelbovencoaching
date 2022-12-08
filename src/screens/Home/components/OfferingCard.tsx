import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Heading,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

type OfferingType = "WORKSHOP" | "TRAJECT";

interface OfferingCardProps extends BaseOfferingCardProps{
  isMobile?: boolean;
}

interface BaseOfferingCardProps {
  type: OfferingType;
  title: string;
  imageSrc: string;
  summary: string;
  href: string;
}

export const OfferingCard = ({isMobile, ...props}: OfferingCardProps) => {
  if (isMobile) {
    return <MobileOfferingCard {...props}/>
  }
  return <DesktopOfferingCard {...props}/>
}

const MobileOfferingCard = ({
  type,
  title,
  summary,
  imageSrc,
  href,
}: OfferingCardProps) => {
  return (
    <Box
      minW="300px"
      borderRadius={"md"}
      boxShadow="md"
      overflow="hidden"
      bg="white"
      flex={1}
    >
      <Stack spacing={0} alignItems="stretch" h="100%">
        <Image maxHeight='200px' src={imageSrc} alt={title} objectFit="cover" />
        <Stack p={4} flex={1}>
          <Stack>
            <OfferingTypeLabel type={type} />
            <Heading>{title}</Heading>
          </Stack>

          <Spacer />

          <Text dangerouslySetInnerHTML={{ __html: summary }} />

          <Spacer />

          <ButtonGroup size="sm" colorScheme="themeGreen">
            <Button as={Link} to={href} flex={0.5}>
              Starten
            </Button>
            <Button as={Link} to={href} flex={0.5} variant="link">
              Meer leren
            </Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </Box>
  );
};

const DesktopOfferingCard = ({
  type,
  title,
  summary,
  imageSrc,
  href,
}: OfferingCardProps) => {
  return (
    <Box
      minW="550px"
      borderRadius={"md"}
      boxShadow="md"
      overflow="hidden"
      bg="white"
    >
      <HStack spacing={0} alignItems="stretch" h="100%">
        <Image w="45%" maxW={'250px'} src={imageSrc} alt={title} objectFit="cover" />
        <Stack flex={1} p={4}>
          <Stack>
            <OfferingTypeLabel type={type} />
            <Heading>{title}</Heading>
          </Stack>

          <Spacer />

          <Text dangerouslySetInnerHTML={{ __html: summary }} />

          <Spacer />

          <ButtonGroup size="sm" colorScheme="themeGreen">
            <Button as={Link} to={href} flex={0.5}>
              Starten
            </Button>
            <Button as={Link} to={href} flex={0.5} variant="link">
              Meer leren
            </Button>
          </ButtonGroup>
        </Stack>
      </HStack>
    </Box>
  );
};

interface OfferingTypeLabelProps {
  type: OfferingType;
}

const OfferingTypeLabel = ({ type }: OfferingTypeLabelProps) => {
  return (
    <span>
      <Badge
        fontSize="sm"
        colorScheme={type === "TRAJECT" ? "themeGreen" : "softYellow"}
      >
        {type}
      </Badge>
    </span>
  );
};
