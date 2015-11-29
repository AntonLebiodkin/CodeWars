/**
 * Created by anton on 27.11.15.
 */

nbYear(1500, 5, 100, 5000);

function nbYear(p0, percent, aug, p) {
    var p0 = p0;
    var years = 0;
    while (p0 < p)
    {
        p0 = p0 + p0*(percent/100) + aug;
        console.log(p0);
        years++;
    }
    return years;
}
