
let handler = async (m, { conn, usedPrefix, command }) => {
	
if (!m.quoted) throw `✳️ Ответьте на сообщение, которое вы хотите удалить`
try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
 } catch {
return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}
}
handler.help = ['Удалить (Сообщение)']
handler.tags = ['nime']
handler.command = ['delete', 'удалить']
handler.group = false
handler.admin = true
handler.botAdmin = true

export default handler
