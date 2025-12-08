import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { type JSX } from "react";

export default function About(): JSX.Element {
  return (
    <main className="px-4 lg:px-[5vw] flex justify-center" role="main">
      <section
        className="bg-white flex flex-col justify-center items-center gap-4 text-center py-12 px-4 rounded-lg shadow lg:py-16 md:w-[60%] lg:w-[40%] lg:mx-auto"
        aria-labelledby="about-title"
        aria-describedby="about-description"
      >
        <FontAwesomeIcon
          icon={faFileLines}
          className="text-3xl text-slate-100 bg-blue-600 p-5 rounded-2xl"
          aria-hidden="true"
        />
        <h2 className="text-slate-900 text-2xl font-semibold">
          Markdown Editor
        </h2>
        <p className="text-[1rem] text-slate-500 lg:w-87.5 leading-6.5 lg:text-lg">
          A simple and elegant markdown editor designed to help you write and
          format text with ease. Create beautiful documents using markdown
          syntax in a clean, distraction-free environment.
        </p>
      </section>
    </main>
  );
}
