{/*import './App.css'*/}
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FeaturePage from './pages/Overview';
import Learnmore from './pages/Learnmore';
import Quiz from './pages/Quiz';
import Showcase from './pages/Showcase';
import Overview from './pages/Overview';
import Footer from './components/Footer';
import './styles/App.css'

function App() {

  return (
    <>
      <div className='App'>
        <Router>
          <Navbar/>
          <div className='wrap-content'>
            <Routes>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/overview' exact element={<Overview/>}/>
              <Route path='/showcase' exact element={<Showcase/>}/>
              <Route path='/quiz' exact element={<Quiz/>}/>
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
