/**
 * Created by anton on 25.11.15.
 */

function unusedDigits()
{

    var concatStr = '';
    for (var item in unusedDigits.arguments) {
        concatStr += '' + unusedDigits.arguments[item];
    }
    console.log(concatStr);

    var usedNumbers = new Set();
    for (var i = 0; i < concatStr.length; i++)
    {
        usedNumbers.add(concatStr[i].toString());
    }

    var resStr = '';
    for (var i = 0; i <= 9; i++){
        if (!usedNumbers.has(i.toString())){
            resStr += i.toString();
        }
    }
    console.log(resStr);
    return resStr;
}
unusedDigits(12, 34, 56, 78, 53, 122125, 124040142215);