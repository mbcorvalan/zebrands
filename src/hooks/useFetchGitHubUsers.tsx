import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGitHubUsers } from '../redux/reducers/fetchUsersReducer';
import { RootState, AppDispatch } from '../redux/store/store';

const useFetchGitHubUsers = (query: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.users
  );

  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  useEffect(() => {
    if (searchTerm === "user" && query) {
      dispatch(fetchGitHubUsers(query));
    }
  }, [dispatch, query, searchTerm]);

  return { data, isLoading, error };
};

export default useFetchGitHubUsers;
