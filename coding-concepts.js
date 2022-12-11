// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
console.log(cohort.split(""))

// a) Your answer: ['H', 'o', 't', 'e', 'l', ' ', '2', '0', '2', '2']
// b) Verify and explain: ['H', 'o', 't', 'e', 'l', ' ', '2', '0', '2', '2' ]. The dot notation method .split("") will convert a string into an array, with each index in the string converted into a string. Each new string holds its own index in the new array, including the space.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: It is undefined because there is no 'return' command within the function.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: [ 8, 10, 12, 14, 16 ]. The higher order function .map() iterates through the array and returns a new array with the new values. Since the function is set to multiply each value it iterates to by 2, it will return a new array with each original number multiplied by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: [11, 13, 15]. The higher order function .filter() has a built-in if statement. It will literally filter through the array it is given and return a new array of only values that match its "if statement" condition. Since the condition given is that the number must not have a remainder of 0 when divided by 2, it will return a new array of only the numbers that do not have a remainder of 0 when divided by 2.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: Javascript. The variable myCodingSkills is holding an object with multiple key value pairs. Since the languages key contains an array, you would use bracket notation to indicate which index you want to log. When you console.log(myCodingSkills.languages[0]), you are telling it to output the 0th index in the array within the languages key, within the myCodingSkills object.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: {student: "George", cohort: "Hotel", year: 2022}
// b) Verify and explain: Learn { student: 'George', cohort: 'Hotel', year: 2022 }. Within the constructor, only 'name' is set as a parameter, which will be replaced with the argument. The 'cohort' and 'year' values are set to a default value. Therefore, when making a new Learn, it will return a new object called Learn with the student set to "George" since that was the argument that was passed in, the cohort set to 'Hotel', and the year set to 2022, since those are the default values set.
