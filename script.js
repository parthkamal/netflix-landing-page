let questionString = document.getElementsByClassName("question");
for (let i = 0; i < questionString.length; i++) {
  const question = questionString[i];
//   console.log(question)
console.log(question.childNodes[1].childNodes[1].childNodes[3])
  question.addEventListener("click", () => {
      console.log(this)
    let panel=question.childNodes[1].childNodes[1].childNodes[3]
    console.log(panel)
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


