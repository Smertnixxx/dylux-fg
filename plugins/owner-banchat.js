//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = true
    m.reply('✅ Бот *Деактивирован* в этой группе')
}
handler.help = ['ВыключитьБота']
handler.tags = ['owner']
handler.command = ['выключитьбота', 'chatoff'] 

export default handler
 
