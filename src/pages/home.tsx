import MainLayout from "../components/MainLayout";
import PageTitle from "../components/PageTitle";
import { HEADER_TITLE } from "../constants/text";

export default function Home() {
    return (
        <MainLayout>
            <div className="home__wrapper">
                <PageTitle title_text={HEADER_TITLE} />
            </div>
        </MainLayout>
    );
}
