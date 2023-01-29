#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log("###############################");
console.log("# WELCOME TO TYPESCRIPT QUIZ #");
console.log("###############################");
const questions = await inquirer.prompt([
    {
        type: "list",
        name: "Q1",
        message: "Who developed Typescript",
        choices: ["Anders Hejlsberg", "Mark Candy", "Stanlacke", "None"]
    },
    {
        type: "list",
        name: "Q2",
        message: "TypeScript was introduced in the year of",
        choices: ["2011", "2012", "2014", "2017"]
    },
    {
        type: "list",
        name: "Q3",
        message: "What are the built-in types in Typescript?",
        choices: ["Number type", "Boolean type", "Null type", "All of these"]
    },
    {
        type: "list",
        name: "Q4",
        message: "Can a typescript be installed or managed through?",
        choices: ["Void", "Space", "Nmp", "Tag"]
    },
    {
        type: "list",
        name: "Q5",
        message: "What are different components of TypeScript?",
        choices: ["Language", "Compiler", "Language Service", "All of the above"]
    },
    {
        type: "list",
        name: "Q6",
        message: "Which object-oriented terms are supported by TypeScript?",
        choices: ["Interfaces", "Data Types", "Member functions", "All the above"]
    },
    {
        type: "list",
        name: "Q7",
        message: "What are the disadvantages of TypeScript?",
        choices: ["TypeScript is just another way to write JavaScript. It doesn’t fix the problems of JavaScript",
            "One more tool to learn", "TypeScript has a dependency on type definition files if you wish to use any existing JavaScript libraries",
            "All of the above"]
    },
    {
        type: "list",
        name: "Q8",
        message: "Which of the following is the typing principle of typescript?",
        choices: ["Gradual", "Dynamic", "Duck", "All of the above"]
    },
    {
        type: "list",
        name: "Q9",
        message: "Which is not true about typescript?",
        choices: ["It is interpreted like javascript", "It is a superset of javascript",
            "It does support static data types", "Typescript is case sensitive"]
    },
    {
        type: "list",
        name: "Q10",
        message: "_______are the way to organize code in typescript.",
        choices: ["Modules", "Classes", "Method", "Arrow"]
    },
]);
const { Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10 } = questions;
let totalMark = 0;
if (Q1 === "Anders Hejlsberg")
    totalMark++;
if (Q2 === "2012")
    totalMark++;
if (Q3 === "All of these")
    totalMark++;
if (Q4 === "Tag")
    totalMark++;
if (Q5 === "All of the above")
    totalMark++;
if (Q6 === "All the above")
    totalMark++;
if (Q7 === "All of the above")
    totalMark++;
if (Q8 === "All of the above")
    totalMark++;
if (Q9 === "It does support static data types")
    totalMark++;
if (Q10 === "Modules")
    totalMark++;
if (totalMark > 5) {
    console.log(chalk.green(`You are successfully clear quiz with the mask # ` + totalMark));
}
else {
    console.log(chalk.red("Sorry! you are fail"));
    console.log(chalk.red("Marks", totalMark));
}
