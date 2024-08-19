import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import NotFound from '../pages/notFound';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/**
 * Application router component that defines the route structure.
 * @returns {JSX.Element} The router component.
 */
export default function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/zeBrands' element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
