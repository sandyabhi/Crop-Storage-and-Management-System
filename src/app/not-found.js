import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl">Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
