function Rot_v () {
    mouse.movexy(-127, 0)
    mouse.movexy(-127, 0)
    mouse.movexy(-127, 0)
    mouse.movexy(-127, 0)
    mouse.movexy(-127, 0)
    mouse.movexy(-127, 0)
    mouse.movexy(-127, 0)
    mouse.movexy(-127, 0)
    mouse.movexy(-127, 0)
}
input.onButtonPressed(Button.A, function () {
    if (run == 0) {
        run = 1
        time_mark = control.millis() - 60000
    } else {
        run = 0
    }
})
function Storage () {
    Rot_v()
    basic.pause(500)
    keyboard.sendString("e")
    basic.pause(2500)
    absmouse.movexy(22500, 10000)
    basic.pause(500)
    absmouse.click()
    basic.pause(500)
    absmouse.movexy(6000, 16000)
    absmouse.click()
    absmouse.click()
    absmouse.movexy(13500, 20128)
    absmouse.click()
    basic.pause(1000)
    keyboard.sendString(keyboard.rawScancode(41))
    basic.pause(1000)
    keyboard.sendString(keyboard.rawScancode(41))
    basic.pause(1000)
    Rot_h()
}
function Rot_h () {
    mouse.movexy(127, 0)
    mouse.movexy(127, 0)
    mouse.movexy(127, 0)
    mouse.movexy(127, 0)
    mouse.movexy(127, 0)
    mouse.movexy(127, 0)
    mouse.movexy(127, 0)
    mouse.movexy(127, 0)
    mouse.movexy(127, 0)
}
input.onButtonPressed(Button.B, function () {
    Rot_v()
    basic.pause(1000)
    Rot_h()
})
let time_mark = 0
let run = 0
keyboard.startKeyboardService()
mouse.startMouseService()
absmouse.startAbsoluteMouseService()
run = 0
basic.forever(function () {
    if (run == 0) {
        led.plot(0, 0)
    } else {
        led.unplot(0, 0)
        if (60000 < control.millis() - time_mark) {
            keyboard.sendString("e")
            basic.pause(1500)
            Storage()
            time_mark = control.millis()
        }
    }
})
