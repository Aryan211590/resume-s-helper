import React from 'react'
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

const Tabsss = () => {

    const container = React.useRef(null);
    const pdfExportComponent = React.useRef(null);

    // const exportPDFWithMethod = () => {
    //     let element = container.current || document.body;
    //     savePDF(element, {
    //         paperSize: "auto",
    //         margin: 40,
    //         fileName: `Report for ${new Date().getFullYear()}`,
    //     });
    // };

    const exportPDFWithComponent = () => {
        if (pdfExportComponent.current) {
            pdfExportComponent.current.save();
        }
    };

    return (
        <div>
            <div>
                {/* <div className="example-config"> */}
                    <button
                        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                        onClick={exportPDFWithComponent}
                    >
                        Export with component
                    </button>
                    {/* &nbsp;
                    <button
                        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                        onClick={exportPDFWithMethod}
                    >
                        Export with method
                    </button> */}
                {/* </div> */}
                {/* <div className="border rounded p-2"> */}
                    <PDFExport
                        ref={pdfExportComponent}
                        paperSize="auto"
                        margin={40}
                        fileName={`Report for ${new Date().getFullYear()}`}
                        author="KendoReact Team"
                    >
                        {/* <div ref={container}> */}
                           <h1>this is me Pardeep Verma</h1>
                            <div className="ram">
                                f;rpogjdsdsddirfjka
                            </div>
                        {/* </div> */}
                    </PDFExport>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Tabsss