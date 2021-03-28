class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("ID1", "Luis Schekerka Consulting");

accounting.addEmployee("Luis");
accounting.addEmployee("Louise");

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "Test", describe: accounting.describe };

// accountingCopy.describe();
