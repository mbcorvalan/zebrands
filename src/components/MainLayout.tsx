/**
 * Interface representing the props for the MainLayout component.
 */
interface MainLayoutProps {
  /**
   * The child components to be rendered inside the main layout.
   */
  children: React.ReactNode;
}

/**
 * A functional component that serves as the main layout of the application.
 * It wraps its children inside a <main> element.
 *
 * @param {MainLayoutProps} props - The props for the component.
 * @param {React.ReactNode} props.children - The child components to be rendered.
 * @returns {JSX.Element} The rendered main layout component.
 */
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
