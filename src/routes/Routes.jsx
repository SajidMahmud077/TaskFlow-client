import {createBrowserRouter,} from "react-router-dom";
import Main from '../Layout/Main'
import Login from '../page/Authentication/Login'
import Register from '../page/Authentication/Register'
import SideBar from '../Components/Sidebar/SideBar'




export const router = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[
    
      {
        path:'/',
        element:<Register/>
      },
      {
        path:'/login',
        element:<Login/>
      },
    {
      path:'/sidebar',
      element: 
        <SideBar/>
      
    }
    ]    
  },
  
])