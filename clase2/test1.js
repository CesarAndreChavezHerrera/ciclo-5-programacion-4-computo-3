function main(){
    setTimeout(()  => {
       console.log(1)
    },5);
    setTimeout(()  => {
        console.log(2)
        test("a")
     },5);
     test("b")
}
function test(a){
    console.log(a)
}

main()
test("x")