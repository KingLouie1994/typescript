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
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found!");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "IT");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Luis") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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

// console.log(accounting.mostRecentReport); would throw error in this place

accounting.mostRecentReport = "LOL";

accounting.addReport("Christmas Party");

console.log(accounting.mostRecentReport);

accounting.getReports();

accounting.printEmployeeInformation();
