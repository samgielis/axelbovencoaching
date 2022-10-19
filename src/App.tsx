import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { ScreenRouter } from "./ScreenRouter"

export const App = () => (
  <ChakraProvider theme={theme} resetCSS>
    <ScreenRouter />
  </ChakraProvider>
)
