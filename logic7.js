var n = 9
var s = ''

for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
        if (x == y) {
            s += '* &nbsp';
        } else {
            s += '- &nbsp'
        }
    }
    s += '<br>'
}
document.write(s)