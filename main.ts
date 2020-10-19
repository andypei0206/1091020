let x = 0
let y = 4
y += 4
basic.forever(function () {
    while (y >= 0) {
        led.plot(x, y)
        basic.pause(500)
        if (y % 2 == 0) {
            if (x > 0) {
                x += -1
            } else {
                y += -1
            }
        } else {
            if (x < 4) {
                x += 1
            } else {
                y += -1
            }
        }
    }
})
