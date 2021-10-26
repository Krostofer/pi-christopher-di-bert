let Pi_Display = 0
input.onButtonPressed(Button.A, function () {
    if (Pi_Display == 1) {
        control.reset()
    }
    basic.showLeds(`
        . . . . .
        # # # # #
        # # . # .
        . # . # .
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    Pi_Display = 1
    basic.showString("3.1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899 8628034825 3421170679. ")
})
