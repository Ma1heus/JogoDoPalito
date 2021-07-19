input.onButtonPressed(Button.A, function () {
    aux += 1
    if (aux == 0) {
        basic.showNumber(jog)
        apostaJog = jog
    } else if (aux == aux4) {
        jog = 0
        aux = 0
        apostaJog = jog
        basic.showNumber(jog)
    } else {
        jog += 1
        apostaJog = jog
        basic.showNumber(jog)
    }
})
input.onButtonPressed(Button.AB, function () {
    maq = randint(0, aux3)
    basic.showNumber(maq)
    basic.pause(5000)
    apostaMaq = randint(maq, maq + (aux4 - 1))
    basic.showNumber(apostaMaq)
    basic.pause(5000)
    soma = jog + maq
    if (apostaJog == apostaMaq || soma != apostaJog && soma != apostaMaq) {
        basic.showString("N")
    } else if (apostaJog != soma && apostaMaq == soma) {
        aux3 += -1
        basic.showString("M")
    } else if (apostaJog == soma && apostaMaq != soma) {
        aux4 += -1
        basic.showString("J")
    }
    if (aux3 == 0) {
        basic.showString("MAQUINA VENCE")
    } else if (aux4 == 1) {
        basic.showString("JOGADOR VENCE")
    }
})
input.onButtonPressed(Button.B, function () {
    aux2 += 1
    if (aux2 == 0) {
        basic.showNumber(apostaJog)
    } else if (aux2 == aux4) {
        aux2 = 0
        apostaJog = jog
        basic.showNumber(apostaJog)
    } else {
        apostaJog += 1
        basic.showNumber(apostaJog)
    }
})
let soma = 0
let apostaMaq = 0
let maq = 0
let apostaJog = 0
let aux4 = 0
let aux3 = 0
let aux2 = 0
let aux = 0
let jog = 0
jog = 0
aux = -1
aux2 = -1
aux3 += 3
aux4 = 4
apostaJog = 0
