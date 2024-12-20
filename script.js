function isEven(number){
    if (number % 2 === 0){
        return true
    } else {
        return false
    }
}

let allNumbers = [99, 100, 1000, 92, 2, 8, 15]

let sortedNumbers = sortNumbers(allNumbers)


function biggestNumber(numbers){
    return Math.max(...numbers)
}

function lowestNumber(numbers){
    return Math.min(...numbers)
}

function compareNumbers(a, b){
    return a - b
}

function sortNumbers(numbers){
    return numbers.sort(compareNumbers)
}

// console.log (biggestNumber(allNumbers))
// console.log (lowestNumber(allNumbers))
// console.log(sortedNumbers)

function isArrayEven(numbers){
    console.log(numbers)
    let isEvenNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        isEvenNumbers.push(isEven(numbers[i]))
    }
    return isEvenNumbers
}

console.log(isArrayEven(sortedNumbers))