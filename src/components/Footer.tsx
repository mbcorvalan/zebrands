import { IoHeart } from "react-icons/io5";

/**
 * A functional component that renders the footer section of the application.
 * Displays a "Made with love" message with a heart icon.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
export default function Footer(): JSX.Element {
  return (
    <div className="footer">
      Made with <IoHeart /> B.C.A
    </div>
  );
}
