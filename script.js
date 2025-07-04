document.getElementById("proceedBtn").addEventListener("click", () => {
    const count = parseInt(document.getElementById("subjectCount").value);
    if (isNaN(count)) {
        alert("Please select the number of subjects.");
        return;
    }

    const detailsDiv = document.getElementById("subjectDetails");
    detailsDiv.innerHTML = "<h3>Enter Subject Names and Credit Hours:</h3>";

    for (let i = 0; i < count; i++) {
        detailsDiv.innerHTML += `
            <input type="text" placeholder="Subject ${i + 1} Name" class="subjectName"><br>
            <input type="number" placeholder="Credit Hours for Subject ${i + 1}" class="creditHours" min="1"><br>
        `;
    }
    detailsDiv.innerHTML += `<button id="nextStep">Next</button>`;

    document.getElementById("nextStep").addEventListener("click", showMarksSection);
});

function showMarksSection() {
    const names = document.querySelectorAll(".subjectName");
    const credits = document.querySelectorAll(".creditHours");
    const marksDiv = document.getElementById("marksSection");
    marksDiv.innerHTML = "<h3>Enter Marks Obtained for Each Subject:</h3>";

    for (let i = 0; i < names.length; i++) {
        if (names[i].value.trim() === "" || credits[i].value === "") {
            alert("Please fill all subject names and credit hours.");
            return;
        }
    }

    for (let i = 0; i < names.length; i++) {
        marksDiv.innerHTML += `
            <p>${names[i].value} (${credits[i].value} Credit Hours)</p>
            <input type="number" placeholder="Marks Obtained" class="marks" min="0" max="100"><br>
        `;
    }
    marksDiv.innerHTML += `<button id="calculateBtn">Calculate GPA</button>`;

    document.getElementById("calculateBtn").addEventListener("click", calculateGPA);
}

function getGradePoint(marks) {
    if (marks < 50) return 0.00;
    if (marks === 50) return 1.00;
    if (marks === 51) return 1.08;
    if (marks === 52) return 1.17;
    if (marks === 53) return 1.25;
    if (marks === 54) return 1.33;
    if (marks === 55) return 1.42;
    if (marks === 56) return 1.50;
    if (marks === 57) return 1.58;
    if (marks === 58) return 1.67;
    if (marks === 59) return 1.75;
    if (marks === 60) return 1.83;
    if (marks === 61) return 1.92;
    if (marks === 62) return 2.00;
    if (marks === 63) return 2.08;
    if (marks === 64) return 2.17;
    if (marks === 65) return 2.25;
    if (marks === 66) return 2.33;
    if (marks === 67) return 2.42;
    if (marks === 68) return 2.50;
    if (marks === 69) return 2.58;
    if (marks === 70) return 2.67;
    if (marks === 71) return 2.75;
    if (marks === 72) return 2.83;
    if (marks === 73) return 2.92;
    if (marks === 74) return 3.00;
    if (marks === 75) return 3.08;
    if (marks === 76) return 3.17;
    if (marks === 77) return 3.25;
    if (marks === 78) return 3.33;
    if (marks === 79) return 3.42;
    if (marks === 80) return 3.50;
    if (marks === 81) return 3.60;
    if (marks === 82) return 3.70;
    if (marks === 83) return 3.80;
    if (marks === 84) return 3.90;
    if (marks >= 85) return 4.00;
}

function calculateGPA() {
    const credits = document.querySelectorAll(".creditHours");
    const marks = document.querySelectorAll(".marks");
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < marks.length; i++) {
        const credit = parseFloat(credits[i].value);
        const obtained = parseFloat(marks[i].value);

        if (isNaN(obtained) || obtained < 0 || obtained > 100) {
            alert("Please enter valid marks between 0 and 100.");
            return;
        }

        const gradePoint = getGradePoint(obtained);
        totalPoints += gradePoint * credit;
        totalCredits += credit;
    }

    const gpa = (totalPoints / totalCredits).toFixed(2);
    document.getElementById("resultSection").innerHTML = `🎉 Congratulations! Your Current GPA is: <strong>${gpa}</strong>`;
}
