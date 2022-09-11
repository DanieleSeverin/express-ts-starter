import fs from 'fs/promises';

export async function logEx(articles? :number){
    try {
        let content = `Program run at ${new Date()}\n`;
        if(typeof articles === 'number') content += `Inserted ${articles} articles.\n`;
        content += `\n`;
        await fs.writeFile('./Executions.txt', content, { flag: 'a+'});
      } catch (err) {
        console.log(err)
      }
}