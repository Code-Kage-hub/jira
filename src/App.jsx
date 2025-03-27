import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Authentication/Login'
import Signup from './Components/Authentication/Signup'
import ForgotPwd from './Components/Authentication/ForgotPwd'
import Dashboard from './Components/Home/Dashboard'
import AI from './Components/Mode/AI'
import Manual from './Components/Mode/Manual'

function App() {

  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/Dashboard" element = {<Dashboard/>}/>
        <Route path = "/sign-up" element = {<Signup/>}/>
        <Route path = "/forgot-password" element={<ForgotPwd/>}/>
        <Route path="/ai" element={<AI />} />
        <Route path="/manual" element={<Manual />} />
      </Routes>
    </Router>
  )
}

export default App
