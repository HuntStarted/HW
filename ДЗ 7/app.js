// Написать две функции:

// первая выведет список студентов и средний бал каждого
// вторая выведен средний бал по всем студентам

const students = [
    {
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]

const avg = (student) => {
    return student.marks.reduce((a, b) => a + b) / student.marks.length;
 };
 for (const student of students) {
    console.log(`${student.name}: ${avg(student)}`);
 }

 const avgSum = students.reduce((sum, student) => {
    return sum + avg(student);
 }, 0);
 
 const avgMark = avgSum / students.length;
 console.log(`Средний бал по всем студентам: ${avgMark}`)