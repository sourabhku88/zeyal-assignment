import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Home from "./components/Home";
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;