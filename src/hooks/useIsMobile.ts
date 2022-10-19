import { useBreakpointValue } from "@chakra-ui/react";

export function useIsMobile() {
    return !!useBreakpointValue({
        base: true,
        md: false,
        default: false
    });
}
