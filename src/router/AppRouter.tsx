import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/home';



/**
 * Application router component that defines the route structure.
 * @returns {JSX.Element} The router component.
 */
export default function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


/*
   <Route path="*" element={<NotFound />} />
*/