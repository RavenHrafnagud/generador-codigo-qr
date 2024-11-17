import React, { useState, useRef, useCallback } from 'react';
import { QRCodeSVG, QRCodeCanvas } from "qrcode.react";
import '../Styles/Style.css';
import Logo from '../Img/Logo.jpg';
import DescargarImg from '../Img/descargar.jpg';


function Main() {

    const [value, setValue] = useState('https://eltarotcomoguia.com/significados-resumidos/');
    const [size, setSize] = useState(480);
    const [fgColor, setFgColor] = useState('#000000');
    const [bgColor, setBgColor] = useState('#ffffff');
    /* const [level, setLevel] = useState('H'); */
    const level = "H";
    /* const [marginSize, setMarginSize] = useState(0); */
    const marginSize = 0;
    const [includeImage, setIncludeImage] = useState(true);
    const [imageH, setImageH] = useState((size / 2));
    const [imageW, setImageW] = useState((size / 2));
    /* const [imageX, setImageX] = useState(0); */
    const imageX = 0;
    /* const [imageY, setImageY] = useState(0); */
    const imageY = 0;
    const [imageSrc, setImageSrc] = useState('https://eltarotcomoguia.com/wp-content/uploads/2022/08/corazon-300x295.png');
    /* const [imageExcavate, setImageExcavate] = useState(false); */
    const imageExcavate = false;
    /* const [centerImage, setCenterImage] = useState(true); */
    const centerImage = true;

    const renderProps = {
        value,
        size,
        fgColor,
        bgColor,
        level,
        marginSize,
        imageSettings: includeImage
            ? {
                src: imageSrc,
                height: imageH,
                width: imageW,
                x: centerImage ? undefined : imageX,
                y: centerImage ? undefined : imageY,
                excavate: imageExcavate,
            }
            : undefined,
    };

    const svgRef = useRef();

    function GuardarQr(data, filename) {
        const objectUrl = URL.createObjectURL(data);
        const link = document.createElement("a");
        link.href = objectUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
    }

    const svgBoton = useCallback(() => {
        const content = svgRef.current.children[0].innerHTML;
        const fileURI = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" height="${size}" width="${size}" viewBox="0 0 41 41"> ${content} </svg>`;
        const data = new Blob([fileURI], { type: "image/svg+xml" });

        GuardarQr(data, `Disfruta_tu_Codigo_Qr_Guapa.svg`);
    }, []);


    return (
        <main>
            <div className="container-fluid bg-secondary p-4 text-center text-white">
                <h2>Generador de Codigo Qr para Val ^-^</h2>
                <img src={Logo} height="160px" className="rounded-circle border border-light mt-3" alt='' />
            </div>
            <div className="container p-2">
                <div className="mt-3 p-2">
                    <div className="row">
                        <div className="col-md-5">
                            <h5>Capture un Texto</h5>
                            <hr />
                            <form enctype="multipart/form-data">
                                <div className="form-floating">
                                    <input type="text" id="aqr" placeholder="" className="form-control" onChange={(e) => setValue(e.target.value)} value={value}/>
                                    <label>Texto a convertir</label>
                                </div>
                                <div className="form-floating">
                                    <input type="number" id="size" placeholder="" className="form-control" onChange={(e) => { setSize(parseInt(e.target.value, 10) || 0); setImageH(parseInt(e.target.value / 2, 10) || 0); setImageW(parseInt(e.target.value / 2, 10) || 0) }} value={size} />
                                    <label>Tamaño</label>
                                </div>
                                <div className="form-floating">
                                    <input type="color" id="colorBg" placeholder="" className="form-control" onChange={(e) => setBgColor(e.target.value)} value={bgColor} />
                                    <label>Color de Fondo</label>
                                </div>
                                <div className="form-floating">
                                    <input type="color" id="colorFr" placeholder="" className="form-control" onChange={(e) => setFgColor(e.target.value)} value={fgColor} />
                                    <label>Color de Frente</label>
                                </div>
                                <label>Incluir Imagen</label>
                                <div className="form-floating">
                                    <input type="checkbox" id="verificadorImagen" placeholder="" className="" checked={includeImage} onChange={(e) => setIncludeImage(e.target.checked)} />
                                </div>
                                <fieldset disabled={!includeImage}>
                                    <div className="form-floating">
                                        <input type="text" id="aqr" placeholder="" className="form-control" onChange={(e) => setImageSrc(e.target.value)} value={imageSrc} />
                                        <label>Url de Imagen</label>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div className="col-md-6 p-2 m-1 text-center border border-secundary">
                            <a id="lnk_desc" onClick={svgBoton} title="Click para descargar en formato SVG">
                                <div className="icono_derecha">
                                    <img src={DescargarImg} height="40px" alt='' />
                                </div>
                            </a>
                            <div id="titulo" className="fs-5 text-start">
                                Texto en Codigo Qr
                            </div>
                            <hr />
                            <div id="titulo2" className="fs-5 text-start">
                                Codigo Qr formato SVG
                            </div>
                            <div id="cont_qrSVG" className="p-2 justify-content-center align-items-center text-center border" ref={svgRef}>
                                <QRCodeSVG {...renderProps} />
                            </div>
                            <hr />
                            <div id="titulo3" className="fs-5 text-start">
                                Codigo Qr formato Canvas
                            </div>
                            <div id="cont_qrCANV" className="p-2 justify-content-center align-items-center text-center border">
                                <QRCodeCanvas {...renderProps} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
