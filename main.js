//challenges

/* #1 
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.*/

function order(words){
    let numArr = [1,2,3,4,5,6,7,8,9];
    let sortedArr = [];
    var newWord = words.split(' ');
  numArr.forEach(function(num) {
    newWord.forEach(function(element) {
      if(element.includes(num)) {
        sortedArr.push(element)
      } 
    })
  })
  }
  
  order("is2 Thi1s T4est 3a")

