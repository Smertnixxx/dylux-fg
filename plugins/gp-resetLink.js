
let handler = async (m, { conn }) => {
  let res = await conn.groupRevokeInvite(m.chat)
  m.reply('✅ Групповая ссылка была успешно сброшена\n\n📌 Новая ссылка:\nhttps://chat.whatsapp.com/' + res)
}
handler.help = ['СброситьСсылку']
handler.tags = ['admin']
handler.command = ['revoke', 'resetlink', 'сброситьссылку'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
