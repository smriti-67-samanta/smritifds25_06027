function Person(name,age){
    this.name=name
    this.age=age

}
Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  };
  function Employee(name, age, jobTitle){
    Person.call(this, name, age);
    this.jobTitle=this.jobTitle

  }
  Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  };

  let person1=new Person("Smriti",25)
  person1.introduce()

  let employee1=new Employee("Aman",27,"finance")
  employee1.introduce()
  employee1.work()