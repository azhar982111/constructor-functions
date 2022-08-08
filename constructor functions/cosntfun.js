
// var person1 = new data("Amar", "Goa", "singer")
// var person2 = new data("Akbar", "Mumbai", "chef")
// var person3 = new data("Anthony", "Kashmir ", "magician")


// console.log(person1)
// console.log(person2)
// console.log(person3)


const Amar = {
    name: "Amar",
    location: "Goa",
    skill: "singer",
    skills(){
        console.log(`Amar is a ${this.skill}`)
    }
}

const Akbar = {
    name: "Akbar",
    location: "Mumbai",
    skill: "chef",
    skills(){
        console.log(`Akbar is a ${this.skill}`)
    }
}
const Anthony = {
    name: "Anthony",
    location: "Kashmir",
    skill: "magician",
    skills(){
        console.log(`Anthony is a ${this.skill}`)
    }
}

Amar.skills.call(Akbar)

Akbar.skills(),Anthony.skills()

