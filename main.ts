input.onButtonPressed(Button.A, function () {
    basic.showString("" + input.temperature() + "c")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (input.temperature() + 273) + "k")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.temperature() + 23) + "f")
})
