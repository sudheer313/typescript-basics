// function greeter(name:string) {
//     console.log(`Hello, ${name}!`);
var nihar = {
    id: 123,
    firstName: "Nihar",
    lastName: "Kandula",
    email: "nihar@gmail.com",
    departments: ["Sales", "Marketing"],
    hireDate: new Date(),
    isManager: false,
    getFullName: function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    },
    getDepartmentList: function (showIds) {
        if (showIds === void 0) { showIds = true; }
        if (showIds) {
            return this.departments.map(function (dept, i) { return "".concat(i + 1, ". ").concat(dept); });
        }
        else {
            return this.departments;
        }
    }
};
console.log(nihar.getFullName());
console.log(nihar.getDepartmentList());
console.log(nihar.hireDate);
