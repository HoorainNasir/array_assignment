type student = {name:string; grades:number[];}

let students:student[] =[
    {
        name:"Umaima",
        grades:[86, 94, 78, 92]
    },
    {
        name:"Alina",
        grades:[85, 73, 94, 82]
    },
    {
        name:"Abdullah",
        grades:[88, 73, 79, 91]
    },
];

function calculateAverageGrade(grades:number[]): number {
    let total= grades.reduce((sum, grade) => sum + grade ,0);
    return total/grades.length
};

students.forEach((student) => {
    let averageGrade = calculateAverageGrade(student.grades)
    console.log(`Name: ${student.name}`);
    console.log(`Average grade: ${averageGrade.toFixed(2)}`);
    console.log('----');
}
);