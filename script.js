<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<script>
function downloadResume() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "mm", "a4");

  let y = 20; // vertical cursor

  function addText(text, x = 20, size = 12, bold = false) {
    doc.setFont("times", bold ? "bold" : "normal");
    doc.setFontSize(size);
    doc.text(text, x, y);
    y += 8;
  }

  // Resume content (pure text, ATS-friendly)
  addText("SK Arshad", 20, 16, true);
  addText("Phone: +91 7416828005");
  addText("Email: sar213083168@gmail.com");
  addText("GitHub: github.com/skarshad1928");
  addText("LinkedIn: linkedin.com/in/shaik-arshad-b86222356");
  y += 6;

  addText("Summary", 20, 14, true);
  addText("I am a Data Analyst skilled in Python, R, SQL, Tableau, and Power BI.");
  addText("Experienced in data collection, cleaning, and building dashboards.");
  addText("Worked with SQLAlchemy to extract and manipulate datasets.");
  addText("Passionate about turning data into actionable insights.");
  y += 6;

  addText("Education", 20, 14, true);
  addText("B.Tech in Computer Science and Engineering — VIT-AP University (2023–2027)");
  addText("Intermediate (MPC) — Sri Chaitanya Junior College (2021–2023)");
  y += 6;

  addText("Skills", 20, 14, true);
  addText("Languages: Python, R, SQL");
  addText("Frameworks: Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn, SQLAlchemy");
  addText("Tools: Tableau, Power BI, Excel, VS Code, Jupyter Notebook, Streamlit, Git");
  addText("Databases: MySQL, MongoDB");
  addText("Soft Skills: Communication, Problem Solving, Time Management");
  y += 6;

  addText("Projects", 20, 14, true);
  addText("Footstep Generator: Converts footsteps into electricity using piezoelectric principles.");
  addText("Task Management Website: Flask + MongoDB CRUD app for user tasks.");
  addText("GitHub: https://github.com/skarshad1928/23BCE9489-Mongo-DBA-Arshad");
  y += 6;

  addText("Certifications", 20, 14, true);
  addText("SQL Course – Udemy");
  addText("IBM Introduction to Data Analytics – Coursera");
  addText("Data Analytics Job Simulation – Forage");
  addText("Tata Data Visualisation – Forage");
  addText("Industrial Certification: MongoDB Database Administration – FacePrep");

  // Save the ATS-friendly PDF
  doc.save("SK_Arshad_Resume.pdf");
}
</script>
