import { type JSX } from 'react'
import AppRoutes from './Routes/AppRoutes'

const App = (): JSX.Element => {
  return (
    <div className='overflow-hidden min-w-[1024px]'><AppRoutes /></div>
  )
}

export default App