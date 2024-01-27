const bcrypt = require('bcrypt');
const saltRounds = 10;

export async function hashText(text: string): Promise<string> {
    const newText = await bcrypt.hash(text, saltRounds)
    return newText
}

export async function compareHashAndWord(hashed: string, text: string): Promise<boolean> {
    const result = await bcrypt.compare(text, hashed)
    return result
}