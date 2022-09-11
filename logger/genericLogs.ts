import fs from 'fs/promises';

export async function genericLogs(title: string, content: string){
    try {
        await fs.writeFile(`./logger/logs/${title}.txt`, content);
      } catch (err) {
        console.log(err)
      }
}