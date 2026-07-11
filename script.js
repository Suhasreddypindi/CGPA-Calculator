let subjects = [];

let currentGPA = 0;
let currentCredits = 0;

function addSubject() {

    let credit = Number(document.getElementById("credit").value);
    let grade = Number(document.getElementById("grade").value);

    subjects.push({
        credit: credit,
        grade: grade
    });

    document.getElementById("subjects").innerHTML +=
        "Credit: " + credit +
        " Grade: " + grade + "<br>";
}

function calculateGPA() {

    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < subjects.length; i++) {
        totalPoints += subjects[i].credit * subjects[i].grade;
        totalCredits += subjects[i].credit;
    }

    currentGPA = totalPoints / totalCredits;
    currentCredits = totalCredits;

    document.getElementById("gpa").innerHTML =
        "Semester GPA = " + currentGPA.toFixed(2);
}

function calculateCGPA() {

    let oldCgpa = Number(document.getElementById("oldCgpa").value);
    let oldCredits = Number(document.getElementById("oldCredits").value);

    let cgpa =
        ((oldCgpa * oldCredits) + (currentGPA * currentCredits))
        /
        (oldCredits + currentCredits);

    document.getElementById("cgpa").innerHTML =
        "Current CGPA = " + cgpa.toFixed(2);
}

function predictCGPA() {

    let oldCgpa = Number(document.getElementById("oldCgpa").value);
    let oldCredits = Number(document.getElementById("oldCredits").value);

    let futureCredits = Number(document.getElementById("futureCredits").value);
    let futureGpa = Number(document.getElementById("futureGpa").value);

    let finalCgpa =
        ((oldCgpa * oldCredits) +
        (currentGPA * currentCredits) +
        (futureGpa * futureCredits))
        /
        (oldCredits + currentCredits + futureCredits);

    document.getElementById("prediction").innerHTML =
        "Predicted CGPA = " + finalCgpa.toFixed(2);
}