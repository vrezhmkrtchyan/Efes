import type { JSX } from "react"
import logo from '../../Assets/Images/efes-logo 1.svg'
import { NavLink } from "react-router-dom"
import { AuthRoutes } from "../../Routes/Routes"
import SignInForm from "./SignInForm"

const SignInC = (): JSX.Element => {
    return (
        <div className="basis-7/12 flex justify-center">
            <div className="max-w-sm w-full">
                <div className="mb-[1.875rem]">
                    <img src={logo} alt="" className="mx-auto" />
                </div>
                <div className="h-[3rem] bg-[#ECF0FF] rounded-[0.5rem] p-1 flex mb-3.5">
                    <NavLink className={({ isActive }) => `flex-1/2 flex items-center justify-center cursor-pointer rounded-[0.5rem] font-medium text-[1rem] tracking-[0.5px] w-full h-full duration-[0.3s] ease-linear font-satoshi ${isActive ? 'bg-[#2B56EF] text-[#EDEEF6]' : "bg-[#ECF0FF] text-[#565656]"} hover:opacity-70`} to={AuthRoutes.signUp}>
                        Sign Up
                    </NavLink>
                    <NavLink  className={({ isActive }) => `flex-1/2 flex items-center justify-center cursor-pointer rounded-[0.5rem] font-medium text-[1rem] tracking-[0.5px] w-full h-full  duration-[0.3s] ease-linear font-satoshi ${isActive ? 'bg-[#2B56EF] text-[#EDEEF6]' : "bg-[#ECF0FF] text-[#565656]"} hover:opacity-70`} to={AuthRoutes.signIn}>
                        Sign In
                    </NavLink>
                </div>
                <SignInForm />
            </div>
        </div>
    )
}

export default SignInC