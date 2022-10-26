input.onButtonPressed(Button.A, function () {
    while (xvalue <= 4) {
        while (xvalue <= 4) {
            led.plot(xvalue, yvalue)
            xvalue += 1
            basic.pause(500)
        }
        yvalue += 1
        xvalue = 0
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(xvalue, yvalue)
            basic.pause(200)
            xvalue += 1
        }
        yvalue += 1
        xvalue = 0
    }
})
let yvalue = 0
let xvalue = 0
xvalue = 0
yvalue = 0
basic.forever(function () {
	
})
