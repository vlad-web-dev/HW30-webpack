class Person {
    constructor(data) {
        this.name = data.name
        this.age = data.age
        this.gender = data.gender
        this.interests = data.interests
        this.bio = `${this.name} is ${this.age} years old. They like ${this.interests}`
    }

    greeting() {
        console.log(`Hi, I'm ${this.name}`)
    }
}

exports.Person = Person