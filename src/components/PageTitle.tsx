interface PageTitleProps {
  title_text: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title_text }) => {
  return (
    <h1 className="main_title">{title_text}</h1>
  );
};

export default PageTitle;


