
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import ProtectedRoute from './routes/ProtectedRoute';
import Playground from './pages/Playground';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/login/" element={<Login/>} />
        <Route path="/register/" element={<Registration/>} />
        <Route path="/playground" element={<ProtectedRoute>
          <Playground />
        </ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
