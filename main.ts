function song () {
    while (index <= Song_1.length) {
        music.playTone(Song_1[index], music.beat(BeatFraction.Half))
        basic.pause(10)
        index += 1
        if (index == Song_1.length) {
            basic.pause(10000)
            index = 0
        }
    }
}
function candle () {
    rest_of_candle.clear()
    current_candle_strip = Candle_strip.range(0, randint(0, candle_LED - 1 + 1) + 1)
    current_candle_strip.showColor(candle_colors[randint(0, 1)])
    basic.pause(randint(0, 41) + 80)
}
function eyes () {
    while (index1 <= eye_colors.length - 1) {
        for (let index22 = 0; index22 <= 255; index22++) {
            eye_strip.setBrightness(index22)
            eye_strip.showColor(eye_colors[index1])
            basic.pause(5)
        }
        for (let index23 = 0; index23 <= 255; index23++) {
            eye_strip.setBrightness(255 - index23)
            eye_strip.showColor(eye_colors[index1])
            basic.pause(5)
        }
        index1 += 1
        if (index1 == 5) {
            index1 = 0
        }
    }
}
let index1 = 0
let current_candle_strip: neopixel.Strip = null
let index = 0
let Song_1: number[] = []
let rest_of_candle: neopixel.Strip = null
let eye_colors: number[] = []
let candle_colors: number[] = []
let eye_strip: neopixel.Strip = null
let Candle_strip: neopixel.Strip = null
let candle_LED = 0
let index2 = 0
let Number_LEDs = 8
candle_LED = 4
let Full_LED_strip = neopixel.create(DigitalPin.P1, Number_LEDs, NeoPixelMode.RGB)
Candle_strip = Full_LED_strip.range(0, candle_LED)
eye_strip = Full_LED_strip.range(candle_LED, Number_LEDs - candle_LED)
candle_colors = [neopixel.rgb(255, 80, 0), neopixel.rgb(255, 150, 0)]
eye_colors = [
neopixel.colors(NeoPixelColors.Red),
neopixel.colors(NeoPixelColors.Green),
neopixel.colors(NeoPixelColors.Blue),
neopixel.colors(NeoPixelColors.Purple),
neopixel.colors(NeoPixelColors.Yellow)
]
rest_of_candle = Candle_strip.range(1, candle_LED - 1)
music.setTempo(136)
let cs6 = 1109
let fs5 = 740
let d6 = 1175
let c6 = 1047
let f5 = 698
let b5 = 988
let e5 = 659
let bf5 = 932
let ef5 = 622
let b4 = 494
let g5 = 784
Song_1 = [
cs6,
fs5,
fs5,
cs6,
fs5,
fs5,
cs6,
fs5,
d6,
fs5,
cs6,
fs5,
fs5,
cs6,
fs5,
fs5,
cs6,
fs5,
d6,
fs5,
cs6,
fs5,
fs5,
cs6,
fs5,
fs5,
cs6,
fs5,
d6,
fs5,
cs6,
fs5,
fs5,
cs6,
fs5,
fs5,
cs6,
fs5,
d6,
fs5,
cs6,
fs5,
fs5,
cs6,
fs5,
fs5,
cs6,
fs5,
d6,
fs5,
cs6,
fs5,
fs5,
cs6,
fs5,
fs5,
cs6,
fs5,
d6,
fs5,
c6,
f5,
f5,
c6,
f5,
f5,
c6,
f5,
cs6,
f5,
c6,
f5,
f5,
c6,
f5,
f5,
c6,
f5,
cs6,
f5,
cs6,
fs5,
fs5,
cs6,
fs5,
fs5,
cs6,
fs5,
d6,
fs5,
cs6,
fs5,
fs5,
cs6,
fs5,
fs5,
cs6,
fs5,
d6,
fs5,
c6,
f5,
f5,
c6,
f5,
f5,
c6,
f5,
cs6,
f5,
c6,
f5,
f5,
c6,
f5,
f5,
c6,
f5,
cs6,
f5,
b5,
e5,
e5,
b5,
e5,
e5,
b5,
e5,
c6,
e5,
b5,
e5,
e5,
b5,
e5,
e5,
b5,
e5,
c6,
e5,
bf5,
ef5,
ef5,
bf5,
ef5,
ef5,
bf5,
ef5,
b5,
ef5,
bf5,
ef5,
ef5,
bf5,
ef5,
ef5,
bf5,
ef5,
b5,
ef5,
b5,
e5,
e5,
b5,
e5,
e5,
b5,
e5,
c6,
e5,
b5,
e5,
e5,
b5,
e5,
e5,
b5,
e5,
c6,
e5,
bf5,
ef5,
ef5,
bf5,
ef5,
ef5,
bf5,
ef5,
b5,
ef5,
bf5,
ef5,
ef5,
bf5,
ef5,
ef5,
bf5,
ef5,
b5,
ef5,
fs5,
b4,
b4,
fs5,
b4,
b4,
fs5,
b4,
g5,
b4,
fs5,
b4,
b4,
fs5,
b4,
b4,
fs5,
b4,
g5,
b4,
fs5,
b4,
b4,
fs5,
b4,
b4,
fs5,
b4,
g5,
b4,
fs5,
b4,
b4,
fs5,
b4,
b4,
fs5,
b4,
g5,
b4,
fs5,
b4,
b4,
fs5,
b4,
b4,
fs5,
b4,
g5,
b4,
fs5,
b4,
b4,
fs5,
b4,
b4,
fs5,
b4,
g5,
b4,
fs5,
b4,
b4,
fs5,
b4,
b4,
fs5,
b4,
g5,
b4,
fs5,
b4,
b4,
fs5,
b4,
b4,
fs5,
b4,
g5,
b4,
fs5,
b4,
b4,
fs5,
b4,
b4,
fs5,
b4,
g5,
b4
]
basic.forever(function () {
    candle()
})
basic.forever(function () {
    eyes()
})
basic.forever(function () {
    song()
})
