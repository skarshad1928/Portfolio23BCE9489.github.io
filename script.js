function downloadResume() {
  const resume = document.getElementById("resume");

  const opt = {
    margin: 0.5,
    filename: "SK_Arshad_Resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
  };

  // Generate and download styled resume as PDF
  html2pdf().from(resume).set(opt).save();
}
