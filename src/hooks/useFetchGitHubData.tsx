import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGitHubUsers, resetUsers } from '../redux/reducers/fetchUsersReducer';
import { fetchGitHubRepo, resetRepos } from '../redux/reducers/fetchRepoReducer';
import { RootState, AppDispatch } from '../redux/store/store';

const useFetchGitHubData = (query: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  useEffect(() => {
    if (query) {
      if (searchTerm === "user") {
        dispatch(fetchGitHubUsers(query));
      } else if (searchTerm === "repository") {
        dispatch(fetchGitHubRepo(query));
      }
    } else {
      if (searchTerm === "user") {
        dispatch(resetUsers());
      } else if (searchTerm === "repository") {
        dispatch(resetRepos());
      }
    }
  }, [dispatch, query, searchTerm]);
};

export default useFetchGitHubData;
