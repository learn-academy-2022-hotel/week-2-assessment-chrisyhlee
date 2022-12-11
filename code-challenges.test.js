// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// PSEUDOCODE
// create test using describe, it and expect
// utilize red-green refactor process to first see the test has a good fail, then see the test pass after declaring the function
// declare function called divByThree that takes an object and returns whether the number inside is evenly divisible by three or not
// input: object
// output: ${number} is/is not divisible by three
// if number divided by 3 has no remainder, return 'is divisible by three'
// if number divided by 3 has a remainder, return 'is not divisible by three'

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe ("divByThree", () => {
    it ("returns whether the number is evenly divisible by three or not", () => {
        expect (divByThree(object1.number)).toEqual("15 is divisible by three")
        expect (divByThree(object2.number)).toEqual("0 is divisible by three")
        expect (divByThree(object3.number)).toEqual("-7 is not divisible by three")
    })
})
// FAIL
// FAIL  ./code-challenges.test.js
// divByThree
//   ✕ returns whether the number is evenly divisible by three or not

// ● divByThree › returns whether the number is evenly divisible by three or not

//   ReferenceError: divByThree is not defined

// b) Create the function that makes the test pass.

const divByThree = (exObj) => {
    if (exObj % 3 === 0) {
        return `${exObj} is divisible by three`
    } else{
        return `${exObj} is not divisible by three`
    }
}
// PASS  ./code-challenges.test.js
// divByThree
//   ✓ returns whether the number is evenly divisible by three or not (1 ms)

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// PSEUDOCODE
// create test using declare, it and expect
// use red-green refactor process to first run the test and see it return a good fail, then run it again after declaring the function and see it return a pass
// declare function called allCaps that takes an array or words and returns an array with all words capitalized
// input: array of words
// output: array of words all capitalized
// use .map to iterate, .charAt() to locate first letter of each word, and .toUpperCase() to return words all capitalized
// use .slice to remove the original lowercase letter and .toLowerCase() to ensure the rest of the letters are lowercase
// add both together using +

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe ("allCaps", () => {
    it ('takes in an array of words and returns a new array with all words capitalized', () => {
        expect (allCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect (allCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
// FAIL  ./code-challenges.test.js
// divByThree
//   ✓ returns whether the number is evenly divisible by three or not (1 ms)
// allCaps
//   ✕ takes in an array of words and returns a new array with all words capitalized

// ● allCaps › takes in an array of words and returns a new array with all words capitalized

//   ReferenceError: allCaps is not defined


// b) Create the function that makes the test pass.

const allCaps = (array) => {
    return array.map((value) => {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    })
}
// PASS  ./code-challenges.test.js
// allCaps
//   ✓ takes in an array of words and returns a new array with all words capitalized

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// create test using describe, it and expect
// use red-green refactor process to first run the test and see it return a good fail, then run it again after declaring function and see that it returns a pass
// declare function called firstVowelIndex that takes in a string as an argument and returns the index of the first appearance of a vowel
// input: string
// output: index of first vowel
// use .search(/[]/) method to return index of the first match


// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe ("firstVowelIndex", () => {
    it ("takes a string and returns the index of the first vowel", () => {
        expect (firstVowelIndex(vowelTester1)).toEqual(1)
        expect (firstVowelIndex(vowelTester2)).toEqual(0)
        expect (firstVowelIndex(vowelTester3)).toEqual(2)
    })
})
// FAIL  ./code-challenges.test.js
// firstVowelIndex
//   ✕ takes a string and returns the index of the first vowel (1 ms)

// ● firstVowelIndex › takes a string and returns the index of the first vowel

//   ReferenceError: firstVowelIndex is not defined


// b) Create the function that makes the test pass.

const firstVowelIndex = (string) => {
    return string.search(/['a','e','i','o','u','A','E','I','O','U']/)
}
// PASS  ./code-challenges.test.js
// allCaps
//   ✓ takes in an array of words and returns a new array with all words capitalized