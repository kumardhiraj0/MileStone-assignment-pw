class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  const employee1 = new Employee("mohit Kumar", "developer", 40000);
  const employee2 = new Employee("Dhiraj Kumar", "Software Engineer", 100000);
  
  console.log(employee1.getSalary());
  console.log(employee2.getSalary());
  