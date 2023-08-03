
let handler = async (m, { conn, participants, usedPrefix, command }) => {
	
let kickte = `✳️ Правильное использование команд\n*${usedPrefix + command}* @tag`

if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
m.reply(`✅ Пользователь был кикнут из группы `) 

}

handler.help = ['Кик @Пользователь']
handler.tags = ['group']
handler.command = ['kick', 'кик', 'бан'] 
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
