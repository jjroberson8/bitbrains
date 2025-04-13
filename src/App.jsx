{/*import './App.css'*/}
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FeaturePage from './pages/Overview';
import Learnmore from './pages/Learnmore';
import Footer from './components/Footer';
import './styles/App.css'

function App() {

  return (
    <>
      <div className='App'>
        <Router>
          <Navbar/>
          <div id ="wrap-content">
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path="/overview" element={<FeaturePage />} />
            <Route path='/learnmore' exact element={<Learnmore/>}/>
          </Routes>
          </div>
          <Footer/>
        </Router>
      </div>
    </>
  )
}

export default App
