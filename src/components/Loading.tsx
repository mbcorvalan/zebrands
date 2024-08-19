import ClipLoader from "react-spinners/ClipLoader";

/**
 * A functional component that renders a loading spinner using the ClipLoader.
 *
 * @returns {JSX.Element} The rendered loading spinner component.
 */
export default function Loading(): JSX.Element {
  return (
    <ClipLoader
      color="#0079FF"
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
