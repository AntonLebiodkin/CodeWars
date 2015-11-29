/**
 * Created by anton on 29.11.15.
 */
function hasTwoCubeSums(n) {
    var visits = 0;
    var cubes = [];

    for (var i = 1; Math.pow(i,3) < n; i++){
        cubes.push(Math.pow(i,3));
    }
    //if visits === 2 I've solved our task
    for (var i = 0; i < cubes.length - 1; i++){
        for(var j = i + 1; j < cubes.length; j++)
        {
            if (cubes[i] + cubes[j] === n){
                cubes.splice(i, 1);
                cubes.splice(j, 1);
                //j--;
                //i--;
                visits++;
                //console.log(cubes.length);
            }
        }
    }
    if (visits >= 2){
        return true;
    } else {
        return false;
    }
}
console.log(hasTwoCubeSums(1729));
