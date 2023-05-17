

const randomNumber = Math.floor(Math.random() * 1000);

console.log("Загаданно :", randomNumber)

while (true ) {

    let tryNumber = prompt("Введите число от 0 до 1000. (для выхода q)")
    
    if (tryNumber == "q"){
        break
    }

    tryNumber = +tryNumber

    if (isNaN(tryNumber)) {
        alert("Это не число !")
    } else if (tryNumber == randomNumber) {
        alert ("Вы угадали");
        break
    } else if (tryNumber > randomNumber) {
        alert ("Загаданное число  меньше")
    } else {
        alert("Загаданное число больше")
    }

    
}