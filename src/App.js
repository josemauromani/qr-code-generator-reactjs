import { useState } from "react";
import QRCodeCanvas from "./QRCodeCanvas";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <input
        value={text}
        onChange={(element) => {
          setText(element.target.value);
        }}
      ></input>
      <QRCodeCanvas text={text}></QRCodeCanvas>
    </div>
  );
}

export default App;
