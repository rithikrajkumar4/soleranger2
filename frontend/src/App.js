import './App.css';
import { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes, 
  Route,
} from 'react-router-dom' ;


const Home = lazy(() =>import('./Components/HomePage/Home'));

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
