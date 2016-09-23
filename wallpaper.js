// https://www.codewars.com/kata/567501aec64b81e252000003/train/javascript
// John wants to decorate a room with wallpaper. 
// He has been said that making sure he has the right amount 
// of wallpaper is more complex than it sounds. He wants a fool-proof 
// method to getting it right.

// John knows that the rectangular room has a length of l meters,
//  a width of w meters, a height of h meters. 
// The standard width of the rolls he wants to buy is 52 centimeters. 
// The length of a roll is 10 meters. He bears in mind however, 
// that it’s best to have an extra length of wallpaper handy in case of mistakes 
// or miscalculations so he wants to buy a length 15% greater than the one he needs.


// Last time he did these calculations he caught a headache 
// so could you help John? Your function wallpaper(l, w, h) 
// should return as a plain English word in lower case 
// the number of rolls he must buy.

function wallpaper(l, w, h) {
    // room square + 15%
    var realSqr = 2 * h * (w + l);
    if (!l || !w || !h) realSqr = 0;
    const rollWidth = 0.52; //meters
    const rollLength = 10; //meters
    var rollCount = Math.ceil(realSqr / (rollWidth * rollLength));
    return convert(rollCount);
}

var ones=['zero','one','two','three','four','five','six','seven','eight','nine'];
var tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

// NUM MAX = 20
// http://stackoverflow.com/questions/5529934/javascript-numbers-to-words
function convert(num){
    if (num<10) return ones[num];
    else if (num>=10 && num<20) return teens[num-10];
    else{
        return tens[Math.floor(num/10)]
    }
}