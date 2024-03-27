let arr = []
function mult(num){
    for(let c = 0; c < num; c++){
        if(c*3 < num){
            arr.push(c*3)
        }
    }
    console.log(arr)
}
mult(1000)