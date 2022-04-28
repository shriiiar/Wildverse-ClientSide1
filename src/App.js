import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Signup from './Components/Sign Up/Signup';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import useData from './Hooks/getDataHook';
import { createContext } from 'react';
import Cart from './Components/Cart/Cart';
import RequireAuth from '../src/Components/RequiredAuth/RequiredAuth'
import CheckOut from './Components/CheckOut/CheckOut';
import ErrorRoute from './Components/Error-Route/ErrorRoute';
import Footer from './Components/Footer/Footer';
import AboutMe from './Components/AboutMe/AboutMe';
import Blogs from './Components/Blogs/Blogs';
import ConfirmedOrder from './Components/ConfirmedOrder/ConfirmedOrder';
import Order from './Components/Order/Order';
export const allFunctions = createContext();

function App() {
  const [data] = useData(); // fetches data from the custom hook
  return (
    <div className=''>
      <Header></Header>
      <allFunctions.Provider value={[data]}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/checkout' element={<RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>}></Route>
          <Route path='/order' element={<RequireAuth>
            <Order></Order>
          </RequireAuth>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/orderConfirmed' element={<ConfirmedOrder></ConfirmedOrder>}></Route>
          <Route path='/about' element={<AboutMe></AboutMe>}></Route>
          <Route path='*' element={<ErrorRoute></ErrorRoute>}></Route>
        </Routes>
      </allFunctions.Provider>
      <Footer></Footer>
    </div >
  );
}

export default App;
