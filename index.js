let array = [2, 4, 5, 1, 453, 89, 1234] // Оригинальный массив (очень много времени в среднем уходит): [2, 4, 5, 1, 453, 43, 32, 1234, 12, 213, 12, 342, 3]
let checksEnabled = true // Переменная, отображающая процент совпадения каждой вариации массива. Использует метод .sort(), встроенный в js только для целей изучения. Незначительно замедляет программу.
function random(max) {
    return Math.floor(Math.random() * max);
}

let i = 0
let comparisions = 0
let checks = 0

function check(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if ((array[i] > array[i + 1]) || (array.length < 2)) {
            // console.log((array[i] > array[i + 1]))
            return false
        }
    }
    if (array.length > 2) true
    else return false
}


function comparison(array, array1) {
    let similars = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array1[i]) similars++
    }
    return Number((similars / array.length) * 100).toFixed(2)
}


let outputArray = []
let originArray = Array.from(array)
while (check(outputArray) == false) {
    array = Array.from(originArray)
    outputArray = []
        while (array.length >= 1) {
            // console.log(array)
            outElement = random(array.length)
            outputArray[outputArray.length] = Number(array.splice(outElement, 1))
            comparisions++
        }
        if (checksEnabled == true) console.log('Пробуем вариант..: ' + outputArray + ' – сошлось на ' + comparison(originArray.sort(function(a, b) {return a - b;}), outputArray) + '%')
        else console.log('Пробуем вариант..: ' + outputArray)
    checks++
}

console.log('СОРТИРОВКА БОГО ЗАВЕРШЕНА!\nРЕЗУЛЬТАТ:\n' + outputArray)
console.log('Выполнено операций: '+ comparisions + ' (число всегда случайное)')
console.log('Выполнено сверок: '+ checks + ' (число всегда случайное)')
