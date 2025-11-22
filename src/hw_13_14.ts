const pattern1: string = "*-";
const pattern2: string = "--";


// Task 1. Создайте функцию, которая создает массив с 10 случайными числами и возвращает произведение 3 самых больших значений 
console.log(pattern2.repeat(23) + "Task 1." + pattern2.repeat(23));


function randomNums (value: number) {
    const randomNumbers: number[] = [];
    for (let n = 0; n < value; n++) {
        const rand = Math.floor(Math.random() * 100);       //случайное число от 0 до 99
        randomNumbers.push(rand);
    }
    console.log("созданный массив случайных чисел:", randomNumbers);

    const randomNumbersDesc = randomNumbers.sort((a, b) => b - a);       //сортировка массива по убыванию
    console.log("сортировка массива по убыванию:", randomNumbersDesc);

    const topThreeNum = randomNumbersDesc.slice(0,3);       //создаем массив из трех первых чисел (наибольших значений)
    console.log("массив из трех наибольших значений", topThreeNum)

    const taskResult = topThreeNum.reduce((acc, pos) => acc * pos, 1);      //перемножаем 3 наибольших значения
    console.log("произведение трех самых больших значения равно:", taskResult);
    return taskResult;
}

randomNums(10);


// Task 3. Создайте функцию для подсчета стоимости товаров в корзине. На входе функция принимает массив объектов со свойстами name, price, quantity
console.log(pattern2.repeat(23) + "Task 3." + pattern2.repeat(23));


class Goods { 
    name: string;
    price: number;
    quantity: number;
    
    constructor (name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

const eraserProduct = new Goods("eraser", 0.95, 30);
const penProduct = new Goods("pen", 1.36, 50);
const noteBook = new Goods("notebook", 5.63, 37);
const pencilBoxProduct = new Goods("pencilBox", 15.28, 11);
const bookProduct = new Goods("book", 31.18, 43);

const cartGoods = [eraserProduct, penProduct, noteBook, pencilBoxProduct, bookProduct];
console.log(cartGoods);

function cartPriceCount(myArrayObject: {name: string, price: number, quantity: number}[]) {
    const totalCartPrice = myArrayObject.reduce((acc, obj) => acc + (obj.price * obj.quantity), 0);
    console.log("стоимость товаров в корзине равна:", totalCartPrice);
    return totalCartPrice;
};


cartPriceCount(cartGoods);


// Task 4. Создайте функцию, которая будет принимать в себя массив значений и возвращать только те, в которых заданное (второй параметр, по умолчанию - 4) количество букв
console.log(pattern2.repeat(23) + "Task 4." + pattern2.repeat(23));
console.log(pattern2.repeat(22) + "Version 1." + pattern2.repeat(22));

const valueArray1 = ["house", "ro55555se", "hair", "elephant", "cat", "function", "weather", "bad", "dream", "school"];

function arrWordsWithFourChars1 (arr: string[], chars = 4) {
    if (arr.length === 0) {
        // console.log("проверьте содержимое исходного массива:", arr);
        throw new Error ("проверьте содержимое исходного массива");
    }
    const resultArray1 = [];
    for (let el of arr) {
        if (el.match(/[a-zA-Zа-яА-ЯёЁ]/g)?.length === chars) {
            resultArray1.push(el);
        }  
    }
    console.log("массив со словами, имеющими заданную длину:", resultArray1);
    return resultArray1;
}
 
arrWordsWithFourChars1(valueArray1);


console.log(pattern2.repeat(22) + "Version 2." + pattern2.repeat(22));

const valueArray2 = ["house", "rose", "ha54ir", "elephant", "cat", "function", "task", "weather", "bad", "dream", "school", "p1ens"];

function arrWordsWithFourChars2 (arr: string[], chars: number = 4) {
        if (arr.length === 0) {
        throw new Error ("проверьте содержимое исходного массива");
    }
    const resultArray2 = arr.filter(el => el.match(/[a-zA-Zа-яА-ЯёЁ]/g)?.length === chars);
    console.log("массив со словами, имеющими заданную длину букв:", resultArray2);
    return resultArray2;
}

arrWordsWithFourChars2(valueArray2);


// Task 0. Создайте функцию для эмуляции броска кубика. На входе - колчество граней. На выходе - результат броска. Реализация должна работать только со следующим 
// количеством граней (но в будущем должно быть легко расширить этот набор): 2, 4, 6, 8, 10, 12, 20, 100
console.log(pattern2.repeat(23) + "Task 0." + pattern2.repeat(23));

const validEdgeNumbers = [2, 4, 6, 8, 10, 12, 20, 100];

function diceRoll(edge: number) {
    if(!validEdgeNumbers.includes(edge)) {
        throw new Error("передано невалидное количество граней!!! введите новое значение")
    };
    const resultDiceRoll = Math.floor(Math.random() * edge) + 1;    //от 0 до edge включительно с округлением до ближайшего целого
    console.log(`результат броска кубика с количеством граней ${edge} = ${resultDiceRoll}`);
    return resultDiceRoll;
}


// diceRoll(6);
// diceRoll(15);
diceRoll(2);


// Task 2. Реализовать класс калькулятор, с минимум следующими методами: сложение, вычитание, умножение, деление. При желании можете 
// добавить еще какие-то методы на выбор (эта задача нам пригодится впоследствии)
console.log(pattern2.repeat(23) + "Task 2." + pattern2.repeat(23));

class Calculator {

    addition(...args: number[]) {
        return args.reduce((accum, value) => accum + value, 0)
    }

    subtraction(...args: number[]) {
        return args.reduce((accum, value) => accum - value)     //без initialValue в качетсве начального значения берется первый элемент
    }

    multiplication(value1: number, value2:number) {
        return value1 * value2
    }

    division(value1: number, value2: number) {
        if(value2 === 0) {
            throw new Error("деление на 0 запрещено!!!")
        }
        return value1 / value2
    }

    exponentation(value: number, exponent: number) {
        return Math.pow(value, exponent)
    }

    rootExtraction(value: number, degree: number) {
        return Math.ceil(Math.pow(value, 1 / degree))     //извлечение корня заданной степени
    }
}

const myCalc = new Calculator()
console.log("извлечение корня заданной степени", myCalc.rootExtraction(125, 3));
console.log("сложение", myCalc.addition(29, 4, 10, 7));
console.log("вычитание", myCalc.subtraction(12, 6, 2, 8));
console.log("умножение ", myCalc.multiplication(7, 7));
console.log("деление", myCalc.division(6, 2));
console.log("возведение в степень", myCalc.exponentation(5, 3));