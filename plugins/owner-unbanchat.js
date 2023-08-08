//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner} ) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = false
    m.reply('✅ Активный бот в этой группе')   
}
handler.help = ['ВключитьБота']
handler.tags = ['owner']
handler.command = ['включитьбота', 'unbanchat'] 

export default handler
