import Toggle from './Toggle';
import { toggleTheme } from '../redux/reducers/themeReducer';
import { RootState } from '../redux/store/store';
import image127w from '../assets/WEB-ZEB-05-1-127x36.png';
import image300w from '../assets/WEB-ZEB-05-1-300x85.png';
import image768w from '../assets/WEB-ZEB-05-1-768x218.png';
import image1024w from '../assets/WEB-ZEB-05-1-1024x291.png';
import image1536w from '../assets/WEB-ZEB-05-1-1536x437.png';
import image1761w from '../assets/WEB-ZEB-05-1.png';
import { LOGO_ALT } from '../constants/text';

/**
 * A functional component that renders the navigation bar of the application.
 * It includes a responsive logo image and a theme toggle switch.
 *
 * @returns {JSX.Element} The rendered navbar component.
 */


export default function Navbar(): JSX.Element {
  return (
    <nav className="navbar">
      <img
        src={image127w}
        alt={LOGO_ALT}
        className="navbar__logo"
        loading="lazy"
        srcSet={`
        ${image1024w} 1024w,
        ${image300w} 300w,
        ${image768w} 768w,
        ${image1536w} 1536w,
        ${image127w} 127w,
        ${image1761w} 1761w
      `}
        sizes="(max-width: 1024px) 100vw, 1024px"
      />
      <Toggle
        selector={(state: RootState) => state.theme.theme}
        toggleAction={toggleTheme}
        checkedValue="dark"
        name="theme"
      />
    </nav>
  );
}
