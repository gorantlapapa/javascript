/*Single Inheritance*/
class A
{
    funca(){
        console.log("Function of class A")
    }
}
class B extends A
{
    funcb(){
        console.log("Funtion for class B")
    }
}
objB=new B()
objB.funca()
objB.funcb()