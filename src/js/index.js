import {Student} from "./Student";
import {Teacher} from "./Teacher";

const student = new Student({
    name: 'Vlad',
    age: 26,
    gender: 'M',
    interests: 'programming',
})
console.log(student)
student.greeting()
const teacher = new Teacher({
    name: 'Oleg',
    age: 29,
    gender: 'M',
    interests: 'teach',
    subject: 'JS Pro',
})
console.log(teacher)
teacher.greeting()