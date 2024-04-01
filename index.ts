#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
let balance: number = 100000; //Dollar
let pin: number = 1412;
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin",
    type: "number",
  },
]);

if (pinAnswer.pin === pin) {
  console.log(chalk.bold.green("Correct pin code!!!"));

  let opr = await inquirer.prompt([
    {
      name: "operations",
      message: "Select one option!!!",
      type: "list",
      choices: ["withdraw", "check balance", "Fastcash"],
    },
  ]);
  if (opr.operations === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter the amount you want to withdraw",
        type: "number",
      },
    ]);
    if (amountAns.amount < balance) {
      balance -= amountAns.amount;
      console.log(chalk.bold.green("now your balance is" + balance));
    } else {
      console.log("insufficient balance");
    }
  }
  //4
  else if (opr.operations === "Check balance") {
    console.log(chalk.bold.green("your balance is:" + balance));
  } else if (opr.operations === "Fastcash") {
    let fast = await inquirer.prompt([
      {
        name: "fast_opt",
        message: "How much money you want to withdraw",
        type: "list",
        choices: ["1000", "2000", "5000", "10000"],
      },
    ]);
    if (fast.fast_opt === "1000") {
      balance -= fast.fast_opt;
      console.log(chalk.bold.green("Your remaining balance is ${balance}"));
    }
    if (fast.fast_opt === "2000") {
      balance -= fast.fast_opt;
      console.log(chalk.bold.green("Your remaining balance is ${balance}"));
    }
    //5
    if (fast.fast_opt === "5000") {
      balance -= fast.fast_opt;
      console.log(chalk.bold.green("Your remaining balance is ${balance}"));
    }
    if (fast.fast_opt === "10000") {
      balance -= fast.fast_opt;
      console.log(chalk.bold.green("Your remaining balance is ${balance}"));
    }
  }
} else {
  console.log(chalk.bold.green("invalid pin code"));
}