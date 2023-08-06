let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`🖼️ Группа : *${groupMetadata.subject}*\n👥 Участники : *${participants.length}*${text ? `\n💬 Сообщение : ${text}\n` : ''}\n║───⊷*Участники*⊷───║\n` + users.map(v => '┣ ඬ⃟  @' + v.replace(/@.+/, '')).join`\n` + '\n║──✪ *ᑌᒪTIᗰᗩTE ┃ ᗷOT* ✪──║', null, {
        mentions: users
    })
}

handler.help = ['Отметитьвсех']
handler.tags = ['group']
handler.command = ['tagall', 'отметитьвсех']
handler.admin = true
handler.group = true

export default handler
