import './App.css';
import { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes, 
  Route,
} from 'react-router-dom' ;

const Home = lazy(() =>import('./Components/HomePage/Home'));
const Login = lazy(() =>import('./Components/Login/Login'));
const Register = lazy(() =>import('./Components/Register/Register'));
const Admin = lazy(() => import('./Components/Admin/Admin'))
const CreateProduct = lazy(() => import('./Components/Admin/Create/CreateProduct'))
const Loader = lazy(() => import('./Components/Loader/loader'))
const ProductDetail = lazy(()=>import('./Components/ProductDetails/productDeatail.js'))
const Construction = lazy(()=>import('./Components/Construction/Construction'))
const Policies = lazy(()=>import('./Components/Policies/Policies'))
const Shipping = lazy(()=>import('./Components/Shipping Page/ShippingPage'))
const User = lazy(()=>import('./Components/User/User'))
const Checkout = lazy(()=>import('./Components/Checkout/Checkout'))

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Suspense fallback={<Loader/>}>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
               <Route path='/login' element={<Login/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/admin' element={<Admin/>}></Route>
              <Route path='/admin/create-product' element={<CreateProduct/>}></Route>
              <Route path='/product' element={<CreateProduct/>}></Route>
              <Route path='/product/:id' element={<ProductDetail/>}></Route>
              <Route path='/user' element={<User/>}></Route>
              <Route path='/policy' element={<Policies/>}></Route>
              <Route path='/shipping' element={<Shipping/>}></Route>
              <Route path='/checkout' element={<Checkout/>}></Route>
              <Route path='/:random' element={<Construction/>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
