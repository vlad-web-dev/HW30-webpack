const {Person} = require('../Person')

class Student extends Person {
    greeting() {
        console.log(`Yo, I'm ${this.name}`)
    }
}

exports.Student = Student