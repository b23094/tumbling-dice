function flash2 () {
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
}
function flash3 () {
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
}
function flash6 () {
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
}
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
function flash5 () {
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
function flash1 () {
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
}
function flash4 () {
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
}
input.onButtonPressed(Button.B, function () {
    diceroll = randint(1, 6)
    rollStart()
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
    diceroll2 = randint(1, 6)
    if (diceroll2 == 1) {
        roll1()
    } else if (diceroll2 == 2) {
        roll2()
    } else if (diceroll2 == 3) {
        roll3()
    } else if (diceroll2 == 4) {
        roll4()
    } else if (diceroll2 == 5) {
        roll5()
    } else if (diceroll2 == 6) {
        roll6()
    }
    for (let index = 0; index < 3; index++) {
        if (diceroll == 1) {
            flash1()
        } else if (diceroll == 2) {
            flash2()
        } else if (diceroll == 3) {
            flash3()
        } else if (diceroll == 4) {
            flash4()
        } else if (diceroll == 5) {
            flash5()
        } else if (diceroll == 6) {
            flash6()
        }
        if (diceroll2 == 1) {
            flash1()
        } else if (diceroll2 == 2) {
            flash2()
        } else if (diceroll2 == 3) {
            flash3()
        } else if (diceroll2 == 4) {
            flash4()
        } else if (diceroll2 == 5) {
            flash5()
        } else if (diceroll2 == 6) {
            flash6()
        }
    }
    basic.pause(3000)
    diceroll = 0
})
input.onGesture(Gesture.Shake, function () {
    diceroll = randint(1, 6)
    rollStart()
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
    diceroll = 0
})
let diceroll2 = 0
let diceroll = 0
diceroll = 0
basic.forever(function () {
    while (diceroll == 0) {
        rollWait()
    }
})
