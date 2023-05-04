
import './App.css';
import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import Home from './pages';
import SigninPage from './pages/Signin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/Signin" element={<SigninPage/>} exact/>
      </Routes>
       
    </BrowserRouter>
  );
}

export default App;
