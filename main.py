def on_button_pressed_a():
    basic.show_leds("""
        . . . . .
                # # # # #
                # # . # .
                . # . # .
                . # . # .
    """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_string("3.1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899 8628034825 3421170679. ")
input.on_button_pressed(Button.B, on_button_pressed_b)
