import { FaUser } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { useState } from "react";
import Toggle from './Toggle';
import useFetchGitHubUsers from '../hooks/useFetchGitHubUsers';
import { toggleSearchTerm } from '../redux/reducers/searchTermReducer';
import { RootState } from '../redux/store/store';
import { useSelector } from 'react-redux';
import useDebounce from "../hooks/useDebounce";

export default function FormSearch() {
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const [query, setQuery] = useState('');

  const debouncedQuery = useDebounce(query, 1000); // 500ms debounce delay

  useFetchGitHubUsers(debouncedQuery);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setQuery(value);
  };

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
        onChange={handleChange}
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
