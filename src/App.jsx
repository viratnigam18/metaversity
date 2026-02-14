import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FestPopup from './components/FestPopup';
import Home from './pages/Home';
import Event from './pages/Event';
import About from './pages/About';
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import JoinUs from './pages/JoinUs';
import Gallery from './pages/Gallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FestPopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/join-us" element={<JoinUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
