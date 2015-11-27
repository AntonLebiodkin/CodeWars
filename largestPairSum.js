/**
 * Created by anton on 26.11.15.
 */
var arr = [1, 0];

function largestPairSum(numbers)
{

    var max = numbers[0];
    var i_max = 0;
    for (var i = 1; i < numbers.length; i++){
        if (max < numbers[i])
        {
            max = numbers[i];
            i_max = i;
        }
    }
    numbers[i_max] = Number.NEGATIVE_INFINITY;

    var next_max = numbers[0];
    for (var i = 1; i < numbers.length; i++){
        if (next_max < numbers[i])
        {
            next_max = numbers[i];
        }
    }
    console.log(max + next_max);
    //TODO: Write your Code here
}



largestPairSum(arr);
