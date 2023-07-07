let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)n└──✪ Baton ┃ ᴮᴼᵀ ✪──', null, {
        mentions: users
    })
    m.reply(`▢ Группа : *${groupMetadata.subject}*\n▢ Участники : *${participants.length}*${text ? `\n▢ Mensaje : ${text}\n` : ''}\n┌───⊷ *УПОМЯНЕШЬ*\n` + users.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n` + '\
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
