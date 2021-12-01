radio.onReceivedString(function (receivedString) {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
radio.setGroup(216)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("911")
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("CANCELED")
        radio.sendString("STOP ALARM")
    }
})
