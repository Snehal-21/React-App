// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Counter from './Components/Counter';
import Effect1 from './Components/Effect1';
import Effect2 from './Components/Effect2';
import Effect3 from './Components/Effect3';
import Effect4 from './Components/Effect4';
import MultipleProduct from './Components/MultipleProduct';
import SingleProduct from './Components/SingleProduct';

function App() {
  return (
   <>
   <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/login" element={<Login />}/>
    <Route exact path="/register" element={<Register />} />
    <Route exact path="/counter" element={<Counter/>}/>
    <Route exact path="/effect-1" element={<Effect1 />} />
    <Route exact path="/effect-2" element={<Effect2 />} />
    <Route exact path="/effect-3" element={<Effect3 />} />
    <Route exact path="/effect-4" element={<Effect4 />} />
    <Route exact path="/multipleProduct" element={<MultipleProduct /> } /> 
    <Route exact path="/singleProduct/:id" element={<SingleProduct /> } /> 
   </Routes>
   </>
  );
}

export default App;
