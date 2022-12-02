import { Container } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const PageContainer = (props: PropsWithChildren) => (
  <Container maxWidth={"container.md"} py={40} {...props} />
);
