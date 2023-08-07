
let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ Пользователя нет в моей базе данных`
    conn.reply(m.chat, `
┌───⊷ *Баланс* ⊶
🏷️ *Имя* : _@${who.split('@')[0]}_
💎 *Алмазы* : _${user.diamond}_
🌐 *⬆XP* : _${user.exp}_
└──────────────

*ПРИМЕЧАНИЕ :* 
Вы можете купить 💎 алмазы, используя команды
🛒 *${usedPrefix}buy <количество>*
🛒 *${usedPrefix}buyall <купить все алмазы>*`, m, { mentions: [who] })
}
handler.help = ['Баланс']
handler.tags = ['econ']
handler.command = ['баланс', 'diamantes', 'diamond', 'balance'] 

export default handler
