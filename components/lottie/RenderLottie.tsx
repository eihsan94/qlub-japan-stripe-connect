import LottieReact, { LottieComponentProps } from "lottie-react";


interface Props extends LottieComponentProps {
    animationData: any
}

function RenderLottie(props: Props) {
    return (
        <LottieReact {...props} loop={true} />
    )
}

export default RenderLottie
