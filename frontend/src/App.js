import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/home';
import SignIn from './Pages/signin';
import SignUp from './Pages/signup';
import Dashboard from './Pages/dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/signin" element = {<SignIn/>} />
        <Route path = "/signup" element = {<SignUp/>} />
        <Route path = "/dashboard" element = {<Dashboard/>} />
      </Routes>
    </Router>
  )
}

export default App;
