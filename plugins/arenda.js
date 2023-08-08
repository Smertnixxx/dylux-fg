
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");
          m.reply(`${ssd}\n۞-‘๑’-*”˜ *АРЕНДА БОТА* ˜”*-‘๑’-۞\n [/] *150 рублей бот в группу на неделю
*\n[/] *Исправил баги и улучшил производительность бота*\n[/] *Сделал команду .Активность понятнее*\n`);
             conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
   m.react('👊') 
            });
}
handler.help = ['АрендоватьБота']
handler.tags = ['main']
handler.command = ['ping', 'версия']

export default handler
