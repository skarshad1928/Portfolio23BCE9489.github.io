function downloadResume() {
  const element = document.getElementById("resume");
  const options = {
    margin:       0,
    filename:     'SK_Arshad_Resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(options).from(element).save();
}
