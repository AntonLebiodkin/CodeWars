/*
	https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
	You get an array of numbers, return the sum of all of the positives ones.
*/
function positiveSum(arr) {
  var result = 0;
  arr.map(function (num){
    if (num > 0 ) result += num;
  });
  return result;
}

