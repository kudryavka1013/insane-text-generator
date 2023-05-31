import React, { useState } from "react";
import { CommonWords } from "./Components/CommonWords";
import { Editor } from "./Components/Editor";
import { HistoryList } from "./Components/HistoryList";
import { Title } from "./Components/Title";
import { Label, labels } from "./Config/types";

function App() {
  const [config, setConfig] = useState<Label>(labels[0])

  return (
    <div className="p-10 min-h-screen bg-sky-100">
      <Title />
      <div className="flex gap-4 max-w-screen-lg max-[995px]:flex-col">
        <div className="flex-[2]">
          <Editor config={config} setConfig={setConfig} />
        </div>
        <div className="flex-1 w-96 flex flex-col gap-4 max-[995px]:w-auto">
          <CommonWords />
          <HistoryList />
        </div>
      </div>
    </div>
  );
}

export default App;
