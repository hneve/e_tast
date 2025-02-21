bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . . .
        # . . . .
        . # . . .
        . . # . #
        . . . # .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.A, function () {
    if (run == 0) {
        run = 1
    } else {
        run = 0
    }
})
let run = 0
keyboard.startKeyboardService()
basic.forever(function () {
    if (run == 0) {
        led.plot(0, 0)
    } else {
        led.unplot(0, 0)
        keyboard.sendString("e")
        basic.pause(2000)
    }
})
