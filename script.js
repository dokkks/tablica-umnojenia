

let userNum = +prompt('введите число от 1 до 10')

for (let i = 0; i <= 10; i++) {
    if(i <= 10 && i > 0){
        console.log(`${userNum} * ${i} = ${userNum* i}`);
    }else if(i<0){
        console.log('error');
    }
    
}




























