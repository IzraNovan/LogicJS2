var n = 9
var s = ''
// n - y - 1 <= x || y >= x
// x >= y || n - x - 1 >= y

for (var x = 0; x < n; x++) {
    for (var y = 0; y < n; y++) {
        if (x == y) {
            s += `${x * 2 + 1} &nbsp`
        } else if (n - y - 1 == x) {
            s += `${y * 2} &nbsp`

        } else {
            if (n - y - 1 <= x || y >= x) {
                s += '- &nbsp'
            } else {
                s += 'A'
            }

            if (x >= y || n - x - 1 >= y) {
                s += '- &nbsp'
            } else {
                s += 'B '
            }
        }
    }
    s += '<br>'
}
document.write(s)