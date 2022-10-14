import React from 'react';
import '../Styles/Style.css';
import { useGenerarQr } from '../Hooks/useGenerarQr';
import { useGuardarQr } from '../Hooks/useGuardarQr';
import { useLimpiarQr } from '../Hooks/useLimpiarQr';
import Logo from '../Img/Logo.jpg';
import ConvertirImg from '../Img/convertir.png';
import DescargarImg from '../Img/descargar.jpg';
import LimpiarImg from '../Img/limpiar.png';

function Main() {
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
                            <form>
                                <div className="form-floating">
                                    <input type="text" id="aqr" placeholder="" className="form-control" />
                                    <label>Texto a convertir</label>
                                </div>
                                <div className="mt-3 p-3">
                                    <button type="button" className="btn btn-outline-primary m-2" onClick={useGenerarQr}>
                                        <img src={ConvertirImg} height="35px" alt='' />
                                        <br />
                                        Convertir
                                    </button>
                                    <button type='reset' className="btn btn-outline-danger m-2" onClick={useLimpiarQr}>
                                        <img src={LimpiarImg} height="35px" alt='' />
                                        <br />
                                        Limpiar
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 p-2 m-1 text-center border border-secundary">
                            <a id="lnk_desc" onClick={useGuardarQr} title="Click para descargar la imagen">
                                <div className="icono_derecha">
                                    <img src={DescargarImg} height="40px" alt='' />
                                </div>
                            </a>
                            <div id="titulo" className="fs-5 text-start">
                                Texto en Codigo Qr
                            </div>
                            <hr />
                            <div id="cont_qr" className="p-2 justify-content-center align-items-center text-center border">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
