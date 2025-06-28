import { type JSX } from 'react'
import logo from '../../Assets/Images/efes-logo 1.svg'
import ForgotPasswordForm from './ForgotPasswordForm'

const ForgotPasswordC = (): JSX.Element => {
    return (
        <div className='ForgotPasswordC basis-7/12 flex justify-center '>
            <div className='max-w-sm w-full'>
                <div className='mb-4 flex justify-center'>
                    <img src={logo} alt="" />
                </div>
                <div className='mb-5 text-center'>
                    <h1 className='font-satoshi leading-[100%] font-bold text-[1.75rem]  tracking-[0.5px] text-[#131315]'>Enter your email to recover your account.</h1>
                </div>
                <ForgotPasswordForm />
            </div>
        </div>
    )
}

export default ForgotPasswordC