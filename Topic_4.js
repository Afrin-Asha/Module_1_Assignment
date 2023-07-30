let score  =parseFloat(prompt("Enter Score of student"));
console.log(calculateGrade(score));
function calculateGrade(score){
    score =Math.round(score);
    switch(true){
        case score >= 90:
            return "A";
        case score >= 80:
            return "B";
        case score >= 70:
            return "C";
        case score >= 60:
            return "D";
        case score < 60:
            return "F";

    }

}