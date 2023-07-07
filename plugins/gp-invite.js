
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `✳️ Введите номер, на который вы хотите отправить приглашение в группу\n\n📌 Пример :\n*${usedPrefix + command}* 59172945992`
if (text.includes('+')) throw  `✳️ Введите число все вместе без *+*`
if (isNaN(text)) throw ' 📌 Вводите только цифры плюс код вашей страны без пробелов'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `≡ *INVITACIÓN A GRUPO*\n\nUn usuario te invitó a unirte a este grupo \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`✅ Пользователю была отправлена ссылка для приглашения`) 

}
handler.help = ['invite <549xxx>']
handler.tags = ['group']
handler.command = ['invite','invitar'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
