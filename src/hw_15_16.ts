const pattern1: string = "*-";
const pattern2: string = "--";


// Task 0. Модифицировать функцию подсчета стоимости товаров из прошлого задания. Теперь для расчета стоимости, товары должны соответствовать хотя бы одному из условий:
//- товар в наличии
//- стоимость товаров одного вида выше 500
//Пример входных данных:
//onst products = [
//{ name: 'A', price: 100, quantity: 2, inStock: true },
//{ name: 'B', price: 40, quantity: 5, inStock: false },
//{ name: 'C', price: 10, quantity: 1, inStock: true },
//{ name: 'D', price: 200, quantity: 3, inStock: false }
//]; 
console.log(pattern2.repeat(23) + "Task 0." + pattern2.repeat(23));

const products = [
    { name: 'A', price: 100, quantity: 2, inStock: true },
    { name: 'B', price: 40, quantity: 5, inStock: false },
    { name: 'C', price: 10, quantity: 1, inStock: true },
    { name: 'D', price: 200, quantity: 3, inStock: false }
];

function cartPriceCount(arrObj: {name: string, price: number, quantity: number, inStock: boolean}[]) {
    const totalCartPrice = arrObj.reduce((acc, obj) => {
        if(obj.inStock === true || obj.price * obj.quantity > 500) {
            return acc + (obj.price * obj.quantity);
        } 
        return acc;
    }, 0);

    if (totalCartPrice === 0) {
        throw new Error("в корзине нет товаров удовлетворящих условиям");
    }
    return totalCartPrice  
};

console.log("стоимость товаров в корзине удовлетворяющих условиям равна:", cartPriceCount(products));


// Task 2. У нас поменялись требования к паролю. Юзерам выслана ссылка на смену пароля. Теперь когда они зайдут к нам на сайт, мы должны проверить, 
// что их новый пароль соответствует следующим требованиям:
//      - минимум 8 символов                            | латинские буквы, максимум 15
//      - минимум одна заглавная буква      
//      - минимум одна цифра
//      - минимум один специальный символ из набора     | ^!@_$&*()-+
// а. Создайте функцию, которая будет принимать на вход строку (пароль) и возвращать true, если пароль соответствует требованиям и false, если не соответствует.
// б. Нашим аналитикам интересно, какие цифры чаще всего используются юзерами в паролях. модифицируйте функцию так, чтобы она вместо булевого значения возвращала 
// объект по следующим примерам: 
//   input: 'Password123!' -> output: { isValid: true, digits: [1, 2, 3] }
//   input: 'myC00!Pa55w0rd' -> output: { isValid: true, digits: [0, 0, 5, 5, 0] }
console.log(pattern2.repeat(23) + "Task 2." + pattern2.repeat(23));

//пароль содержит только буквы латинского алфавита
function isValidPassword(password: string) {
    const symbolAmount = /^.{8,15}$/.test(password);
    const hasCapital = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialSymbol = /[\^!@_$&*()-\+]/.test(password);
    const outputPasswordNums = password.replace(/\D/g, "");   //вернет строку цифр

    const result = symbolAmount && hasCapital && hasDigit && hasSpecialSymbol;
    // console.log("password status:", result);

    if(result === true) {
        const resultOutput = {isValid: result, digits: outputPasswordNums.split("").map(Number)}
        console.log(resultOutput)
        return resultOutput
    } else {
        throw new Error("the password is not valid. try a new one")
    } 
}

// isValidPassword("@2345F7");
// isValidPassword("1K34567^");
// isValidPassword("12345678901234");
// isValidPassword("123456789012345");
// isValidPassword("D1234567890$");
isValidPassword("Password123!");
isValidPassword("myC00!Pa55w0rd");
isValidPassword("Pa2ssword!");


// Task 1. Для оплаты корпоративного инструмента нам нужно узнать сколько у нас пользователей 
// с разными ролями, т.к. разные роли нуждаются в разных видах подписки
//На входе у нас .json файл с данными пользователей содержащий свойства: id, username, role
//На выходе нам нужен объект вида:
//{
//role_1: {
//count: 5,
//users: [{id, username}, {id, username}, ...]
//},
//role_1: {
//count: 20,
//users: [{id, username}, {id, username}, ...]
//},
//...
//}
console.log(pattern2.repeat(23) + "Task 1." + pattern2.repeat(23));

// import fs from "fs"  

const fs = require("fs")
const dataRole = fs.readFileSync("C:/Users/maryia_bi/QAJ14-onl_Maryia_Bilaya/src/role.json", "utf-8");
const dataRoleParse = JSON.parse(dataRole);

// type Roles = {
//     role: string,
//     count: number,
//     users: {id: number, username: string}[]
// }

//понимаю что решение не гибкое, но что-то совсем мысли в голову не шли, как по другому реализовать
function rolesCount(fileData: {id: number, username: string, role: string}[]) {

    const adminAmount = fileData.filter(obj => obj.role === "admin");
    const guestAmount = fileData.filter(obj => obj.role === "guest");
    const editorAmount = fileData.filter(obj => obj.role === "editor");
    const viewerAmount = fileData.filter(obj => obj.role === "viewer");
    // console.log(viewerAmount);

    const resultObj = {
        admin: {
            count: adminAmount.length,
            users: adminAmount.map(el => ({id: el.id, username: el.username}))
        },
        guest: {
            count: guestAmount.length,
            users: guestAmount.map(el => ({id: el.id, username: el.username}))
        },
        editor: {
            count: editorAmount.length,
            users: editorAmount.map(el => ({id: el.id, username: el.username}))
        },
        viewer: {
            count: viewerAmount.length,
            users: viewerAmount.map(el => ({id: el.id, username: el.username}))
        }
    }
    console.log(JSON.stringify(resultObj.admin) + "\n",
                JSON.stringify(resultObj.guest) + "\n",
                JSON.stringify(resultObj.editor) + "\n",
                JSON.stringify(resultObj.viewer) + "\n"
);
    return resultObj    
}

rolesCount(dataRoleParse);











