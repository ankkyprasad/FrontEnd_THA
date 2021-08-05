import {useState} from "react";
import useCopyToClipboard from './useCopyToClipboard';
import './App.css';

function App() {
  const [isCopyData, setIsCopyData] = useCopyToClipboard();
  const [inputData, setInputData] = useState("");

  function clipboard(){
    setIsCopyData(inputData)
  }

  return (
    <div className="App">
      <input type="text" value={inputData} onChange={e=>setInputData(e.target.value)}/>
      <button onClick={clipboard}>{isCopyData ? `Saved to Clipboard` : `Copy`}</button>
    </div>
  );
}

export default App;
