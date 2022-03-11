import { Box, BoxProps } from "@chakra-ui/react";
import { LottieComponentProps } from "lottie-react";
import { FC } from "react";
import RenderLottie from "../RenderLottie";
import comingSoonAnimation from "./hero.json";

interface Props {
    style?: LottieComponentProps
    boxProps?: BoxProps
}
const HeroLottie: FC<Props> = ({ style, boxProps, children }) => {
    const lottieStyle = style || {
        height: 300
    }

    return (
        <Box {...boxProps}>
            {children}
            <RenderLottie style={lottieStyle} animationData={comingSoonAnimation} />
        </Box>
    )

}

export default HeroLottie