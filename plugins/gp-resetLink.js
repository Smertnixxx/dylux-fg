
let handler = async (m, { conn }) => {
  let res = await conn.groupRevokeInvite(m.chat)
  m.reply('✅ Групповая ссылка была успешно сброшена\n\n📌 Новая ссылка:\nhttps://chat.whatsapp.com/' + res)
}
handler.help = ['убрать ссылку']
handler.tags = ['group']
handler.command = ['revoke', 'resetlink', 'убрать ссылку'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
