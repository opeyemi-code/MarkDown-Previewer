import React from "react";
import EditorToolbar from "../components/EditorToolbar";
import Editor from "../components/Editor";
import LivePreview from "../components/LivePreview";

export default function Home() {
  return (
    <>
      <main className="main">
        <EditorToolbar />
        <section className="section__flex">
          <Editor />
          <LivePreview />
        </section>
      </main>
    </>
  );
}
