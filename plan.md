# Max Sum Array

## Find the greatest sum possible of a continuous running set of numbers in an array

### For example, if you are given an array [1,5,-2,4,-3]

### You would be trying to find which set of numbers you could add to get the highest sum. You cannot skip around, it has to be in a continuous order. 

### With the array provided above, you would find that the sum of [5,-2,4] would be the greatest. (7);


## PsuedoCode

### How would we go about accomplishing this? 

We need to find a way to compare all possible continuous sums available. Obviously, some sort of loop will be necessary. 

Let's create a variable to hold the max sum possible which we will update every time we find a sum that is higher than our previously calculated sum. 

`let maxSum = 0;`


We will loop through the array. Each number we loop through, we will calculate the sum of the current number + the next number, then the current number + the third number, and so forth until the end of the array. 

so we want something like this to happen:

```
let tempSum = arr[1]

if (tempSum > max) {
  max=tempSum;
}

let tempSum = arr[1] + arr[2] 

if (tempSum > max) {
  max=tempSum;
}

let tempSum = arr[1] + arr[2] + arr[3] 

if (tempSum > max) {
  max=tempSum;
}

let tempSum = arr[1] + arr[2] + arr[3] + arr[4]

if (tempSum > max) {
  max=tempSum;
}

 ```

Each time the sum is calculated, we want to check to see if the sum is greater than the current max. If so, then we set that number to the max.

## How do we express this in code?

```
for (i=0; i< arr.length; i++) {
  let tempsum = 0;

  for (j=i+1)

}
  ```