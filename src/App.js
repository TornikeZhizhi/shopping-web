
import './App.css';
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Home from './Pages/Home';
import Error from './Pages/Error';
import Root from './Pages/PageRoot/Root';
import Products from './Pages/Products';
import FavouriteContext from './Contexts/FavouritesContext';
import Search from './Pages/Search';



const router = createBrowserRouter([
  {path:"/",
    element:<Root/>,
    errorElement:<Error/>,
    children:[
      {path:"/", element: <Home/>},
      {path:"/products/:id", element: <Products/>},
      {path:"/search", element: <Search/>}
  
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
