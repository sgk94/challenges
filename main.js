//challenges

/* #1 
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.*/

function order(words){
    let numArr = [1,2,3,4,5,6,7,8,9];
    let arr = [];
    var newWord = words.split(' ');
    if(words === "") {
      return ""
    }
    numArr.forEach(function(num) {
      newWord.forEach(function(element) {
        if(element.includes(num)) {
          arr.push(element)
        } 
      })
    })
    sortedArr = arr.join(" ")
    return sortedArr
    }
  
  order("is2 Thi1s T4est 3a")

/* #2 
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters */

function longest(s1, s2) {
    let jointStr = s1 + s2;
   let sortedStr = jointStr.split("").sort().filter((elem, idx, arr) => {
    return arr.indexOf(elem) === idx
   });
  return sortedStr.join('')
 }

 longest("aretheyhere", "yestheyarehere")


