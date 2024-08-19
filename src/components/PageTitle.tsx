/**
 * Interface representing the props for the PageTitle component.
 */
interface PageTitleProps {
  /**
   * The text to be displayed as the page title.
   */
  title_text: string;
}

/**
 * A functional component that renders a page title as an <h1> element.
 *
 * @param {PageTitleProps} props - The props for the component.
 * @param {string} props.title_text - The text to be displayed as the page title.
 * @returns {JSX.Element} The rendered page title component.
 */
const PageTitle: React.FC<PageTitleProps> = ({ title_text }) => {
  return (
    <h1 className="main_title">{title_text}</h1>
  );
};

export default PageTitle;
