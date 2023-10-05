"""
Created by: Daki A.B
Created on: Oct 2023
This module is a Cookie Clicker on MicroBit
"""

from microbit import *


display.clear()
display.show(Image.HAPPY)
number_of_cookies_pressed = 0

# When button "A" and "B" is pressed

while True:
    if button_a.is_pressed():
        number_of_cookies_pressed = number_of_cookies_pressed + 1
        display.show(str(number_of_cookies_pressed))

while True:
    if button_b.is_pressed():
        number_of_cookies_pressed = 0
        display.show(str(number_of_cookies_pressed))
