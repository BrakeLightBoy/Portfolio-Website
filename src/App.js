import { BrowserRouter, Route, Routes } from "react-router-dom"; 

import HomePage from './routes/HomePage';
import Projects from './routes/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
