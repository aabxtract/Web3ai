import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import Login from './Login'
import SignUp from './SignUp'
import Dashboard from './Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
