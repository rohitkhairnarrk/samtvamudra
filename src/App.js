
import Home from './Components/Home';
import './App.css';
import Navbar from './Components/Navbar';
import Bottom from './Components/Bottom';
import Login from './Components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  return (
    <>
    <div className="content">
     
    <Router>
    <Navbar/>
      <Routes>
        
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      </Routes>
      <Bottom/>
    </Router>
    </div>
    
    </>
  );
}

export default App;
