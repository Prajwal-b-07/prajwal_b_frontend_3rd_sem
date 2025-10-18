let fruits = ["Apple", "Banana", "Chickoo"];

console.log(`Fruits are as follows: ${fruits}`);


// Add new fruit at the beginning: unshift()

fruits.unshift("Cherry");

console.log(`After unshift(): Fruits are as follows:  ${fruits}`);


// Add new fruit at the last: push()

fruits.push("Strawberry");

console.log(`After push(): Fruits are as follows: ${fruits}`);


// Remove fruit in the first position: shift()

fruits.shift();

console.log(`After shift(): Fruits are as follows:  ${fruits}`);


// Remove fruit in the last position: pop()

fruits.pop();

console.log(`After pop(): Fruits are as follows:  ${fruits}`);


let employees = [

    {id: 1, empName: "kempi konankunte", experience: 3.5},

    {id: 2, empName: "rossie diamond", experience: 2.3},

    {id: 3, empName: "yashfrom nagsandra", experience: 2.1},

]

console.log(employees);


// find() method is used to get the complete result

// findIndex() method is used to get the Index

// some() method is used to check atleast some match is found for the given condition

// every() method is used to check whether all the data is matching for the given condition


let findEmpName = employees.find(employee => employee.empName === "kempi konankunte");

console.log(findEmpName);


let findEmpId = employees.findIndex(employee => employee.empName === "kempi konankunte");

console.log(findEmpId);