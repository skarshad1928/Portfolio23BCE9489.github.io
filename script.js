<!-- Add this script inside your HTML file -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

<script>
function downloadResume() {
  const element = document.getElementById("resume");
  
  // Better configuration
  const opt = {
    margin:       [10, 10, 10, 10], // top, left, bottom, right
    filename:     'SK_Arshad_Resume.pdf',
    image:        { type: 'jpeg', quality: 1 },
    html2canvas:  { 
      scale: 3,               // Higher scale for better quality
      useCORS: true,          // Fix for images from external sources
      logging: false
    },
    jsPDF:        { 
      unit: 'mm', 
      format: 'a4', 
      orientation: 'portrait' 
    }
  };

  // Make sure content fits properly (page-break fix)
  html2pdf()
    .set(opt)
    .from(element)
    .toPdf()
    .get('pdf')
    .then(function (pdf) {
      const totalPages = pdf.internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(10);
        pdf.text('SK Arshad Resume', pdf.internal.pageSize.getWidth() - 60, pdf.internal.pageSize.getHeight() - 10);
      }
    })
    .save();
}
</script>
