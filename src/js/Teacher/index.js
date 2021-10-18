import {Person} from "../Person";

export class Teacher extends Person {
    constructor(data) {
        super(data);
        this.subject = data.subject
    }

    greeting() {
        console.log(`Hello, my name is ${this.name} and i teach ${this.subject}`)
    }
}