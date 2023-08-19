// import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
// import AuthDetail from './components/auth/AuthDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
    <BrowserRouter basename="/demo_react">
      <Routes>
        <Route path="/demo_react" exact element={<SignIn/>}></Route>
        <Route path = "/login" element= {<SignIn/>}></Route>
        <Route path = "/register" element ={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );

}

export default App;
