import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectGamePlan from './views/SelectGamePlan';
import MatchConfigurationPage from './views/MatchConfigurationPage';
import ScoreboardPage from './views/ScoreboardPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SelectGamePlan/>} />
          <Route path="/match-config" element={<MatchConfigurationPage/>}/>
          <Route path="/score-board" element={<ScoreboardPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
