import MainLayout from "../components/MainLayout";
import PageTitle from "../components/PageTitle";
import FormSearch from "../components/FormSearch";
import { HEADER_TITLE } from "../constants/text";

export default function Home() {
    return (
        <MainLayout>
            <div className="home__wrapper">
                <PageTitle title_text={HEADER_TITLE} />
                <FormSearch />
            </div>
        </MainLayout>
    );
}
