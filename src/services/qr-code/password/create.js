import chalk from "chalk";
import handle from "./handle.js"; // Certifique-se de que o caminho está correto

async function createPassword(params) {
    console.log(chalk.green("Password")); 
    const password = await handle();
    console.log(password);  
}

export default createPassword;