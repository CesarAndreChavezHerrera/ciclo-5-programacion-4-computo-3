const operation = (n1,n2,op,) =>{
    return op(n1,n2)
}

console.log(operation(5,6,(a,b)=>a+b))