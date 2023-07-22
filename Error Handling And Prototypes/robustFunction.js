function getPerson(personObj) {
    try {
      if (typeof personObj !== "object" || !personObj.name || !personObj.age) {
        throw new Error("Invalid parameter type");
      }
      return `Name: ${personObj.name}, Age: ${personObj.age}`;
    } catch (error) {
      return error.message;
    }
  }
  
  
  console.log(getPerson({ name: "Mithun", age: 20 })); 
  console.log(getPerson({ name: "Mithun" })); 
  console.log(getPerson(["name", "Mithun"]));