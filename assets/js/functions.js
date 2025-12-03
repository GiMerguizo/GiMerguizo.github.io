function baixarPdf() {
  const pdfUrl = "/assets/docs/curriculo_giovana_merguizo.pdf"; // Substitua pelo URL do PDF
  
  fetch(pdfUrl)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Curriculo_Giovana_Merguizo.pdf'; // Nome desejado para o arquivo
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    })
    .catch(error => {
      console.error('Erro ao baixar o PDF:', error);
    });
}

const downloadBtn = document.getElementById('downloadCvBtn');
downloadBtn.addEventListener('click', baixarPdf);