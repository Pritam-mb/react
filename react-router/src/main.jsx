import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'
import { useLoaderData } from 'react-router-dom'
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <App/>,
//     children:[
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       },
//       {
//         path: "user/:userid",
//         element: <User/>
//       },
//       {
//           loader: githubInfoLoader ,
//         path: "github",
//         element: <Github/>
//       }
      
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>  </StrictMode>,
)
