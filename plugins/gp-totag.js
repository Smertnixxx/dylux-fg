
let handler = async (m, { conn, text, participants}) => {
	
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    if (!m.quoted) throw `✳️ Ответьте на сообщение`
    conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users } )
}

handler.help = ['Повторить']
handler.tags = ['group']
handler.command = ['повторить']

handler.admin = true
handler.group = true

export default handler
