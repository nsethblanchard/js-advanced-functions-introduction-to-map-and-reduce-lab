// Your code here

function mapToNegativize(sourceArray) {
    return sourceArray.map( x => x * -1)
}

function mapToNoChange(sourceArray) {
    return sourceArray.map( x => x )
}

function mapToDouble(sourceArray) {
    return sourceArray.map( x => x * 2 )
}

function mapToSquare(sourceArray) {
    return sourceArray.map( x => x * x )
}

function reduceToTotal(array, start = 0) {
    return array.reduce(function(accumulator, element){ return element + accumulator}, start)
}

// function reduceToTotal(array, start = 0) {
//     return array.reduce((total, amount) => total + amount) + start
// }

function reduceToAllTrue(array) {
    // return array.reduce((total, element) => !!element)
    return array.every(element => !!element)
}

function reduceToAnyTrue(array) {
    return array.some(element => !!element)
}

