import { Formik, Form, Field } from 'formik'
import { type JSX } from 'react'
import type { FormValues } from '../../Types/FormsTypes/FormsTypes'
import * as Yup from 'yup';
import SpinnerForButtons from '../../Ui/Loaders/SpinnerForButtons';



const ForgotPasswordForm = (): JSX.Element => {

    const initValues: FormValues = {
        email: ""
    }


    const validationSchema = Yup.object({
        email: Yup.string()
            .required('Email is required')
            .matches(
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                'Enter a valid email'
            ),

    });

    const handleFormSubmit = (values: FormValues) => {
        console.log(values);
    }

    return (
        <div className='ForgotPasswordForm'>
            <Formik initialValues={initValues} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
                {({ isValid, dirty, values, errors, touched, isSubmitting }) => (
                    <Form>
                        <div className='flex flex-col mb-5'>
                            <label htmlFor="email" className='font-satoshi font-medium text-[1rem] tracking-[0.5px] mb-1.5 text-[#131315]'>Email Address</label>
                            <Field type='text' name='email' id='email' className={`font-satoshi duration-300 ease-in-out font-normal text-[0.875rem] py-3 px-4 rounded-[12px] border text-[#131315] placeholder:font-satoshi placeholder:font-normal placeholder:text-[0.875rem] placeholder:tracking-[0.5px] placeholder:text-[#565656] placeholder:duration-300 placeholder:ease-in-out  outline-0 focus:border-[#2B56EF] focus:placeholder:opacity-0 ${errors.email && touched.email && values.email !== "" ? "border-[#E11D48]" : touched.email && values.email !== '' ? 'border-[#10B981]' : 'border-[#D7D8E1]'}`} placeholder='Type Email Address' />
                        </div>
                        <div className='mb-3'>
                            <button type='submit' disabled={!(isValid && dirty) || isSubmitting} className='bg-[#2B56EF] disabled:bg-[#D7D8E1] disabled:cursor-not-allowed hover:disabled:opacity-100 disabled:text-[#565656] py-3 rounded-[12px] text-[#EDEEF6] text-center font-satoshi text-[14px] w-full cursor-pointer duration-300 ease-in-out hover:opacity-70 font-medium tracking-[0.5px]'>{isSubmitting ? <SpinnerForButtons /> : "Send message"}</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ForgotPasswordForm