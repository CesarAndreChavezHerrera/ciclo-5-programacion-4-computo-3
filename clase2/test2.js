function a(){

    function b(){
        setTimeout(()  => {
            console.log("b")
        })
    }
    
    function c(){
        console.log("c")
    }
    function d(f1,f2){
        console.log("test")
        f1()
        f2()
    }
    
    b()
    c()
    console.log("aa")
    d(b,c)
}

a()