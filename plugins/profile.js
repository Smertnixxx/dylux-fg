import { createHash } from 'crypto';

let handler = async (m, { conn, usedPrefix }) => {
  let user = global.db.data.users[m.sender];
 let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `[❗] Пользователя нет в моей базе данных`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let { name, exp, warn, limit, money, joincount, level, role, prem } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')

    let str = `
    ┏━━━「 *Профиль* 」━━━┓
    ║➤ *🔖 Имя:* ${name}
    ║➤ *🆙 Уровень:* ${level}
    ║➤ *⬆️ Опыт* : ${exp}
    ║➤ *💎 Алмазы :* ${limit}
    ║➤ *🪙 Токены :* ${joincount}
    ║➤ *💰 Монеты :* ${money}
    ║➤ *⚠️ Предупреждений:* ${warn}
    ║➤ *🏆 Роль:* ${role}
    ║➤ *⭐ Премиум* : ${prem ? 'Да' : 'Нет'}
    ┗━━━━━━━━━━━━━`;
    conn.reply(m.chat, str, m);
}


handler.help = ['Профиль'];
handler.tags = ['group'];
handler.command = ['профиль', 'perfil'];

export default handler;
