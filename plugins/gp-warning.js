
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ Пометьте или упомяните кого-нибудь\n\n📌 Пример : ${usedPrefix + command} @user`
        if (!(who in global.db.data.users)) throw `✳️ Пользователя нет в моей базе данных`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
⚠️ *Выдано Предупреждение* ⚠️

▢ *Админ:* ${name}
▢ *Пользователь:* @${who.split`@`[0]}
▢ *Предупреждений:* ${warn + 1}/${war}
▢ *Причина:* ${text}`, null, { mentions: [who] }) 
            m.reply(`
⚠️ *ПРЕДУПРЕЖДЕНИЕ* ⚠️
Вы получили предупреждение от администратора

▢ *Предупреждений:* ${warn + 1}/${war} 
Если вы получите *${war}* предупреждения вы будете автоматически удалены из группы`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`⛔ Пользователь превысил *${war}* предупреждения, следовательно, будут удалены`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`♻️ Вы были исключены из группы *${groupMetadata.subject}* потому что он был предупрежден *${war}* разы`, who)
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
