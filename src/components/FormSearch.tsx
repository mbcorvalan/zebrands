import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { FaUser, FaBox } from "react-icons/fa";
import Toggle from './Toggle';
import useFetchGitHubData from '../hooks/useFetchGitHubData';
import { toggleSearchTerm } from '../redux/reducers/searchTermReducer';
import { setQuery } from '../redux/reducers/queryReducer';
import { RootState, AppDispatch } from '../redux/store/store';
import useDebounce from "../hooks/useDebounce";

/**
 * A functional component that renders a search form for GitHub users or repositories.
 * It includes an input field with debounced search functionality and a toggle switch
 * to change between user and repository search modes.
 *
 * @returns {JSX.Element} The rendered search form component.
 */
export default function FormSearch(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const [inputValue, setInputValue] = useState('');

  // Debounce the search query to minimize unnecessary API calls
  const debouncedQuery = useDebounce(inputValue, 1000);

  // Fetch GitHub data based on the debounced query
  useFetchGitHubData(debouncedQuery);

  /**
   * Handles changes in the input field and updates the query state.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    dispatch(setQuery(value));
  };

  /**
   * Prevents the default form submission behavior.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submit event.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="search-form__wrapper">
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
        value={inputValue}
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
