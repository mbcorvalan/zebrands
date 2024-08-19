import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import { NOT_FOUND, BACK_HOME } from "../constants/text";
import { IoIosArrowRoundBack } from "react-icons/io";

/**
 * A functional component that renders the NotFound page.
 * This page is displayed when the user navigates to a route that does not exist.
 * It includes a title and a button to navigate back to the home page.
 *
 * @component
 * @returns {JSX.Element} The rendered NotFound page component.
 */
export default function NotFound() {

  const navigate = useNavigate();

  /**
   * Handles the click event on the button, navigating the user back to the home page.
   */
  const handleClick = () => {
    navigate(`/`);
  };

  return (
    <div className="notFound__wrapper">
      <PageTitle title_text={NOT_FOUND} />
      <Button label={BACK_HOME} onClick={handleClick} icon={<IoIosArrowRoundBack />} />
    </div>
  );
}
