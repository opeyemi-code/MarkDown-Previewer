import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main
      className="px-4 lg:px-[5vw] flex justify-center items-center"
      role="main"
      aria-labelledby="error-title"
    >
      <section
        className="bg-white px-4 py-12 rounded-lg flex flex-col items-center gap-3 text-center shadow  md:w-87.5 lg:w-100 lg:px-8"
        role="alert"
        aria-live="assertive"
      >
        <FontAwesomeIcon
          icon={faCircleExclamation}
          className="text-4xl text-slate-300 bg-slate-100 px-6 py-7 rounded-full"
          aria-hidden="true"
        />
        <h2 className="text-2xl text-slate-900 font-semibold lg:text-3xl">
          Page Not Found
        </h2>
        <p
          className="text-[1rem] text-slate-500 mx-4 lg:text-lg"
          aria-label="Error description"
        >
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="bg-blue-600 text-slate-50 text-[1rem] p-3 w-full rounded-lg lg:text-lg"
          role="button"
          aria-label="Go back to the home page"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
