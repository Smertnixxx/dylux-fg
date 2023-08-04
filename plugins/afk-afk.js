//import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
  😴 *AFK* 
Теперь эти афк, пока ты не отправишь сообщение
🧑‍🎓 *Пользователь:* ${conn.getName(m.sender)} 
💬 *Причина:* ${text ? text : ''}
  `)
}
handler.help = ['АФК <Причина>']
handler.tags = ['fun']
handler.command = ['афк']
handler.group = true

export default handler
