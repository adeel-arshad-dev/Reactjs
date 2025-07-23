import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'


// When we will be using th react route r than there is no need to put all the componenets in the App.jsx and we have to add a router in our jsx as following

// const router=  createBrowserRouter([
//   {
//     path:'/',
//     element: <layout />,
//     children: [
//       // we have to add all our componeents in the children element
//       {
//         path:"",
//         element:<Home/>,
//       },
//       {
//         path:"",
//         element:<About/>,
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
       <Route path='contact' element={<Contact />} />
     <Route path='user/:userid' element={<User />} />
      <Route
      // the benefit of using loader is that as we hover the mouse over github it will start fetching the data from api and when we will click in github the data will be ready 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
