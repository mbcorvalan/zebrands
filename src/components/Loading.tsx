import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <ClipLoader
      color="#0079FF"
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
