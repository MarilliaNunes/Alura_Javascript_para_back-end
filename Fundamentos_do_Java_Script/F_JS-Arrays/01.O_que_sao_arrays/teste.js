let myString = '84529099'

let myArray = myString.split('')

console.log(myArray)

let newString = myArray.splice(4,0,'.')

console.log(newString)

console.log('formatnumber', formatNumber(84529099))

function formatNumber(number)
{
    number = number.toFixed(2) + '';
    console.log(number)
    x = number.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}