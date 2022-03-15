var n = 9
var s = ''

for (var x = 0; x < n; x++) {
    for (var y = 0; y < n; y++) {
        if (n - x - 1 == y) {
            s += `${y * 2}`
        } else {
            s += '- &nbsp'
        }
    }
    s += '<br>'
}
document.write(s)