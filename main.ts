let diceroll = 0
function rollWait () {
    basic.showLeds(`
        . . . . .
        . # # . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . # .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # . . .
        . # . . .
        . . . . .
        `)
}
function roll2 () {
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . # .
        . . . . .
        `)
    basic.pause(10000)
    basic.clearScreen()
}
function roll1 () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(10000)
}
function rollStart () {
    music.playMelody("E B C5 A B G A F ", 150)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("???")
}
function roll5 () {
    basic.showLeds(`
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.pause(10000)
    basic.clearScreen()
}
function roll3 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `)
    basic.pause(10000)
    basic.clearScreen()
}
function roll6 () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # . . .
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        # # . . .
        `)
    basic.showLeds(`
        . # # . .
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . # # . .
        . # # . .
        . # . . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # . .
        . # # . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        . # # . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # # . .
        . # # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # . . .
        . # # . .
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # . . .
        . # . # .
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # . # .
        . # . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
    basic.pause(10000)
    basic.clearScreen()
}
function roll4 () {
    basic.showLeds(`
        . . # . .
        . . . . .
        # . . . #
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        . . . . #
        . . . . .
        # . . . .
        . . . # .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . # . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . #
        . # . . .
        . . . . .
        . # . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `)
    basic.pause(10000)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    rollStart()
    for (let index = 0; index < 2; index++) {
        diceroll = randint(0, 6)
        if (diceroll == 1) {
            roll1()
        } else if (diceroll == 2) {
            roll2()
        } else if (diceroll == 3) {
            roll3()
        } else if (diceroll == 4) {
            roll4()
        } else if (diceroll == 5) {
            roll5()
        } else if (diceroll == 6) {
            roll6()
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    rollStart()
    diceroll = randint(0, 6)
    if (diceroll == 1) {
        roll1()
    } else if (diceroll == 2) {
        roll2()
    } else if (diceroll == 3) {
        roll3()
    } else if (diceroll == 4) {
        roll4()
    } else if (diceroll == 5) {
        roll5()
    } else if (diceroll == 6) {
        roll6()
    }
})
