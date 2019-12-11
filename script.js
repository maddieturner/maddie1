
function monkey_trouble(a_smile, b_smile) {

    var trouble = false;

    if (a_smile == true && b_smile==true) {
        trouble = true;
    }

    if (a_smile== false && b_smile==false) {
        trouble = true
    }
    return trouble;

}



function string_times(original, numCopies) {
    var newString = ""
    for (var i=0; i < numCopies;i++){
        newString = newString + original;
    }
    return newString;
}





function front_times(first, numCopies){
var string = ""
var first =first.substring(0,3)
for ( i=0; i<numCopies; i++) {
     string = string + first
}
return string
}






function string_bits(string){
    var numLetters = string.length;
    var newString = "";
for (var i=0; i<numLetters; i+=2){
    newString += string[i];
}
return newString;
}






function caughtSpeeding(speed, birthday) {
    var ticket = 0
    if (speed > 60 && speed <= 80){
        ticket = 1
    }
    if (speed > 81){
        ticket = 2
    }

    if (birthday == true) {
        if (speed <= 65) {
            ticket = 0
        }
        if (speed >= 66 && speed <= 85) {
            ticket = 1
        }
        if (speed > 86) {
            ticket = 2
        }

    }
    return ticket;
}






function fizzBuzz(num1) {
    //var str = "num1"
    if (num1 < 3) {
        return "Fizz"
    }
}







function teaParty(tea, candy) {
    var party =0
    if (tea < 5 || candy < 5) {
        party = 0
    }
    if (tea>=5 && candy>=5){
        party = 1
    }
    if(tea >= 5 && candy >= 5) {
        if (tea * 2 <= candy) {
            party = 2
        }
        if (candy * 2 <= tea) {
            party = 2
        }
    }
    return party;
}







function blackjack(num1,num2){
    if (num1 > 21 && num2 >21) {
        return 0;
    }
    if (num1 >21) {
        return num2;
    }
    if (num2 >21) {
        return num1;
    }
    var bothUnder = 0
    if(num1 <= 21 && num2 <= 21) {
        bothUnder = 1
    }
    if (bothUnder = 1 && num1 > num2) {
        return num1;
    }
    if (bothUnder = 1 && num2 > num1) {
        return num2;
    }
}










function loneSum(num1, num2, num3){
    var allEqual = 0
    if (num1 == num2 && num2 == num3){
        return allEqual
    }
    if (num3 == num1){
        return (num2)
    }
    var loneSum = 0
    if (num1 != num2 && num2 != num3){
            return (num1 + num2 + num3)
    }

    if (num1 == num2){
        return (num3)
    }

    if (num2 == num3){
        return (num1)
    }
}
