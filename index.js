let month = prompt('1-12')
let spring = '3,4,5'.split(",")
let summer = '6,7,8'.split(",")
let autumn = '9,10,11'.split(",")
let winter = '12,1,2'.split(",")

if (spring.includes(month)) {
    alert("весна")
} else if (summer.includes(month)) {
    alert("лето")
} else if (autumn.includes(month)) {
    alert("осень")
} else if (winter.includes(month)) {
    alert("зима")
} else {
    alert("Ошибка")
}

let monthDecada = prompt('1-31')
let decadaOne = '1,2,3,4,5,6,7,8,9,10'.split(",")
let decadaTwo = '11,12,13,14,15,16,17,18,19,20'.split(",")
let decadaThree = '21,22,23,24,25,26,27,28,29,30,31'.split(",")

if (decadaOne.includes(monthDecada)) {
    alert("Первая декада")
} else if (decadaTwo.includes(monthDecada)) {
    alert("Вторая декада")
}  else if (decadaThree.includes(monthDecada)) {
    alert("Третья декада")
} else {
    alert("Ошибка")
}

