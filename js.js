//Hello, you!

console.log('script loaded');

function hello(name) {
    console.log('hello, '+ name + '!');
}

hello('Mustache'); //must have quotes because variables get defined and instantiated


//Hello, you! Part 2


//Madlib


//Tip Calculator
console.log('script loaded');

function tipAmount(tipAmount, serviceType) {
    //tip amount is an integer/float value for a bill
    //serviceType is a string, either "bad", "fair", "good"
    

    //if serviceType is bad, return 10% of tipAmount
    //if serviceType is fair, return 15% of tipAmount
    //if serviceType is good, return 20% of tipAmount

    if (serviceType == 'bad') {
        return tipAmount * 0.1;     //could have console.log instead of return, but its not the same as return, its just writing pixels to a screen. return applies an output to the function
    } else if (serviceType == 'fair') {
        return tipAmount * 0.15;
    } else if (serviceType == 'good') {
        return tipAmount * 0.2;
    }

    //Must return the tip amount based off of tipAmount and serviceType

}

var tip = tipAmount(100, 'good');

console.log(tip);

//Tip Calculator 2


//Tip Calculator 3


//Print Numbers


//Print a Square


//Print a box


//Print a Banner


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


//Just the positives


//Matrix Addition


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
