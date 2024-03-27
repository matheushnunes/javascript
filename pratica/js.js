let arr = []
let soma = 0
function mult(num) {
    for(let c = 0; c < num; c++){
        if(c % 3 == 0 || c % 5 == 0){
            arr.push(c)
        }
    }
    for(let c of arr){
        soma += c
    }
    console.log(soma)
}
mult(49)