import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectGamePlan from './views/SelectGamePlan';
import MatchConfigurationPage from './views/MatchConfigurationPage';
import ScoreboardPage from './views/ScoreboardPage';
import VictoryScreen from './views/VictoryScreen';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SelectGamePlan/>} />
          <Route path="/match-config" element={<MatchConfigurationPage/>}/>
          <Route path="/score-board" element={<ScoreboardPage/>}/>
          <Route path="/winner" element={<VictoryScreen/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
