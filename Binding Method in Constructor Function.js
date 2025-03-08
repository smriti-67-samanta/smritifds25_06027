function Person(name,age) {
    this.name=name;
    this.age=age;
this.displayInfo=function(){
    console.log(`Name- ${this.name}, Age- ${this.age}`)
}
this.function2=this.displayInfo.bind(this)
}
const Person2=new Person("Aman",23)
Person2.function2()