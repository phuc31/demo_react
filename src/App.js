// import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
// import AuthDetail from './components/auth/AuthDetail';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
    <HashRouter type="noslash">
      <Routes>
        <Route path="/" element={<SignIn/>}></Route>
        <Route path = "/login" element= {<SignIn/>}></Route>
        <Route path = "/register" element ={<SignUp/>}></Route>
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
