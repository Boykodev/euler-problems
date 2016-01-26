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
    var max = 4000000;

    var n1 = 1;
    var n2 = 2;

    var sum = 0;

    while (n1 < max && n2 < max) {
        if (n1 % 2 == 0) sum += n1;
        if (n2 % 2 == 0) sum += n2;
        n1 += n2;
        n2 += n1;
    }

    return sum;
}

function solutionOne() {
    // TODO more efficient solution
}

function displayResult(result) {
    document.getElementById('answer').innerHTML = result;
}