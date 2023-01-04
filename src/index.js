import {ToDoItem} from "./ToDoItem.js";

console.log("it works?");

let aPost = new ToDoItem("MyTitle", "This is a description", "17/03/2023", "important", "Personal Project");

console.log(aPost);

aPost.title = "TChanged title";
console.log(aPost);