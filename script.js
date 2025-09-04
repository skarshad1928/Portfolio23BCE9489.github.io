// Styled PDF (captures the #resume as it looks)
document.getElementById("btnStyled").addEventListener("click", () => {
  const resume = document.getElementById("resume");
  const opt = {
    margin:       [0.3, 0.3, 0.3, 0.3], // in inches (top,right,bottom,left)
    filename:     "SK_Arshad_Resume_Styled.pdf",
    image:        { type: "jpeg", quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: "in", format: "a4", orientation: "portrait" }
  };
  html2pdf().from(resume).set(opt).save();
});

// ATS (plain text) PDF for job portals
document.getElementById("btnATS").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "mm", "a4");
  let y = 18;

  const add = (text, size=11, bold=false) => {
    doc.setFont("times", bold ? "bold" : "normal");
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(text, 180);
    doc.text(lines, 15, y);
    y += lines.length * 6;
  };
  const gap = (h=3) => y += h;

  add("SK Arshad", 16, true);
  add("Phone: +91 7416828005 | Email: sar213083168@gmail.com | GitHub: github.com/skarshad1928 | LinkedIn: linkedin.com/in/shaik-arshad-b86222356");
  gap();

  add("Summary", 13, true);
  add("Results-driven Data Analyst skilled in Python, SQL, Tableau, and Power BI. Experienced in data collection, cleaning, visualization; adept with MySQL/MongoDB and SQLAlchemy. Build KPI dashboards and apply Scikit-learn for insights.");
  gap();

  add("Education", 13, true);
  add("B.Tech in CSE — VIT-AP University (2023–2027), CGPA: 8.0");
  add("Intermediate (MPC) — Sri Chaitanya Junior College (2021–2023), 96.3%");
  add("10th Grade (SSC) — [Your School Name], 100%");
  gap();

  add("Skills", 13, true);
  add("Languages: Python, R, SQL");
  add("Libraries: Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn, BeautifulSoup, SQLAlchemy");
  add("Tools: Tableau, Power BI, Excel, VS Code, Jupyter, Streamlit, Git");
  add("Databases: MySQL, MongoDB");
  add("Soft Skills: Communication, Problem Solving, Time Management");
  gap();

  add("Projects", 13, true);
  add("Task Management Website — Flask + MongoDB CRUD app with user registration, create/update/delete tasks. GitHub: https://github.com/skarshad1928/23BCE9489-Mongo-DBA-Arshad");

  doc.save("SK_Arshad_Resume_ATS.pdf");
});
