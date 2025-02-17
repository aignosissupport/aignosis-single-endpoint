import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Commnpdfpage from './Commnpdfpage';

const pdfData = [
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738767409455_page1.png',
        alttext:'report first page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738767504591_page2.png',
        alttext:'report second page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738768231265_page3.png',
        alttext:'report third page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738768279180_page4.png',
        alttext:'report four page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738768308524_page5.png',
        alttext:'report fifth page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738768377852_page6.png',
        alttext:'report six page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738768391375_page7.png',
        alttext:'report seven page',
    },
]


const SecondpdfData = [
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738768677082_page8.png',
        alttext:'report eight page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738768918579_page9.png',
        alttext:'report nine page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738768941181_page10.png',
        alttext:'report ten page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738768955924_page11.png',
        alttext:'report eleven page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738769196127_page12.png',
        alttext:'report tweleve page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738769245551_page13.png',
        alttext:'report thireteen page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738769259360_page14.png',
        alttext:'report  page 14',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738769273519_page15.png',
        alttext:'report page 15',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738769286119_page16.png',
        alttext:'report page 16',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738769299141_page17.png',
        alttext:'report page 17',
    },
]

const ComponentToPrint = React.forwardRef((props, ref) => (
    <div  id="pdf-container"  ref={ref}  className="p-5">
         {pdfData.map((item, index) => (
        <Commnpdfpage
        key={index}
        src={item.url}
        alttext={item.alttext}
        />
    ))}
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        {SecondpdfData.map((item, index) => (
        <Commnpdfpage
        key={index}
        src={item.url}
        alttext={item.alttext}
        />
    ))}
    </div>
));





const GeneratePDF = () => {
    const componentRef = useRef();  
    const generatePDF = async () => {
        const images = document.querySelectorAll(".pdf-image"); 
        if (!images.length) {
            console.error("No images found!");
            return;
        }
  
        const pdf = new jsPDF("p", "mm", "a4");
        const pageWidth = 210; 
        const pageHeight = 297; 
  
        for (let i = 0; i < images.length; i++) {
            const imgElement = images[i];
  
            try {
                const canvas = await html2canvas(imgElement, {
                    useCORS: true,
                    scale: 3, // High-quality rendering
                    backgroundColor: null,
                    width: imgElement.clientWidth, 
                    height: imgElement.clientHeight
                });
  
                const imgData = canvas.toDataURL("image/jpeg", 0.8); // 80% quality
  
                // 🛠 Force Full A4 Size
                if (i !== 0) pdf.addPage();
                pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, pageHeight, undefined, "FAST");
  
            } catch (error) {
                console.error("Error generating PDF page:", error);
            }
        }
  
        pdf.save("optimized_images.pdf");
    };
  
  
  
  
    


      
    return (
      <div className="text-center">
        <ComponentToPrint ref={componentRef} />
        <button className="mt-5 px-4 py-2 bg-blue-600 text-white rounded" onClick={generatePDF}>
          Generate PDF
        </button>
      </div>
    );
  };
  
  export default GeneratePDF;