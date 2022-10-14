export const useGuardarQr = () => {
    const qelem = document.querySelector('#cont_qr canvas');
    const dlink = document.getElementById('lnk_desc');
    let imagen = qelem.toDataURL("image/png").replace("image/png", "image/octet-stream")
    dlink.setAttribute('href', imagen);
    dlink.setAttribute('download', 'Disfruta_tu_Codigo_Qr_Guapa.png');
    /*dlink.click();*/
}