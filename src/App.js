
import './App.css';
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Home from './Pages/Home';
import Error from './Pages/Error';
import Root from './Pages/PageRoot/Root';
import Products from './Pages/Products';
import FavouriteContext from './Contexts/FavouritesContext';
import Search from './Pages/Search';
import ProductsInner from './Pages/ProductsInner';
import CartContext from './Contexts/CartContext';
import Checkout from './Pages/Checkout';
import AllProducts from './Pages/AllProducts';
import Favourite from './Pages/Favourite';


const router = createBrowserRouter([
  {path:"/",
    element:<Root/>,
    errorElement:<Error/>,
    children:[
      {path:"/", element: <Home/>},
      {path:"/all-products", element: <AllProducts/>},
      {path:"/products/:id", element: <Products/>},
      {path:"/productsInner/:id", element: <ProductsInner/>},
      {path:"/search", element: <Search/>},
      {path:"/checkout", element: <Checkout/>},
      {path:"/favourites", element: <Favourite/>},
  
    ]
  }
  
])

function App() {
  return (
    <>
    <CartContext>
      <FavouriteContext>
        <RouterProvider router={router}/>
      </FavouriteContext>
    </CartContext>
    </>
  );
}

export default App;
