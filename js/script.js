let num = +prompt("Введіть число", "4")
.trim();
let degree = +prompt("Введіть ступінь в яку требе звести", "4")
.trim();

if (num == 0 && degree <= 0 ) {
    document.write("Неможливо звести 0 в ступені менше 1" + "</br>");
} else if (degree == 0) {
    num = 1;
    document.write(`${num} <sup>${degree}</sup> = ` + (num) + "</br>");
} else if(degree < 0){
    function powMinus(num, degree) {
        degree *= -1; 
        let result = 1/num;
        for (let i = 1; i < degree; i++) {
            result *= 1/num;
        }
        return result;
    }
    document.write(`${num} <sup>${degree}</sup> = ` + powMinus(num, degree) + "</br>");

} else {
    function pow(num, degree) {
        let result = num;
        for (let i = 1; i < degree; i++) {
            result *= num;
        }
        return result;
    }
    document.write(`${num} <sup>${degree}</sup> = ` + pow(num, degree) + "</br>");
}

//--------------------2----------------------------
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5 );
document.write(array + "</br>");

function removeElement (array, item){
    for(let i = 0; i < array.length; i++){
        if(array[i] == item) {
            array.splice(i, 1);
        }
    }
}

//------------------------3-----------------------
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
document.write(key); 

function generateKey(length, characters) {
    let randomSumbol = '';
    for (let i = 0; i < length; i++){
        randomSumbol += characters[Math.round(Math.random() * (characters.length - 1))];
    }
    return randomSumbol;
}