
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");
          m.reply(`${ssd}🟢 \nv3.01 Обновление бота\n [/] *Исправил баг с командой .меню | [/] Исправил баги и улучшил производительность бота*`);
             conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
   m.react('👊') 
            });
}
handler.help = ['Версия']
handler.tags = ['main']
handler.command = ['ping', 'версия']

export default handler
