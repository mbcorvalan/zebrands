import { FaUser } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { useState } from "react";
import Toggle from './Toggle';
import useFetchGitHubData from '../hooks/useFetchGitHubData';
import { toggleSearchTerm } from '../redux/reducers/searchTermReducer';
import { setQuery } from '../redux/reducers/queryReducer';
import { RootState, AppDispatch } from '../redux/store/store';
import { useSelector, useDispatch } from 'react-redux';
import useDebounce from "../hooks/useDebounce";

export default function FormSearch() {
  const dispatch = useDispatch<AppDispatch>();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const [inputValue, setInputValue] = useState('');

  const debouncedQuery = useDebounce(inputValue, 1000); // 1000ms debounce delay

  useFetchGitHubData(debouncedQuery);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    dispatch(setQuery(value));
  };

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
