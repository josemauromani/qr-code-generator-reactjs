import { useState } from "react";
import QRCodeCanvas from "./QRCodeCanvas";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <p>Digite uma URL para gerar o QRCode</p>
      <input
        value={text}
        onChange={(element) => {
          setText(element.target.value);
        }}
      ></input>
      <QRCodeCanvas text={text}></QRCodeCanvas>
      <p>Feito por José Mauro <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/josemauromani/">Linkedin</a></p>
    </div>
  );
}

export default App;
