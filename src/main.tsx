import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from './Store/Store.ts'
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
