import { Formik, Form, Field } from 'formik'
import { useState, type JSX } from 'react'
import * as Yup from 'yup';
import eyeClose from '../../Assets/Images/eye-closed.svg'
import eyeOpen from '../../Assets/Images/eye-opened.svg'
import { NavLink } from 'react-router-dom';
import SpinnerForButtons from '../../Ui/Loaders/SpinnerForButtons';
import { AuthRoutes } from '../../Routes/Routes';
import type { FormValues } from '../../Types/FormsTypes/FormsTypes';



const SignInForm = (): JSX.Element => {
    const [isPass, setIsPass] = useState<boolean>(false)
    const initValues: FormValues = {
        email: "",
        password: ""
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .required('Email is required')
            .matches(
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                'Enter a valid email'
            ),

        password: Yup.string()
            .required('Password is required')
            .matches(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                'Min 8, upper, lower, number & symbol'
            ),
    });

    const handleFormSubmit = (values: FormValues) => {
        console.log(values);

    }

    const handleOpenAndClose = (): void => {
        setIsPass((prev) => !prev)
    }

    return (
        <div className='SignInForm mb-3 w-full'>
            <Formik initialValues={initValues} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
                {({ values, errors, touched, isValid, dirty, isSubmitting, }) => (
                    <Form>
                        <div className='flex flex-col mb-5'>
                            <label htmlFor="email" className='font-satoshi font-medium text-[1rem] tracking-[0.5px] mb-1.5 text-[#131315]'>Email Address</label>
                            <Field type='text' name='email' id='email' className={`font-satoshi duration-300 ease-in-out font-normal text-[0.875rem] py-3 px-4 rounded-[12px] border text-[#131315] placeholder:font-satoshi placeholder:font-normal placeholder:text-[0.875rem] placeholder:tracking-[0.5px] placeholder:text-[#565656] placeholder:duration-300 placeholder:ease-in-out  outline-0 focus:border-[#2B56EF] focus:placeholder:opacity-0 ${errors.email && touched.email && values.email !== "" ? "border-[#E11D48]" : touched.email && values.email !== '' ? 'border-[#10B981]' : 'border-[#D7D8E1]'}`} placeholder='Type Email Address' />
                        </div>
                        <div className='flex flex-col mb-5'>
                            <label htmlFor="password" className='font-satoshi font-medium text-[1rem] tracking-[0.5px] mb-1.5 text-[#131315]'>Password</label>
                            <div className='relative'>
                                <Field type={`${isPass ? "text" : "password"}`} name='password' id='password' className={`font-satoshi w-full duration-300 ease-in-out font-normal text-[0.875rem] py-3 px-4 rounded-[12px] border  text-[#131315] placeholder:font-satoshi placeholder:font-normal placeholder:text-[0.875rem] placeholder:tracking-[0.5px] placeholder:text-[#565656] placeholder:duration-300 placeholder:ease-in-out  outline-0 focus:border-[#2B56EF] focus:placeholder:opacity-0 ${errors.password && touched.password && values.password !== "" ? "border-[#E11D48]" : touched.password && values.password !== "" ? 'border-[#10B981]' : 'border-[#D7D8E1]'}`} placeholder='Type Password' />
                                <div className='absolute right-4 top-2/4 translate-y-[-50%] h-[24px] overflow-hidden cursor-pointer hover:opacity-70 duration-300 ease-in-out'>
                                    <span onClick={handleOpenAndClose} className={`duration-300 ease-in-out ${isPass && 'opacity-0'}`}><img src={eyeOpen} alt="" /></span>
                                    <span onClick={handleOpenAndClose} className={`absolute top-0 left-0 opacity-0 duration-300 ease-in-out ${isPass && "opacity-100"}`}><img src={eyeClose} alt="" /></span>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <button type='submit' disabled={!(isValid && dirty) || isSubmitting} className='bg-[#2B56EF] disabled:bg-[#D7D8E1] disabled:cursor-not-allowed hover:disabled:opacity-100 disabled:text-[#565656] py-3 rounded-[12px] text-[#EDEEF6] text-center font-satoshi text-[14px] w-full cursor-pointer duration-300 ease-in-out hover:opacity-70 font-medium tracking-[0.5px]'>{isSubmitting ? <SpinnerForButtons /> : "Sign in"}</button>
                        </div>
                    </Form>
                )}
            </Formik>
            <div>
                <p className='tracking-[0.5px] text-[14px] font-normal font-satoshi text-[#131315]'>Forgot password? <NavLink to={AuthRoutes.ForgotPassword} className='underline decoration-[1.2px] underline-offset-2 duration-300 ease-in-out hover:opacity-70'>Recover account</NavLink></p>
            </div>
        </div>
    )
}

export default SignInForm