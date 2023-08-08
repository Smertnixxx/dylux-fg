//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ Настроено приветственное сообщение')
  } else throw `✳️ Введите приветственное сообщение\n\n@user (Упоминание)\n@group (Название группы)\n@desc (Описание группы)`
}
handler.help = ['Приветствие <Текст>']
handler.tags = ['owner']
handler.command = ['приветствие'] 
handler.admin = false
handler.owner = true

export default handler
