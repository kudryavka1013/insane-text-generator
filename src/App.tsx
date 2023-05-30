import React from "react";
import { CommonWords } from "./Components/CommonWords";
import { Editor } from "./Components/Editor";
import { HistoryList } from "./Components/HistoryList";
import { Title } from "./Components/Title";

function App() {
  return (
    <div className="p-10 h-screen bg-sky-200">
      <Title />
      <div className="flex">
        <Editor />
        <div>
          <CommonWords />
          <HistoryList />
        </div>
      </div>
    </div>
  );
}

export default App;
