import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import About from './components/About';
function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert />

          <Routes>
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/logout' element={<Logout />} />
          </Routes>
        </Router>
      </NoteState>
      {/* <Practice /> */}
    </>
  );
}

export default App;
