// const para = document.querySelector('p')
//
// para.addEventListener('click', updateName)
//
// function updateName() {
//     let name = prompt('Enter a new name')
//     para.textContent = 'Player 1: ' + name
// }
// let message
// message = 'Hello!'
//
// alert(message)

//
// let year = prompt('В каком году была опубликована спуцификация  ES2015')
//
// if (year < 3) {
//     alert('Здравствуй малыш')
// } else if (year < 18) {
//     alert('Привет')
// } else {
//     alert('Какой необычный возраст!')
// }
//
//
// let num1 = Number(prompt("Введите первое число"))
// let oper = prompt("Выберите действие \n+\n-\n*\n/")
// let num2 = Number(prompt("Введите второе число"))
//
// const calc = () => {
//     let result
//     (isNaN(num1) || isNaN(num2)) ?
//         alert('введите только числа') :
//         true
//     switch (oper) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             (num2 === 0) ? result = "ошибка" : result = num1 / num2;
//             break;
//         default:
//             alert("Выберите правильное действие")
//     }
//     alert(result)
// }
// calc()
class TrafficLight {
    constructor() {
        this.redlight = document.querySelector('#red')
        this.yellowlight = document.querySelector('#yellow')
        this.greenlight = document.querySelector('#green')
    }


    changeLight(color) {
        this.redlight.style.background = 'white'
        this.yellowlight.style.background = 'white'
        this.greenlight.style.background = 'white'

        if (color === "red") {
            this.redlight.style.background = 'red'
        } else if (color === 'yellow') {
            this.yellowlight.style.background = 'yellow'
        }  else if (color === 'green') {
            this.greenlight.style.background = 'green'
        }
    }
}


const light = new TrafficLight()

const color =  prompt("Выберите цвет светофора: red, yellow, green")

light.changeLight(color)







// const array = [1,2,3,4,5]


// let result = array.map(function (elem) {
//     return elem += 5;
// });
// console.log(array)
// console.log(result)
// const  words = ["geektech1","geektech2","geektech3tewyrds","geektech4","geektech5","geektech6"]
// const  result = words.filter(word => word.length > 9)
//
// console.log(result)
//


//forEach
// const array1 = ["a","b","c"]
//
// array1.forEach(elem => console.log(elem) )

//reduce



