function Animal(){
    this.type="Animal"
}
Animal.prototype.sound=function(){
    console.log("Animal sound")
}
function Dog(){
    Animal.call()
}
let res=Dog.prototype===Animal.prototype
//console.log(res)

Dog.prototype.sound=function(){
    console.log("Bark")
}
const myDog=new Dog()
myDog.sound()