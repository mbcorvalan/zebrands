import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import Loading from './Loading';
import DisplayItemUser from './DisplayItemUser';
import DisplayItemRepo from './DisplayItemRepo';

/**
 * A functional component that displays search results for users or repositories
 * based on the search term. It handles loading states, errors, and displaying
 * the appropriate content.
 *
 * @returns {JSX.Element} The rendered component displaying search results.
 */
export default function DisplaySearch(): JSX.Element {
  const { dataUsers, isLoadingUsers, errorUsers } = useSelector(
    (state: RootState) => state.users
  );

  const { dataRepo, isLoadingRepo, errorRepo } = useSelector(
    (state: RootState) => state.repos
  );

  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const query = useSelector((state: RootState) => state.query.query);

  /**
   * Renders the appropriate content based on the search term and data states.
   *
   * @returns {JSX.Element} The content to be displayed.
   */
  const renderContent = (): JSX.Element => {
    if (searchTerm === 'user') {
      if (isLoadingUsers) {
        return <div className="search-display__loading"><Loading /></div>;
      }

      if (errorUsers) {
        return <h3 className="search-display__text-msg--error">Data not found</h3>;
      }

      if (query !== '' && dataUsers.length === 0) {
        return <h3 className="search-display__text-msg--error">Data not found</h3>;
      }

      if (dataUsers.length === 0) {
        return (
          <h3 className="search-display__text-msg">
            Search by User
          </h3>
        );
      }

      return (
        <ul>
          {dataUsers.map((item) => (
            <DisplayItemUser key={item.id} imgItem={item.avatar_url} name={item.login} urlLink={item.html_url} />
          ))}
        </ul>
      );
    } else {
      if (isLoadingRepo) {
        return <div className="search-display__loading"><Loading /></div>;
      }

      if (errorRepo) {
        return <h3 className="search-display__text-msg--error">Data not found</h3>;
      }

      if (query !== '' && dataRepo.length === 0) {
        return <h3 className="search-display__text-msg--error">Data not found</h3>;
      }

      if (dataRepo.length === 0) {
        return (
          <h3 className="search-display__text-msg">
            Search by Repository
          </h3>
        );
      }

      return (
        <ul>
          {dataRepo.map((item) => (
            <DisplayItemRepo key={item.id} imgItem={item.owner.avatar_url} name={item.name} urlLink={item.owner.html_url} />
          ))}
        </ul>
      );
    }
  };

  return <div className="search-display__wrapper">{renderContent()}</div>;
}
