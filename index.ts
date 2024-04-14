#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from  "chalk";
import chalkAnimation, { rainbow } from "chalk-animation";

const currency:any = {
    USD: 1,   //base
    EUR: 0.92,
    PKR: 278.24,
    YEN: 151.84,
    UAE : 3.67,
    INR: 83.20, 
}
let answer = await inquirer.prompt(
    [
        {
            name: "From",
            type: "list",
            message: (chalk.yellow.bold("Enter From Currency")),
            choices:["USD","EUR","PKR","YEN","UAE","INR"]
        },
        {
            name: "To",
            type: "list",
            message: (chalk.yellow.bold("Enter To Currency")),
            choices:["USD","EUR","PKR","YEN","UAE","INR"]
        },
        {
            name:"amount",
            message:(chalk.green.bold("Enter your amount")),
            type:"number"
        }
    ]  
);

let fromAmount = currency [answer.From]
let toAmount = currency [answer.To]
let amount = answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(chalk.white.bold(`${convertedAmount}\n`));


chalkAnimation.rainbow(`\tTHANKS FOR USING`);
setTimeout(() => {
    console.log('');
}, 3000);