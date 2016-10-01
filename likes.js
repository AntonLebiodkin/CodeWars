// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
// pictures or other items. We want to create the text that should be displayed next to such an item.

function likes(names) {
  var likeString = '';
  if (names.length == 0){
    likeString = 'no one likes this';
  }
  else if (names && names.length == 1){
    likeString = names[0] + ' likes this';
  }
  else if (names && names.length < 4) {
    var lastName = names[names.length - 1]
    likeString = names.splice(0, names.length - 1).join(', ') + ' and ' + lastName + ' like this';
  }
  else if (names && names.length >= 4) {
    likeString = names.slice(0, 2).join(', ') + ' and ' + (names.length - 2) + ' others like this';
  }
  return likeString;
}
