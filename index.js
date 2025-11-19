function calculateTax(amount){
    //function for converting tax percentage to amount

    //calculate the tax amount using 10% of the amount
    let tax = (10/100) * amount;

    //return the tax amount result
    return tax;

}

function convertToUpperCase(text){
    //function for converting a text string into uppercase letters

    //use toUpperCase() method to manipulate the text string to uppercase letters
    //store the result inside a variable -> upperCase
    let upperCase = text.toUpperCase();

    //return the variable result
    return upperCase;

}

function findMaximum(num1,num2){
    //function for determining which is the largest of two numbers

    //largestNum variable defined with let; can be reassigned
    let largestNum;

    
    if(num1 > num2){ //determine if num1 is greater than num2

        //Assign num1 as the largest number to the variable
        largestNum = num1;

    }else if(num2 > num1){ //determine if num2 is greater than num1

        //Assign num2 as the largest number to the variable
        largestNum = num2;

    }else{ //determine if num1 is equal to num1

        largestNum = num1; //or largestNum = num2 because both numbers are equal

    }

    //return the variable result
    return largestNum;

}

function isPalindrome(word){
    // function for determining if a word can be read the same way forwards or backwards

    //chain split(), reverse() and join() to achieve a reversed word
    //use split() to convert the word into an array
    //use reverse() to flip the order of array eg. [a,b,c] -> [c,b,a]
    //use join() to convert the array back to normal text string
    let reversedWord = word.split("").reverse().join("");

    if(word === reversedWord){ //determine if the word is strictly equal to the reversed word 

        return true;

    }else{ //determine if the word is not equal to the reversed word

        return false;

    }
    
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    // fuction to calculate the final price after disounting original price

    // calculate the discounted price using the discount percentage
    // percentages are usually divided by 100 eg. 2% -> 2/100
    let discountedPrice = originalPrice * (1 - (discountPercentage/100));

    //return the discounted price result
    return discountedPrice;
    
}


//you can also call the functions and test them with console.log()
//console.log("calculated tax is:" + calculateTax(100));
//console.log("The text in uppercase is: " + convertToUpperCase("hello"));
//console.log("The largest number is: " + findMaximum(89, 1204));
//console.log("Is the word a palindrome?: " + isPalindrome("racecar"));
//console.log("The discounted price is: " + calculateDiscountedPrice(100, 40));


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };