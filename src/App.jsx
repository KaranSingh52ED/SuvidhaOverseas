import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import About from "./pages/about/About";
import Founder from './pages/founder/Founder';
import Causes from "./pages/causes/Causes";
import Upcoming from './pages/upcoming/Upcoming';
import Recent from './pages/events/Events';
import Gallery from './pages/gallery/Gallery';
import Contact from './pages/contact/Contact';

import Recent1 from './pages/event-blogs/first/Main';
import HomeMasterClass from "./pages/IELTS_masterclass/HomeMasterClass";
import HomeModule from "./pages/IELTS_Module/HomeModule";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/" element={<Upcoming />} />
        <Route path="/" element={<Recent />} />
        <Route path="/masterclass" element={<HomeMasterClass />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/module" element={<HomeModule />} />
        <Route path="/inauguration" element={<Recent1 />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

    </Router>
  );
};

export default App;
