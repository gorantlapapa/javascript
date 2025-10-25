/*Multilevel Inheritance*/
class A
{
    funca(){
        console.log("Function of class A")
    }
}
class B extends A
{
    funcb(){
        console.log("Funtion of class B")
    }
}
class C extends B
{
    funcc(){
        console.log("Function of class C")
    }
}
objB=new B()
objB.funca()
objB.funcb()
console.log("----------------------")
objC=new C()
objC.funca()
objC.funcb()
objC.funcc()