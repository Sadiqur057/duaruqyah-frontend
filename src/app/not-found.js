import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative px-4">
      <div className="text-center z-10">
        <h1
          className="text-[180px] leading-none font-bold relative text-primary/20 text-shadow mb-3"
        >
          404
        </h1>
        <h2 className="font-semibold text-[36px] text-primary mb-0">
          SUBHAN ALLAH
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold">
          Page Not Found
        </h3>
        <p className="max-w-md text-light mx-auto my-3">
          We&apos;re sorry, the page you requested could not be found. Please go
          back to the Homepage
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-white space-x-2"
        >
          <svg
            className="w-5 h-5 rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
