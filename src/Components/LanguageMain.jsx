import React, { createRef } from 'react'
import Language from './Language';
import Languagetow from './Languagetow';
import Pdf from "react-to-pdf";

const LanguageMain = () => {

    const ref = createRef();

    const [languas, setlanguas] = React.useState([
        {
            text:"",
        },

    ]);

    const addlangua = text => {
        const newlanguas = [...languas, { text }];
        setlanguas(newlanguas);
    };

    const completelangua = index => {
        const newlanguas = [...languas];
        newlanguas[index].isCompleted = true;
        setlanguas(newlanguas);
    };

    const removelangua = index => {
        const newlanguas = [...languas];
        newlanguas.splice(index, 1);
        setlanguas(newlanguas);
    }

    return (
        <>
            <div ref={ref}>
                {languas.map((langua, index) => (
                    <Language
                        key={index}
                        index={index}
                        langua={langua}
                        completelangua={completelangua}
                        removelangua={removelangua}
                    />
                ))}

                <Languagetow addlangua={addlangua} />
            </div>

            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => (
                    <button onClick={toPdf}>
                        Download Resume
                    </button>
                )}
            </Pdf>
        </>
    )
}

export default LanguageMain