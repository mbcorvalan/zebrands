import { FaUser } from "react-icons/fa";
import Toggle from './Toggle';
import { toggleSearchTerm } from '../redux/reducers/searchTermReducer';
import { RootState } from '../redux/store/store';

export default function FormSearch() {
  return (
    <form>
      <FaUser />
      <label>Search</label>
      <input></input>
      <Toggle
        selector={(state: RootState) => state.search.searchTerm}
        toggleAction={toggleSearchTerm}
        checkedValue="repository"
        name="searchTerm"
      />
    </form>
  );
}
