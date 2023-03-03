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

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/admin' element={<Admin/>}></Route>
              <Route path='/admin/create-product' element={<CreateProduct/>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
