import { FaUser } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import Toggle from './Toggle';
import { toggleSearchTerm } from '../redux/reducers/searchTermReducer';
import { RootState } from '../redux/store/store';
import { useSelector } from 'react-redux';


export default function FormSearch() {

  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  return (
    <form className="search-form__wrapper">
      <div className="search-form__icon-left" role="img" aria-label={searchTerm === "user" ? "User icon" : "Repository icon"}>
        {searchTerm === "user" ? <FaUser /> : <FaBox />}
      </div>
      <label className="search-form__label" htmlFor="searchInput">Search</label>
      <input
        type="text"
        id="searchInput"
        className="search-form__input"
        placeholder="Search..."
        aria-label="Search input"
      />
      <div className="search-form__toggle">
        <Toggle
          selector={(state: RootState) => state.search.searchTerm}
          toggleAction={toggleSearchTerm}
          checkedValue="repository"
          name="searchTerm"
        />
        <h2>{searchTerm === "user" ? "User" : "Repository"}</h2>
      </div>
    </form>
  );
}
