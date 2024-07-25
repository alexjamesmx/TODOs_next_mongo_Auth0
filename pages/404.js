import Link from "next/link";
const fallback = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>

      {/* return to home page */}
      <Link href="/">
        <a>Go back to home page</a>
      </Link>
    </div>
  );
};
export default fallback;
