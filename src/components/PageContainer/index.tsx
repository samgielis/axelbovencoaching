import { Container } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const PageContainer = (props: PropsWithChildren) => <Container maxWidth={"container.md"} my={40} {...props}/>
