import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Compoonents/Layouts/Home/Home';
import Main from './Compoonents/Main/Main';
import ProjectDetails from './Compoonents/Layouts/ProjectDetails/ProjectDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <p>error page</p> ,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/ProjectDetails',
        element: <ProjectDetails></ProjectDetails>
      }
    ]
  },
  {

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
