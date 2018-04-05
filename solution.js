'use strict';


const findMaxSum = arr => {
  let currentHigh = 0;
  let totalSum = 0;

  for (let i=0; i<arr.length; i++ ) {
    totalSum= Math.max(0,totalSum + arr[i]);
    currentHigh = Math.max(totalSum, currentHigh);
  }

  return currentHigh;
};




function main() {
  console.log(findMaxSum([200,-500,301]));
}

main();