
import './App.css';
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Root from './Pages/PageRoot/Root';
import ContactDeailt from './Pages/ContactDeailt';



const router = createBrowserRouter([
  {path:"/",
    element:<Root/>,
    errorElement:<Error/>,
    children:[
      {path:"/", element: <Home/>},
      {path:"/contact", element: <Contact/>},
      {path:"/contact/:id", element: <ContactDeailt/>},
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
