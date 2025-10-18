var semester = 3;
let sem = 3;
const Sem = 3;

console.log(`(Var) Currently I'm studying in Sem: ${semester}`);
console.log(`(Let) Currently I'm studying in Sem: ${sem}`);
console.log(`(Const) Currently I'm studying in Sem: ${Sem}`);

{
    var fullname = "Akshay";
    console.log(`var fullname in block: ${fullname}`);
    let fullName = "Akshay Rao";
    console.log(`let fullName in block: ${fullName}`);
    const FullName = "Akshay Rao J";
    console.log(`const FullName in block: ${FullName}`);
}


function showVariables(){
    let fullName = "FunctionBlock Name: Akshay (let)";
    const FullName = "FunctionBlock Name: Akshay (const)";
    console.log(`(Var) Full Name: ${fullname}`);
    console.log(`(Let) Full Name: ${fullName}`);
    console.log(`(Const) Full Name: ${FullName}`);
}


showVariables();

