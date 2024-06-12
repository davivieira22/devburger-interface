import {createBrowserRouter}from 'react-router-dom';
import {Login} from '../containers/login';
import {Cadastro} from '../containers/Cadastro';
// import {Home}from '../containers/Home';

export const router = createBrowserRouter([

     {
        path:'/login',

        element:<Login/>,

    },
        
            {
                path:'/cadastro',
        
                element:<Cadastro/>,
        
            },
            
            
         
            // {
            //     path:'/',
        
            //     element:<Home/>,
        
            // }
        
  
 


]);