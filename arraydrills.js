
'use strict';
// Urlifying a string 

//Input: 'hello my name is evan'
// Output: 'hello%20my%20name%20is%20evan'

// /**
//  * Urlify: A function that takes in a string which may contain spaces and replaces the spaces with '%20', compatible with web requests.
//  * @param str: {string} the string to be converted
//  * @returns {string} the converted string
//  * @example 
//  * urlify('hello friends')
//  * //result: 'hello%20friends');
//  */
// const urlify = str => {
//   return str.split('').map(char=> {
//     if (char === ' ') {
//       return '%20';
//     }
//     return char;
//   }).join('');
// };






/**
 * Urlify: A function that takes in a string which may contain spaces and replaces the spaces with '%20', compatible with web requests.
 * @param str: {string} the string to be converted
 * @returns {string} the converted string
 * @example 
 * urlify('hello friends')
 * //result: 'hello%20friends');
 */
const urlify = str => {
  let newUrl = '';

  for (let i=0;i<str.length;i++) {
    if (str[i] === ' ') {
      newUrl+= '%20';
    } else {
      newUrl += str[i];
    }

  }
  return newUrl;
};



/** 
 * filter less than 5
 * @param array {Array} the array to be filtered
 * @returns array {Array} the resultant Array
 */
const filter5 = arr => {
  let newArr = [];
  let newArrIndex = 0;
  for(let i=0; i<arr.length; i++) {
    if (arr[i] > 5) {
      newArr[newArrIndex] = arr[i];
      newArrIndex++;
    }
  }
  return newArr;
};



// Max Sum in the Array


// You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

// Input: [4,6,-3,5,-2,3]
// Input: [4,6,-3,5,-2,-600,1, 300,300]

// Output: 12



const findMaxSum = arr => {
  let currentHigh = 0;
  let totalSum = 0;

  for (let i=0; i<arr.length; i++ ) {
    totalSum= Math.max(0,totalSum + arr[i]);
    currentHigh = Math.max(totalSum, currentHigh);
  }

  return currentHigh;
};






// Input: Array of numbers
// Output: Largest sum possible by a combination of linear numbers


// Goal is to find the greatest sum of each possible sum and compare 

// const findMaxSum = arr => {
//   let highestSum = 0;
//   let tempLoopSum = 0;

//   for (let i = 0; i<arr.length; i++) {

    
//     for(let j = i+1; j < arr.length; j++){
//       let tempSum = arr[j];
//       for (let k = j+1; k<arr.length;k++) {
//         tempSum+= arr[k];
//       }
//       if (tempSum > highestSum) {
//         highestSum = tempSum;
//         tempSum = 0;
//       }
//     }


//   }
//   return highestSum;
// };

// const findMaxSum = arr => {
//   let current = 0;
//   let previous =0;
//   for(let i = 0;i < arr.length;i++){  
//     previous = Math.max(0,previous + arr[i]);
//     current = Math.max(previous,current);
//   }
//   return current;
// };




// Merge Arrays


//Input: Two arrays. 
// Output: One merged and sorted array


const mergeArrs = (arr1, arr2) => {
  
};


// mergeArrs([1,2], [1,2,3,4]);




function main () {
  console.log(urlify('www.thinkful.com /tauh ida parv een'));
  // The bigO of this function is O(n);
  // console.log(filter5([1,2,3,4,5,6,7,8,9,10,4,3,2,1,10]));
  // bigO of this function is O(n);

  // console.log(findMaxSum([4,6,-3,5,-600,-2,100,500]));
}

main();