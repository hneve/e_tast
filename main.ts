input.onButtonPressed(Button.A, function () {
    if (run == 0) {
        run = 1
    } else {
        run = 0
    }
})
let run = 0
keyboard.startKeyboardService()
let now = control.millis()
basic.forever(function () {
    if (run == 0) {
        led.plot(0, 0)
        now = control.millis()
    } else {
        led.unplot(0, 0)
        if (control.millis() > now + 2000) {
            keyboard.sendString("e")
            now = control.millis()
        }
    }
})
