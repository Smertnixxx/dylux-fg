//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ Помечает пользователя'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ Введите количество *Алмазов*, которые вы хотите добавить'
    if (isNaN(txt)) throw '🔢 только цифры'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '✳️ Минимум равен *1*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`┣ ඬ⃟  *✅ Успешно*
┏━━━━━━━━━━━━━━━━┓
║➤ *Текущий:* ${dmt} 💎
┗━━━━━━━━━━━━━━━━┛`)
   conn.fakeReply(m.chat, `✅ Получил \n\n *+${dmt}* Алмазов💎`, who, m.text)
}

handler.help = ['ВыдатьАлмазы <@Пользователь>']
handler.tags = ['owner']
handler.command = ['adddi'] 
handler.rowner = true

export default handler

