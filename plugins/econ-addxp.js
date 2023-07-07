//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ Помечает пользователя'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ Введите количество *XP*, которое вы хотите добавить'
  if (isNaN(txt)) throw ' 🔢 sólo números'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw '✳️ Минимум равен *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`≡ *ДОБАВЛЕН XP*
┌──────────────
▢  *Текущий:* ${xp}
└──────────────`)
 conn.fakeReply(m.chat, `▢ Recibiste \n\n *+${xp} XP*`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['econ']
handler.command = ['addxp'] 
handler.rowner = true

export default handler

