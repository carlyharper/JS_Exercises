//Hello, you!

console.log('script loaded');

function hello(name) {
    console.log('hello, '+ name + '!');
}

hello('Mustache'); //must have quotes because variables get defined and instantiated

//Hello, you! Part 2

console.log('script loaded');

function hello(name) {
    if (name == '') {
        console.log('Hello, world!');
    } else {
        console.log('Hello, ' + name + '!"');
    }
}

hello();

//Madlib
console.log('script loaded');

function madlib(nameMad, subject) {
    console.log(nameMad + "'s favorite subject in school is " + subject);
}

madlib('carly', 'math');

//Tip Calculator
console.log('script loaded');

function tipAmount(billAmount, serviceType) {
    //tip amount is an integer/float value for a bill
    //serviceType is a string, either "bad", "fair", "good"
    

    //if serviceType is bad, return 10% of tipAmount
    //if serviceType is fair, return 15% of tipAmount
    //if serviceType is good, return 20% of tipAmount

    if (serviceType == 'bad') {
        return billAmount * 0.1;     //could have console.log instead of return, but its not the same as return, its just writing pixels to a screen. return applies an output to the function
    } else if (serviceType == 'fair') {
        return billAmount * 0.15;
    } else if (serviceType == 'good') {
        return billAmount * 0.2;
    }

    //Must return the tip amount based off of tipAmount and serviceType

}

var tip = tipAmount(100, 'good');

console.log(tip);

//Tip Calculator 2
console.log('script loaded');

function totalAmount(billAmount, serviceType) {
//totalAmount = cost of bill + tip
    
    if (serviceType == 'bad') {
        return billAmount * 0.1 + billAmount;    
    } else if (serviceType == 'fair') {
        return billAmount * 0.15 + billAmount;
    } else if (serviceType == 'good') {
        return billAmount * 0.2 + billAmount;
    }
    
}

var total = totalAmount(100, 'fair');

console.log(total);

//Tip Calculator 3
console.log('script loaded');

function splitAmount(billAmount, serviceType, noPeople) {

    if (serviceType == 'bad') {
        return (billAmount * 0.1 + billAmount) / noPeople;    
    } else if (serviceType == 'fair') {
        return (billAmount * 0.15 + billAmount) / noPeople;
    } else if (serviceType == 'good') {
        return (billAmount * 0.2 + billAmount) / noPeople;
    }

}

var newTotal = splitAmount(100,'fair', 5);

console.log(newTotal);

//Print Numbers
console.log('script loaded');

function printNumbers(start, end) {

    for (var i = start; i < end+1; i++) {
        console.log(i);
    }
}
printNumbers(1,10);

function printNumbers2(start, end) {
    var i = start-1;
    while (i < end) {
        i++;
        console.log(i);
    }
}
printNumbers2(1,10);

//Print a Square
console.log('script loaded');

function printSquare(numb) { 
    var i = 1;
    while (i <= numb) {
        i++;
        console.log('*'.repeat(numb));
        
    }
}
printSquare(5);

//Print a box

console.log('script loaded');

function printBox(width, height) {
    var space = width-2;
    for (var i = 1; i <= height; i++) {
        if (i === 1 || i === height) {
            console.log('*'.repeat(width));
        } else {
            console.log('*'+ ' '.repeat(space) + '*');
        }
    }
}
printBox(3,6);

//Print a Banner
console.log('script loaded');

function printBanner(statement) {
    var border = statement.length;
    var char = '*';
    for (var i = 1; i <= border; i++) {
        if (i == 1 || i == border) {
            console.log(char.repeat(border));
        } else {
            console.log(statement);
        }
    }
}
printBanner('it is monday night');

//Factor a Number

//write a function factors which is given a number and returns an array containing 
//all of it's factors

function factors(number) {
    var array = [];
    //we need to loop through all numbers from 0 to "number" and check if they are a factor
    for (var i = 0; i <= number; i++) {
        if (number % i === 0) {
            array.push(i);
        }
    }
    return array;
}
console.log(factors(24));


//Caesar Cipher


//Caesar Cipher 2


//Leetspeak


//Long-long Vowels


//Sum the numbers
console.log('script loaded'); 

function sumNumbers(array) {
    var total = 0;
    var i = 0;
    while (i < array.length) {
        total += array[i];
        i++;
    }
    console.log(total);
    //for (var i = 0; i < array.length; i++) {
       // total += array[i];
}
sumNumbers([1, 3, 5, 9]);


//Just the positives
console.log('script loaded');

function positiveNumbers(numbers3) {
    var newArray = [];

    for (var i = 0; i < numbers3.length; i++) {
        if (numbers3[i] > 0) {
            newArray.push(numbers3[i]);
        } 
    }
    console.log(newArray);
}
positiveNumbers([-4, 6, 9, -8, 5, -3])

//Matrix Addition
console.log('script loaded');

([[2, 4], [3, 4]], [[5, 2], [3, 1]])

function matrixAdd(first, second) {
    var result = [];

    
}


//Matrix Multiplication


//Rock Paper Scissors


//Tic Tac Toe
console.log('script loaded');

var testBoard = [["X", null, "O"],
                ["X", null, "X"],                
                ["O", null, "O"]];


function ticTacToe(board) {

    var row1 = board[0];
    var row2 = board[1];
    var row3 = board[2];
    var col1 = [board[0][0], board[1][0], board[2][0]];
    var col2 = [board[0][1], board[1][1], board[2][1]];
    var col3 = [board[0][2], board[1][2], board[2][2]];
    var diag1 = [board[0][0], board[1][1], board[2][2]];
    var diag2 = [board[0][2], board[1][1], board[2][0]];

    var winConditions = [row1, row2, row3, col1, col2, col3, diag1, diag2];

    for (var i=0; i<winConditions.length; i++) {

        var winCondition = winConditions[i];

        var string = "" + winCondition[0] + winCondition[1] + winCondition[2]; //"Xnull0"

        if (string == "XXX") {
            return "X wins";
        } else if (string == "OOO") {
            return "O wins";
        } else {
            return "No one wins"
        }
    
//first loop, winCondition is row1
//second loop, winCondition is row2
// .. 
//last loop win condition is diag2

    }

//there needs to be a for loop that happens 8 times: down 3 rows, down 3 columns, checking the 2 diagnals

}

console.log(ticTacToe(testBoard));
