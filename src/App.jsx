{/*import './App.css'*/}
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Learnmore from './pages/Learnmore';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className='App'>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/learnmore' exact element={<Learnmore/>}/>
          </Routes>
          <Footer/>
        </Router>
      </div>
    </>
  )
}

export default App
