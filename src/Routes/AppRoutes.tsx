import { type JSX } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { SignIn, SignUp } from '../Pages'
import { AuthRoutes } from './Routes'
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword'

const AppRoutes = (): JSX.Element => {
    return (
        <div className='AppRoutes'>
            <Routes>
                <Route path={AuthRoutes.default} element={<Layout />}>
                    <Route index element={<SignUp />} />
                    <Route path={AuthRoutes.signIn} element={<SignIn />} />
                    <Route path={AuthRoutes.ForgotPassword} element={<ForgotPassword />} />
                </Route>
            </Routes>
        </div>
    )
}

export default AppRoutes