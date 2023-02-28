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

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
