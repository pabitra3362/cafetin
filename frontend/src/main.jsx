import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import App from './App.jsx'
import config from '../config.js'
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Auth0Provider
    domain={config.authDomain}
    clientId={config.authClientId}
    authorizationParams={{ redirect_uri: window.location.origin }}
    >
    <App />
    </Auth0Provider>
    
  </StrictMode>,
)
