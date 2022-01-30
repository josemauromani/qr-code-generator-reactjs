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
      <p>Feito com &#9829; por José Mauro </p>
      <p><a target="_blank" href="https://www.linkedin.com/in/josemauromani/">Linkedin</a></p>
    </div>
  );
}

export default App;
