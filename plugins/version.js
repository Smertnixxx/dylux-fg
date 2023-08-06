
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");
          m.reply(`${ssd}🟢 *v2.00*`);
             conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
   m.react('👊') 
            });
}
handler.help = ['Версия']
handler.tags = ['main']
handler.command = ['ping', 'версия']

export default handler
