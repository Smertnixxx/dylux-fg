
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");
          m.reply(`${ssd}\n◄♦◊ *АРЕНДА БОТА* ◊♦►\n 🐣 150 рублей бот в группу на *Неделю*\n 🦁 250 рублей бот в группу на *20 Дней*\n 🦈 350 рублей бот в группу на *1 Месяц*\n 🧜‍♂️ 450 рублей бот в группу на *3 Месяца*\n 🐲 600 рублей бот в группу *Навсегда*\n ◄♦◊ *Оплата в ЛС - http://wa.me/79319547247* ◊♦►`);
             conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
   m.react('👊') 
            });
}
handler.help = ['АрендоватьБота']
handler.tags = ['main']
handler.command = ['ping', 'арендоватьбота']

export default handler
