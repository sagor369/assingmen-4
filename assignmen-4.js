
function mindGame(positiveNumber) {
    let numbers = positiveNumber;
    if (typeof numbers !== 'number') {
        return 'please valid this number'
    }
    if (numbers > 0) {
        const multiplication = numbers * 3;
        const addition = multiplication + 10;
        const divide = addition / 2;
        const subtraction = divide - 5;
        return subtraction;
    }
    else{return 'this number is negative'}
}
let total = mindGame(33);
console.log(total);


function evenOdd(strName){
    if(typeof strName !== 'string'){
        return 'please valid this letter'
    }
    let element = strName.split('');
    if(element.length % 2 === 0){
        return 'even'
    }
    else{return 'odd'}

}


let total1 = evenOdd('Batch7')
console.log(total1)

function isLGSeven(numbers){
    const number = numbers;
    if(typeof number !== 'number'){
        return 'The input you have given is not correct, please enter the correct number'
    }
    if(number < 7){
        const sub = number - 7;
        return sub;

    }
    else {
        const sum = number * 2;
        return sum;
    }
}
let total2 = isLGSeven(15)
console.log(total2)


function findingBadData(findData){
    const data = findData;
    if(Array.isArray(data) === true){      
        let count = 0;
        for(let i = 0 ; i< data.length ; i++){
            let find = data[i];
            if(find < 0){
                count++
            }
        }
        return count;
    }
    else return 'The data you have given is not a correct data'
}

let sahed = [50, 20, -65, 51, -2, 45, -4, -5]
let total3 = findingBadData(sahed)
console.log(total3)

function gemsToDiamond(friend1, friend2, friend3){
    if(typeof friend1 !== 'number' || typeof friend2 !== 'number' || typeof friend3 !== 'number'){
        return 'The input you have given is not correct, please enter the correct number'
    }
    const fastFriend1 = friend1 * 21;
    const secondFriend2 = friend2 * 32;
    const thirdFriend3 = friend3 * 43;
    const totalGems = fastFriend1 + secondFriend2 + thirdFriend3;
    const gemsConvert = 1000*2;
    if(totalGems > gemsConvert){
        const sumGems = totalGems - gemsConvert;
        return sumGems;
    }
    else {
        return totalGems;
    }

}

let total4 = gemsToDiamond(100, 5, 1)
console.log(total4)
