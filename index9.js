   const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
    const destructuringToSwap = (employees) => {
    if (employees.length > 1) {
      [employees[0], employees[employees.length - 1]] = [employees[employees.length - 1], employees[0]];
    }
    return employees;
  };
  console.log(destructuringToSwap(employees));
  