/**
 * Created by anton on 29.11.15.
 */
function collatz(n){
    var n = n;
    var gen = 0;
    while(n != 1){
        (n % 2 === 0) ? (n /= 2) : (n = n * 3 + 1);
        gen++;
    }
    return gen;
}
collatz(20);