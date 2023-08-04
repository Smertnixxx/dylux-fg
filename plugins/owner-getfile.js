import fs from 'fs';
import syntaxError from 'syntax-error';
import path from 'path';
import cp, { exec as _exec } from 'child_process';
import { promisify } from 'util';

const exec = promisify(_exec).bind(cp);
let handler = async (m, { conn, isROwner, usedPrefix, command, text }) => {
  const pluginNames = Object.keys(plugins).map(name => name.replace('.js', ''));
  
  if (!text) {
    throw `
✳️ Использование команды : ${usedPrefix + command} <name file>
      
📌 Пример:
${usedPrefix + command} main-menu
`.trim();
  }

  if (!pluginNames.includes(text)) {
    return m.reply(`
📌 *Пример:* 
 ${usedPrefix + command} main-menu 
      
      ≡ *Список плагинов*
˙·٠•●◊♦►------------------------◄♦◊●•٠·˙
 ${pluginNames.map(name => `▢ ${name}`).join('\n')}
˙·٠•●◊♦►------------------------◄♦◊●•٠·˙
    `);
  }

  try {
    const { stdout, stderr } = await exec(`cat plugins/${text}.js`);
    const pluginFilePath = path.join('./plugins', `${text}.js`);
    
    if (stdout.trim()) { 
      const res = await conn.sendMessage(m.chat, { text: stdout }, { quoted: m });
      await conn.sendMessage(m.chat, { document: fs.readFileSync(pluginFilePath), mimetype: 'application/javascript', fileName: `${text}.js` }, { quoted: res });
    } 

    if (stderr.trim()) { 
      const arc = await conn.sendMessage(m.chat, { text: stderr }, { quoted: m });
      await conn.sendMessage(m.chat, { document: fs.readFileSync(pluginFilePath), mimetype: 'application/javascript', fileName: `${text}.js` }, { quoted: arc });
    }
  } catch (e) {
    m.reply('❎ Ошибка')
  }
};
handler.help = ['Плагин']
handler.tags = ['owner']
handler.command = ['плагин']
handler.rowner = true

export default handler
