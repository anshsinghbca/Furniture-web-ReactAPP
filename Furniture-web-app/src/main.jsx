import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import App from './Layout/App.jsx';
import Home from './Layout/Home.jsx';
import Bag from './Layout/Bag.jsx';
import {Provider} from "react-redux"
import furnioStore from './Store/index.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,     
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
  {
    path: "/bag",
    element: <Bag />        // 🛍 separate layout (its own header/footer)
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={furnioStore}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
