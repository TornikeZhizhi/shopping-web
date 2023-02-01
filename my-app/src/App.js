
import './App.css';
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Error from './components/Pages/Error';
import Root from './components/Pages/PageRoot/Root';



const router = createBrowserRouter([
  {path:"/",
    element:<Root/>,
    errorElement:<Error/>,
    children:[
      {path:"/", element: <Home/>},
      {path:"/contact", element: <Contact/>},
    ]
  }
  
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
