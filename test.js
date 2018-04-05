
'use strict';

const maxSum = arr => {
  const allSums = [];
  let highestValue= 0;

  for (let i=0; i<arr.length; i++) {
    
    for (let k=i;k<arr.length; k++) {
      if (arr[k] > highestValue) {
        allSums.push(arr[k]);
        highestValue+= arr[k];
      } else if (arr[k] + arr[k+1] > highestValue) 

      
    allSums.push(arr[k]);
    }
    

  }

};




const theMaxSum = arr => {
  let allSums = [];
  let highestValues = 0;


  for (let i=0; i<arr.length;i++) {

      
  }
};







{
 maxValue: 10,
 values: [4,6]
},
{
 maxValue: 7,
 values:[4,6, -3]
},
{
 maxValue: 12,
 values:[4,6, -3, 5]
}









