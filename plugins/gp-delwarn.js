
let handler = async (m, { conn, args, groupMetadata}) => {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ Пометьте или упомяните кого-нибудь`
        if (!(who in global.db.data.users)) throw `✳️Пользователя нет в моей базе данных`
       let warn = global.db.data.users[who].warn
       if (warn > 0) {
         global.db.data.users[who].warn -= 1
         m.reply(`⚠️ *Удалить Предупреждение *
         
▢ Warns: *-1*
▢ Warns total: *${warn - 1}*`)
         m.reply(`✳️ Администратор уменьшил свое предупреждение, теперь у вас есть *${warn - 1}*`, who)
         } else if (warn == 0) {
            m.reply('✳️ У пользователя нет никаких предупреждений')
        }

}
handler.help = ['delwarn @user']
handler.tags = ['group']
handler.command = ['delwarn', 'unwarn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
