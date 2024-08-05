import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Sport from './Catagories/Sports'; // Make sure the file name matches

function Base() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Base />} path='/'>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/:category' element={<Sport />} /> {/* Dynamic route for categories */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
