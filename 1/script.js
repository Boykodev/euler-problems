function solve(method) {
    var result = 0;

    switch (method) {
        case 0:
            result = solutionZero(); break;
        case 1:
            result = solutionOne(); break;
        default:
            result = solutionZero(); break;
    }

    displayResult(result);
}

// brute-force algorithm
function solutionZero() {
    var max = 1000;
    var multiples = [3, 5];
    var sum = 0;

    for (var i = 0; i < max; i++) {
        for (var n in multiples) {
            if (i % multiples[n] === 0) {
                sum += i; // adding number to the sum
                break; // each number can be added only once
            }
        }
    }

    return sum;
}

function solutionOne() {
    // TODO more efficient solution
}

function displayResult(result) {
    document.getElementById('answer').innerHTML = result;
}