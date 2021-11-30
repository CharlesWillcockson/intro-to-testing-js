// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }

const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input){
    if((input === true) || (input === false)){
        return ("Hello, World!");
    }else return ("Hello, " + input + "!");

    }

function isFive(input){
    if (input === 5){
        return true
    }else return false;

}

function isEven(input){
    if (parseInt(input) % 2 === 0){
        return true;
    }else return false;
}

function isVowel(letter){
    return('aeiouAEIOU'.indexOf(letter) != -1);
}



