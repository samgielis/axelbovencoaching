import { Container } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface PageContainerProps {
  hasCustomHeading?: boolean;
}
export const PageContainer = ({
  hasCustomHeading,
  ...props
}: PropsWithChildren<PageContainerProps>) => (
  <Container
    maxWidth={"container.md"}
    pb={40}
    pt={hasCustomHeading ? 20 : 40}
    {...props}
  />
);
