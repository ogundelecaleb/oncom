import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';
import Contact from './contact';
import Donate from './donate';
import Events from './events';
import Stories from './stories';
import Team from './team';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/event" element={<Events />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
