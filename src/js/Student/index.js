import {Person} from "../Person";
export class Student extends Person {
    greeting() {
        console.log(`Yo, I'm ${this.name}`)
    }
}