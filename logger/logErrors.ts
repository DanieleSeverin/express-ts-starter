import fs from 'fs/promises';

export async function logError(err? :Error){
    try {
        let content = '';
        if(err) content = err.message + '\n' + err.stack;
        else content = 'Unknown message. ';
        content += `\nDateTime: ${new Date()} \n\n`;
        await fs.writeFile('./Errors.txt', content, { flag: 'a+'});
      } catch (err) {
        console.log(err)
      }
}