import logo from './logo.svg';
import './App.css';
import Header from './componemts/Header/Header';
import Shop from './componemts/Shop/Shop';
import Orders from './componemts/Orders/Orders'
import Inventory from './componemts/Inventory/Inventory'
import About from './componemts/About/About'
import { Route, Routes } from 'react-router-dom';
import Login from './componemts/Login/Login';
import SignUp from './componemts/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        {/* <Route path='/' element={<HomePage></HomePage>}></Route> */}
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
