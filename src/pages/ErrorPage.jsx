import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="main" role="main" aria-labelledby="error-title">
      <section className="error-page" role="alert" aria-live="assertive">
        <FontAwesomeIcon
          icon={faCircleExclamation}
          className="error-page__icon"
          aria-hidden="true"
        />
        <h2 id="error-title" className="error-page__title">
          Page Not Found
        </h2>
        <p className="error-page__description" aria-label="Error description">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="btn error-page__btn error-page__link"
          role="button"
          aria-label="Go back to the home page"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
