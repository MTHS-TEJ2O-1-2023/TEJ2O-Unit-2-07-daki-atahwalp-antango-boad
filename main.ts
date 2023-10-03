/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Sep 2023
 * This program plays Cookie Clicker on a MicroBit
*/

basic.clearScreen()

// variables
let numberOfCookiesPressed: number
numberOfCookiesPressed = numberOfCookiesPressed + 1

// on "A" button pressed

numberOfCookiesPressed = 0

input.onButtonPressed(Button.A, function () {

  numberOfCookiesPressed = numberOfCookiesPressed + 1
  basic.showNumber(numberOfCookiesPressed)

})

// on "B" button pressed

input.onButtonPressed(Button.B, function () {

  numberOfCookiesPressed = 0
  basic.showNumber(numberOfCookiesPressed)

})
