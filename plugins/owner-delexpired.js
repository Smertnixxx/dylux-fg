
let handler = async (m, { conn, args, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    if (new Date() * 1 < global.db.data.chats[who].expired) global.db.data.chats[who].expired = false
    else global.db.data.chats[who].expired = false
    
    m.reply(`✅ Дни истечения срока действия для этой группы удалены`) 
        
}
handler.help = ['ОбнулитьАренду']
handler.tags = ['owner']
handler.command = ['обнулитьаренду']
handler.rowner = true
handler.group = true

export default handler
