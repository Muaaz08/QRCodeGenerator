const qrDOM = document.getElementById('qrname');
const qrcode = document.getElementById("qrcode");
let qrvalue = '';

let makeQRcode = new QRCode(qrcode, {
    text: "Enter a String",
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

function qrCodeGen() {
    // clear previous QR code
    makeQRcode.clear();

    // read the enter string
    qrvalue = qrDOM.value;

    // creating QR code for the enter string
    if (qrvalue !== '')
        makeQRcode.makeCode(qrvalue);

    // resetting input field
    qrDOM.value = ''

}