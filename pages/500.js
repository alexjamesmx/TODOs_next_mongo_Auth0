import Link from "next/link";
const fallback = () => {
  return (
    <div>
      <h1>500 - Server Error</h1>

      {/* return to home page */}
      <Link href="/">
        <a>Go back to home page</a>
      </Link>
    </div>
  );
};
export default fallback;
