
document.getElementById("calc-btn").addEventListener("click", calculateResult);

function calculateResult() {
    
    let bangla = Number(document.getElementById("bangla").value);
    let english = Number(document.getElementById("english").value);
    let math = Number(document.getElementById("math").value);
    let science = Number(document.getElementById("science").value);
    let socialScience = Number(document.getElementById("socialScience").value);

    
    let totalMarks = bangla + english + math + science + socialScience;
    let averageMarks = totalMarks / 5;
    let percentage = (totalMarks / 500) * 100;
    let message = "";

    if (averageMarks >= 80) {
        message = "YOU GOT GPA 5 and " + percentage.toFixed(2) + "%.";
    } else if (averageMarks >= 70) {
        message = "YOU GOT GPA 4 and " + percentage.toFixed(2) + "%.";
    } else if (averageMarks >= 60) {
        message = "YOU GOT GPA 3 and " + percentage.toFixed(2) + "%.";
    } else if (averageMarks >= 50) {
        message = "YOU GOT GPA 2 and " + percentage.toFixed(2) + "%.";
    } else if (averageMarks >= 40) {
        message = "YOU GOT GPA 1 and " + percentage.toFixed(2) + "%.";
    } else {
        message = "YOU FAILED and " + percentage.toFixed(2) + "%.";
    }

    
    console.log(message);

    
    let resultContainer = document.getElementById("result-container");
    let resultText = document.getElementById("result-text");

    resultText.innerText = message;
    resultContainer.style.display = "block"; 
}