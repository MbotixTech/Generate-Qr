document.addEventListener('DOMContentLoaded', function() {
  generateQRCode(); 
});

function generateQRCode() {
  const text = document.getElementById('qr-text').value;
  const size = document.getElementById('qr-size').value;
  const downloadLink = document.getElementById('download-link');
  const qrCodeDiv = document.getElementById('qr-code');

  if (text.trim() === '') {
    alert('Please enter text or URL');
    return;
  }

  qrCodeDiv.innerHTML = '';

  const qrcode = new QRCode(qrCodeDiv, {
    text: text,
    width: parseInt(size),
    height: parseInt(size),
  });

  qrCodeDiv.style.display = 'block';
  downloadLink.href = qrCodeDiv.getElementsByTagName('img')[0].src.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
  downloadLink.style.display = 'block';
}
