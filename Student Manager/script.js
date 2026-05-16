let students = [
    { name: "Teja", marks: [80, 70, 90] },
    { name: "Ravi", marks: [60, 75, 85] },
    { name: "Anu", marks: [90, 95, 92] }
];

students.forEach(s => {
    let sum = 0;

    for (let i = 0; i < s.marks.length; i++) {
        sum += s.marks[i];
    }

    let avg = sum / s.marks.length;

    let grade = "C";
    if (avg >= 90) grade = "A";
    else if (avg >= 75) grade = "B";

    console.log("Name:", s.name);
    console.log("Average:", avg);
    console.log("Grade:", grade);
    console.log("------");
});