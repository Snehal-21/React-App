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
import Mapping from './Components/Mapping';
import Props from './Components/Props';
import Dynamic from './Components/Dynamic';
import Memo from './Components/Memo';
import Callback from './Components/Callback';

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
    <Route exact path="/mapping" element={<Mapping array={[{image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8jVnuBNVTS9db7uf7-pjRUCEgSnqG4BjzPRqYk6auFy_aBtdXI2ci0zrt758zh8zT_fxs3bV4tcxh9uL2wGmoG_QlIu21gO5_U8x215Gxhb9EFen2Ibxg&usqp=CAE',name :'Product',price:500},{image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8jVnuBNVTS9db7uf7-pjRUCEgSnqG4BjzPRqYk6auFy_aBtdXI2ci0zrt758zh8zT_fxs3bV4tcxh9uL2wGmoG_QlIu21gO5_U8x215Gxhb9EFen2Ibxg&usqp=CAE',name :'Product',price:500},{image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8jVnuBNVTS9db7uf7-pjRUCEgSnqG4BjzPRqYk6auFy_aBtdXI2ci0zrt758zh8zT_fxs3bV4tcxh9uL2wGmoG_QlIu21gO5_U8x215Gxhb9EFen2Ibxg&usqp=CAE',name :'Product',price:500},{image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8jVnuBNVTS9db7uf7-pjRUCEgSnqG4BjzPRqYk6auFy_aBtdXI2ci0zrt758zh8zT_fxs3bV4tcxh9uL2wGmoG_QlIu21gO5_U8x215Gxhb9EFen2Ibxg&usqp=CAE',name :'Product',price:500},{image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8jVnuBNVTS9db7uf7-pjRUCEgSnqG4BjzPRqYk6auFy_aBtdXI2ci0zrt758zh8zT_fxs3bV4tcxh9uL2wGmoG_QlIu21gO5_U8x215Gxhb9EFen2Ibxg&usqp=CAE',name :'Product',price:500}]} />} />
    <Route excat path="/props" element={<Props />} />
    <Route exact path="/dynamic" element={<Dynamic />} />
    <Route exact path="/memo" element={<Memo />} />
    <Route exact path="/callback" element={<Callback />} />
   </Routes>
   </>
  );
}

export default App;
