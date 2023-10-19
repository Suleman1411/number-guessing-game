import inquirer from "inquirer";

type ansType ={
    userGuess: number
}
const systemGeneratedNo = Math.floor(Math.random()*10);

const answers: ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your Guess numnber",
    }
]) 

const {userGuess} = answers;
console.log(userGuess, `This is your guess Number\n${systemGeneratedNo} This is system generated Number`);

if(userGuess === systemGeneratedNo){
    console.log("huraah your is correct \n you win" ); 
} else {
    console.log("please try again your your guess");
}