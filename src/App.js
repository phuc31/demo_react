// import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
// import AuthDetail from './components/auth/AuthDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/">
        <Route index element={<SignIn/>}></Route>
        <Route path = "login" element= {<SignIn/>}></Route>
        <Route path = "register" element ={<SignUp/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
