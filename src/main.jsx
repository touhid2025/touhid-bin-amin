import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router";
import router from './router/Router';
import Aos from 'aos';

 Aos.init({
          duration: 1000,
          easing: 'ease-in-out-cubic',
          once: false,
          mirror: true,
        });

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
