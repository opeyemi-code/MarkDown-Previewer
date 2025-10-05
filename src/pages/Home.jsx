import React, { useContext } from "react";
import EditorToolbar from "../components/EditorToolbar";
import Editor from "../components/Editor";
import LivePreview from "../components/LivePreview";
import DataContext from "../context/DataContext";

export default function Home() {
  const { handleSaveSuccess } = useContext(DataContext);

  return (
    <main className="main">
      <EditorToolbar onSave={handleSaveSuccess} /> {/* ✅ Pass function down */}
      <section className="section__flex">
        <Editor />
        <LivePreview />
      </section>
    </main>
  );
}
