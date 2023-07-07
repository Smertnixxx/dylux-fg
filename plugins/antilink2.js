//fixs
let handler = m => m

let linkRegex = /chat.whatsapp.com/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.db.data.chats[m.chat]
  let name = this.getName(m.sender)
  let link = linkRegex.exec(m.text)
  let aizin = m.text.includes("#izinmin") || m.text.includes("#Izin")

  if (chat.antiLink && link && !aizin) {
 m.reply(`*「 ANTILINK DETECTOR 」*\n\nTerdeteksi *${name}*!\n\nизвините, но вас выгонят из этой группы!`)
   this.groupRemove(m.chat, [m.sender])
  } else if ( chat.antiLink && link && aizin) {
  	this.sendButton( m.chat, `Вас не выгонят, потому что вы используете знак #izinmin`, `AntilinkV2`, `Oke`, `ok`, m)
  	}
}
handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler
