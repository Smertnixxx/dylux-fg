let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
 m.reply(`${ssd}🟢 *Скорость* : ${latensi.toFixed(4)} _ms_`);
    
    })
}

handler.help = ['Версия']
handler.tags = ['group']
handler.command = ['tagall', 'версия']
handler.admin = true
handler.group = true

export default handler
