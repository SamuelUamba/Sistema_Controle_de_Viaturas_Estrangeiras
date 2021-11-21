
import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './Components/Header'
import Add_vehicle from './Actions/Guest/Add_vehicle';
import Update_Data_vehicle from './Actions/Guest/Update_Data_vehicle';
import Register from './Actions/Admin/Register_user';
import Footer from './Components/Footer'
import Login from './Actions/Guest/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
         <Route path="login" element={<Login />} />
         <Route path="register" element={<Register />} />
         <Route path="add_vehicle" element={<Add_vehicle />} />
         <Route path="update_Data_vehicle" element={<Update_Data_vehicle />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
