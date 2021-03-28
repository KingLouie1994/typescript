class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "IT");
  }

  addEmployee(name: string) {
    if (name === "Luis") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  getReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("ID1", ["Luis", "Louise"]);

it.addEmployee("Luis");
it.addEmployee("Louise");

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("ID2", []);

accounting.addEmployee("Donnie");

accounting.addReport("Christmas Party");

accounting.getReports();

accounting.printEmployeeInformation();
