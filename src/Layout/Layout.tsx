import { type JSX } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = (): JSX.Element => {
    return (
        <div className='Layout'><Outlet /></div>
    )
}

export default Layout