import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import QuestionnairePage from './pages/QuestionnairePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/questionnaire" replace />} />
          <Route path="/questionnaire" element={<QuestionnairePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
