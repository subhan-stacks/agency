import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Packages from './pages/Packages.jsx';
import Team from './pages/Team.jsx';
import Contact from './pages/Contact.jsx';
import Terms from './pages/Terms.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Blog from './pages/Blog.jsx';
import Admin from './pages/Admin.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/packages" element={<Packages />} /> */}
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
