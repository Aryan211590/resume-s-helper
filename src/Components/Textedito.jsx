// import React, { useEffect, useState } from "react";
// import { Editor } from "react-draft-wysiwyg";
// import { EditorState } from "draft-js";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// const Textedito = (props) => {
//     const [editorState, setEditorState] = useState(() =>
//         EditorState.createEmpty()
//     );
//     useEffect(() => {
//         console.log(editorState);
//     }, [editorState]);

//     const handlevalue = () => {
//         props.onChange(editorState)
//     }
//     return (
//         <div>
//             <h1>React Editors</h1>
//             <h2>Start editing to see some magic happen!</h2>
//             <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
//                 <Editor
//                     editorState={editorState}
//                     onEditorStateChange={setEditorState}
//                     onChange={handlevalue}
//                 />
//             </div>
//         </div>
//     )
// }

// export default Textedito;

import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useState } from "react";

export default function Textedito() {
  const [convertedText, setConvertedText] = useState("Some default content");
  return (
    <div>
      <ReactQuill
        theme='snow'
        value={convertedText}
        onChange={setConvertedText}
        style={{minHeight: '300px'}}
      />
    </div>
  );
}