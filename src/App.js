// import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
// import AuthDetail from './components/auth/AuthDetail';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
    <Routes>      
      <Route path = "/" element={<SignIn/>}></Route>
      <Route path = "login" element= {<SignIn/>}></Route>
      <Route path = "register" element ={<SignUp/>}></Route>

    </Routes>
    </HashRouter>
  );
}

export default App;
