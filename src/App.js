// import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetail from './components/auth/AuthDetail';

function App() {
  return (
    <div className="App">
      <SignIn/>
      <SignUp/>
      <AuthDetail/>
    </div>
  );
}

export default App;
