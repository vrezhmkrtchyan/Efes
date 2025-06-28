import type { JSX } from "react"
import Slider from "../../Components/Slider/Slider"
import SignInC from "../../Components/SignInC/SignInC"

const SignIn = (): JSX.Element => {
    return (
        <div className="h-[calc(95vh-2rem)] flex items-center m-[2rem]">
            <Slider />
            <SignInC />
        </div>
    )
}

export default SignIn