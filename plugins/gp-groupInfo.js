//import db from '../lib/database.js'

let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
┌──「 *Информация о группе* 」
▢ *♻️ID:*
   • ${groupMetadata.id}
▢ *🔖Название* : 
• ${groupMetadata.subject}
▢ *👥Участники* :
• ${participants.length}
▢ *👑Владелец группы:*
• @${owner.split('@')[0]}
▢ *🕵🏻‍♂️Админы:*
 ${listAdmin}
▢ *🪢 Групповые настройки:*
• ${isBanned ? '✅' : '❎'} Забаненный
• ${welcome ? '✅' : '❎'} Приветствие
• ${detect ? '✅' : '❎'} Детектор
• ${del ? '❎' : '✅'} Анти-Удаление
• ${antiLink ? '✅' : '❎'} Анти-Сыллка WhatsApp 

*▢  📬 Настройка сообщений:*
• Приветствие: ${sWelcome}
• Прощание: ${sBye}
• Стимулированные: ${sPromote}
• Деграданты: ${sDemote}

▢ *📌Описание* :
   • ${groupMetadata.desc?.toString() || 'неизвестный'}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogp']
handler.tags = ['group']
handler.command = ['infogrupo', 'groupinfo', 'infogp'] 
handler.group = true

export default handler
