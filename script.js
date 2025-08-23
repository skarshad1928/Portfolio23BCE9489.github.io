// script.js

function downloadResume() {
  const element = document.getElementById("resume");

  // PDF options
  const opt = {
    margin:       0.5,  // half-inch margins
    filename:     "SK_Arshad_Resume.pdf",
    image:        { type: "jpeg", quality: 0.98 },
    html2canvas:  { scale: 2 },  // higher scale = sharper
    jsPDF:        { unit: "in", format: "a4", orientation: "portrait" }
  };

  // Generate & download PDF
  html2pdf().set(opt).from(element).save();
}
