import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react"
import { Link as RRLink, LinkProps as RRLinkProps } from "react-router-dom"

export const AppLink = (props: ChakraLinkProps & Pick<RRLinkProps, 'to'> ) => {
    return <ChakraLink as={RRLink} {...props}/>
}
