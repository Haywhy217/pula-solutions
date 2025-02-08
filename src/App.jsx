
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import HistoryPage from './Pages/HistoryPage';
import TechnologyPage from './Pages/Technology';
import LocationPage from './Pages/LocationPage';
import TeamPage from './Pages/TeamPage';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route  path='/history' element={<HistoryPage/>}/>
        <Route path='/technology' element={<TechnologyPage/>}/>
        <Route path='/location' element={<LocationPage/>}/>
        <Route path='/team' element={<TeamPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
