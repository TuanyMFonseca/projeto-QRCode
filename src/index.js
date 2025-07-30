import prompt from "prompt";

import mainPrompt from "./prompts/prompt-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/qr-code/password/create.js";


async function main() {
    prompt.start(); // Inicie o prompt antes de usar prompt.get

    prompt.get(mainPrompt, async (err, choose) => {
        if (err) {
            console.error("Erro ao receber entrada:", err);
            return;
        }
        // Corrija o nome da propriedade conforme seu schema
        if (choose.select == 1) await createQRCode();
        if (choose.select == 2) await createPassword();
    });
}

main();