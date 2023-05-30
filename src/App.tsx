import React from "react";
import { CommonWords } from "./Components/CommonWords";
import { Editor } from "./Components/Editor";
import { HistoryList } from "./Components/HistoryList";
import { Title } from "./Components/Title";

function App() {
  return (
    <div className="p-10 min-h-screen bg-sky-100">
      <Title />
      <div className="flex gap-4 max-w-screen-lg max-[995px]:flex-col">
        <div className="flex-1">
          <Editor/>
        </div>
        <div className="w-96 flex flex-col gap-4 max-[995px]:w-auto">
          <CommonWords />
          <HistoryList />
        </div>
      </div>
    </div>
  );
}

export default App;
