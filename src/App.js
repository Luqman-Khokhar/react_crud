import React, { useEffect, useRef, useState } from "react";

function App() {
  const lessonLink = "https://storage.googleapis.com/828786350200-europe-west1-blueprint-config/lesson/4/html/index.html";
  const iframeRef = useRef(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);
 
  // useEffect(() => {
  //   const handleIframeLoad = () => {
  //     if (iframeRef.current) {
  //       console.log("iframeRef.current ===>",iframeRef.current);
  //       // const button = iframeRef.current.contentWindow.document.getElementById("clickMeButton");

  //       // if (button) {
  //       //   console.log("Button found in iframe!");

  //       //   // Add event listener to the button inside the iframe
  //       //   button.addEventListener("click", handleButtonClick);
  //       // }
  //     }
  //   };

  //   // const handleButtonClick = () => {
  //   //   console.log("Button clicked inside iframe!");

  //   //   // Disable button and change color
  //   //   if (iframeRef.current) {
  //   //     const button = iframeRef.current.contentWindow.document.getElementById("clickMeButton");
  //   //     if (button) {
  //   //       button.disabled = true;
  //   //       button.style.backgroundColor = "gray";
  //   //       button.textContent = "Disabled";
  //   //     }
  //   //   }
  //   // };

  //   // Add an event listener for iframe load to access the content
  //   // iframeRef.current?.addEventListener("load", handleIframeLoad);

  //   return () => {
  //     // Cleanup event listener
  //     // iframeRef.current?.removeEventListener("load", handleIframeLoad);
  //   };
  // }, []);


  // useEffect(() => {
  //   console.log("effect rendered")
  //   const handleIframeLoad = () => {
  //     if (iframeRef.current) {
  //       const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
  //       if (iframeDoc) {
  //         const allElements = iframeDoc.querySelectorAll("*");
  //         console.log("All elements inside iframe:", allElements);
  //       }
  //     }
  //   };
  //   console.log("effect rendered 2")
  //   iframeRef.current?.addEventListener("load", handleIframeLoad);

  //   return () => {
  //     iframeRef.current?.removeEventListener("load", handleIframeLoad);
  //   };
  // }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2 id="lessonButton">Lesson Viewer</h2>
      <iframe
        ref={iframeRef}
        src={lessonLink}
        width="100%"
        height="500px"
        title="Lesson"
        style={{ border: "1px solid #ccc", marginTop: "10px" }}
      ></iframe>
    </div>
  );
}

export default App;
