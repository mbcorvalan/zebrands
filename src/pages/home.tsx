import MainLayout from "../components/MainLayout";
import PageTitle from "../components/PageTitle";
import FormSearch from "../components/FormSearch";
import { HEADER_TITLE } from "../constants/text";
import DisplaySearch from "../components/DisplaySearch";

/**
 * A functional component that represents the Home page of the application.
 * It includes the main layout, page title, search form, and search results display.
 *
 * @component
 * @returns {JSX.Element} The rendered Home page component.
 */
export default function Home() {
    return (
        <MainLayout>
            <div className="home__wrapper">
                <PageTitle title_text={HEADER_TITLE} />
                <FormSearch />
                <DisplaySearch />
            </div>
        </MainLayout>
    );
}
