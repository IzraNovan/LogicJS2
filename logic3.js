var n = 9
var s = ''

for (var x = 0; x < n; x++) {
    for (var y = 0; y < n; y++) {
        if (y == 0) {
            s += '* &nbsp'
        } else {
            s += '- &nbsp'
        }

    }
    s += '<br>'
}
document.write(s)