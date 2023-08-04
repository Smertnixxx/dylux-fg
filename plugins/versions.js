let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `✳️ Версия ULTIMATE PREMIUM 1.01
if (text.includes('+')) throw  `✳️ Введите число все вместе без *+*`
let group = m.chat

      await conn.reply(text+'@s.whatsapp.net', `≡ *ПРИГЛАШЕНИЕ В ГРУППУ*\n\nОдин пользователь пригласил вас присоединиться к этой группе \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`✅ Пользователю была отправлена ссылка для приглашения`) 

}
handler.help = ['Версия']
handler.tags = ['group']
handler.command = ['версия'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
