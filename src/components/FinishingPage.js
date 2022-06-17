import {PDFDocument,StandardFonts,rgb} from 'pdf-lib'

import {React,useEffect} from 'react'

async function createPdf(source) {
  const pdfDoc = await PDFDocument.load(source);
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

  const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  document.getElementById('pdf').src = pdfDataUri;
}


function FinishingPage() {
    useEffect(() => {
        createPdf(charPage);
      }, []);
  return (
    <div>
        <iframe id="pdf" style={{width:"100%", height:"100%"}}></iframe>
    </div>
  )
}

export default FinishingPage