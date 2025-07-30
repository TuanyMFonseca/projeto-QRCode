async function handle(){
    let character = [];
    let password = "";

   const passwordLength = process.env.PASSWORD_LENGTH  
   
    if(process.env.UPPERCASE_LETTERS === "true"){
        character.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if(process.env.LOWERCASE_LETTERS === "true"){
        character.push(..."abcdefghijklmnopqrstuvwxyz");
    }
    if(process.env.NUMBERS === "true"){
        character.push(..."0123456789");
    }
    if(process.env.SPECIAL_CHARACTERS === "true"){
        character.push(..."!@#$%^&*()_+");
    }

    for(let i = 0; i < passwordLength; i++){
        const index = Math.floor(Math.random()* character.length);
        password += character[index];   
    }

    return password;
}

export default handle;