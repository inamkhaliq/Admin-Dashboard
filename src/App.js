import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn.js/SignIn';
import AdminDashboard from './Pages/AdminDashboard';
import Modal from './Components/Modal/Modal';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/Modal' element={<Modal/>}/>
      <Route path='/admin-Dashboard' element={<AdminDashboard/>}/>
      <Route path='/admin-Dashboard/:page' element={<AdminDashboard/>}/>
      <Route path='/admin-Dashboard/:page/:userid' element={<AdminDashboard/>}/>
     </Routes>
    </div>
  );
}

export default App;
