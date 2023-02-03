
import './App.css';
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Home from './Pages/Home';
import Error from './Pages/Error';
import Root from './Pages/PageRoot/Root';
import Products from './Pages/Products';
import FavouriteContext from './Contexts/FavouritesContext';



const router = createBrowserRouter([
  {path:"/",
    element:<Root/>,
    errorElement:<Error/>,
    children:[
      {path:"/", element: <Home/>},
      {path:"/products/:id", element: <Products/>}
  
    ]
  }
  
])

function App() {
  return (
    <>
    <FavouriteContext>
      <RouterProvider router={router}/>
    </FavouriteContext>
    </>
  );
}

export default App;
