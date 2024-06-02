import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { messsage: "Enter first number", type: "number", name: "firstnumber" },
  { message: "Enter secund number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition","substraction","multipication","division"],
  },
]);
// conditional statement
if (answer.operator==="addition"){
    console.log(answer.firstnumber+ answer.secondnumber);
}
else if(answer.operator==="substraction"){
    console.log(answer.firstnumber- answer.secondnumber);
}  
else if(answer.operator==="multipication"){
    console.log(answer.firstnumber* answer.secondnumber);   
}
else if(answer.operator==="division"){
    console.log(answer.firstnumber/ answer.secondnumber);   
}
else{
    console.log("please select valid operator")
}
