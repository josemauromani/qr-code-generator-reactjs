import React, { useEffect, useRef } from "react";
import QRCode from "qrcode";

export default function QRCodeCanvas({ text }) {
  const canvasReference = useRef();
  useEffect(() => {
    QRCode.toCanvas(canvasReference.current, text, { width: 500 }, (error) => {
      console.log(error);
    });
  }, [text]);

  return (
    <div>
      <canvas ref={canvasReference} id="canvas"></canvas>
    </div>
  );
}
