import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import { NOT_FOUND, BACK_HOME } from "../constants/text";
import { IoIosArrowRoundBack } from "react-icons/io";


export default function NotFound() {

  const navigate = useNavigate();
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
