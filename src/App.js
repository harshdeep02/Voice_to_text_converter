import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from 'react-use-clipboard';
import { useState } from 'react';
function App() {

  const startListening = ()=>{
    console.log("click")
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' }) }
    const[textCopy, setTextCopy] = useState()
    const[isCopied, setCopied] = useClipboard(textCopy)
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
    if (!browserSupportsSpeechRecognition) {
      return null
    }
  return (
    <>

      <div className="container">
        <h1>Voice to Text Converter</h1>
        {/* <br /> */}
        <p>A react hook that converts speech from the mic. to text and makes it available to your React component</p>
        <p>If you want to copy the text, Firstly click on text then copy button</p>
        <div className="main-content" onClick={()=>setTextCopy(transcript)}>
          {transcript}
          {/* <textarea name="textarea" id="text" cols="30" rows="10"></textarea> */}
        </div>
        <div className="btnStyle">
          <button onClick={setCopied}>{isCopied?'copied':'copy to clipboard'}</button>
          <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
          <button onClick={startListening}>Start Listening</button>
        </div>
      </div>
    </>
  );
}

export default App;
