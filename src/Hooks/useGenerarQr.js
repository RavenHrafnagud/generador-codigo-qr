
export const useGenerarQr = () => {
    if (document.getElementById('aqr').value == "" || document.getElementById('cont_qr').childNodes.length > 1) {

    } else {
        let qrcode = new QRCode("cont_qr", {
            text: document.getElementById('aqr').value,
            width: 480,
            height: 480,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
}