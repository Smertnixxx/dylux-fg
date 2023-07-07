
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ Пометьте или упомяните кого-нибудь\n\n📌 Ejemplo : ${usedPrefix + command} @user`
        if (!(who in global.db.data.users)) throw `✳️ Пользователя нет в моей базе данных`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
⚠️ *Пользователь Предупрежден* ⚠️

▢ *Админ:* ${name}
▢ *Обычный человек:* @${who.split`@`[0]}
▢ *Предупреждений:* ${warn + 1}/${war}
▢ *Причина:* ${text}`, null, { mentions: [who] }) 
            m.reply(`
⚠️ *ADVERTENCIA* ⚠️
Вы получили предупреждение от администратора

▢ *Warns:* ${warn + 1}/${war} 
Si recibes *${war}* advertencias serás eliminado automáticamente del grupo`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`⛔ Пользователь превысил *${war}* предупреждения, следовательно, будут удалены`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`♻️ Вы были исключены из группы *${groupMetadata.subject}* потому что он был предупрежден *${war}* veces`, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['warn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
