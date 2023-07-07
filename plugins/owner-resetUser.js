
let handler = async (m, { conn, text }) => {
    function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

    text = no(text)

  if(isNaN(text)) {
		var number = text.split`@`[1]
  } else if(!isNaN(text)) {
		var number = text
  }

    if(!text && !m.quoted) return m.reply(`*❏ СБРОСИТЬ ДО ПОЛЬЗОВАТЕЛЯ*\n\nРазместите пользователя в сети, введите номер или ответьте на сообщение пользователя, которого вы хотите перезапустить`)
    if(isNaN(number)) return m.reply(`❏ Введенный вами номер недействителен`)

      try { 
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    	let number = user.split('@')[0]
        delete global.global.db.data.users[user]
        conn.reply(m.chat, `*❏ ПЕРЕЗАПУЩЕННЫЙ ПОЛЬЗОВАТЕЛЬ*\n\n✅Он был перезапущен на @${number} из *БАЗЫ ДАННЫХ*`, null, { mentions: [user] })
    }
    
}
handler.help = ['reset']
handler.tags = ['owner']
handler.command = ['reset'] 
handler.rowner = true

export default handler
