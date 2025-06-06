import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Project from './Components/Project.jsx'
import Contact from './Components/Contact.jsx'
import Services from './Components/Services.jsx'


const router = createBrowserRouter(
               createRoutesFromElements(
                  <Route path='/' element={<Layout />}>
                    <Route path='' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='projects' element={<Project />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='services' element={<Services />} />
                  </Route>
                )
              )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
