import React, { useContext } from "react";
import EditorToolbar from "../components/EditorToolbar";
import Editor from "../components/Editor";
import LivePreview from "../components/LivePreview";
import DataContext from "../context/DataContext";

export default function Home() {
  const { handleSaveSuccess } = useContext(DataContext);

  return (
    <main className="main px-4 pt-14 pb-8 lg:pb-0 lg:px-[5vw]" role="main">
      <EditorToolbar onSave={handleSaveSuccess} /> {/*Pass function down */}
      <section className="section__flex flex flex-col lg:flex-row lg:gap-5 lg:my-12">
        <Editor />
        <LivePreview />
      </section>
    </main>
  );
}
