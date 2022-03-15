var n = 9
var s = ''
// n - x - 1 >= y

for (var x = 0; x < n; x++) {
    for (var y = 0; y < n; y++) {
        if (n - x - 1 > y || y > x) {
            s += '- &nbsp'
        } else {
            s += '* &nbsp'
        }
    }
    s += '<br>'
}
document.write(s)