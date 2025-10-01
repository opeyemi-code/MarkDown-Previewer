import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="main">
      <div className="error-page">
        <FontAwesomeIcon
          icon={faCircleExclamation}
          className="error-page__icon"
        />
        <h2 className="error-page__title">Page Not Found</h2>
        <p className="error-page__description">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button className="btn error-page__btn" type="button">
          <Link to="/" className="error-page__link">
            Back to home
          </Link>
        </button>
      </div>
    </main>
  );
}
