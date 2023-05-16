import "./App.css";
import { useState } from "react";

import data from "./data/folderData";
import Folder from "./components/Folder";

function App() {
  const [explorerData, setExplorerData] = useState(data);
  return (
    <div className="App">
      <Folder explorer={explorerData}/>
    </div>
  );
}

export default App;
