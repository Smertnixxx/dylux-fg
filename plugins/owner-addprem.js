//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ Пометьте или упомяните кого-нибудь\n\n📌 Пример : ${usedPrefix + command} @user`
if (global.prems.includes(who.split`@`[0])) throw '✳️ Упомянутый пользователь уже является премиум'
global.prems.push(`${who.split`@`[0]}`)

conn.reply(m.chat, `
👑 Премиум

@${who.split`@`[0]} теперь вы становитесь премиум-пользователем🫅
┌───────────
▢ *Имя:* ${user.name}
└───────────
`, m, { mentions: [who] })

}
handler.help = ['addprem <@tag>']
handler.tags = ['owner']
handler.command = ['addprem', 'премиум'] 

handler.group = true
handler.rowner = true

export default handler
