let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let optionsFull = `*Выбор:* ✨ | WELCOME
*Команда:* ${usedPrefix + command} welcome
*Описание:* Активирует или отключает приветствие в группе.


--------------------------------

*Выбор:* 🔗 | ANTILINK
*Команда:* ${usedPrefix + command} antilink
*Описание:* Включите или выключите функцию защиты от ссылок в WhatsApp.
*Примечание:* Необходимо, чтобы ограничение было активным.

--------------------------------

*Выбор:* 🔗 | ANTILINK 2
*Команда:* ${usedPrefix + command} antilink2
*Описание:* Включает или выключает функцию защиты от ссылок, которые начинаются по протоколу HTTPS.
*Примечание:* Необходимо, чтобы ограничение было активным.

--------------------------------

*Выбор:* 🔎 | DETECT
*Команда:* ${usedPrefix + command} detect
*Описание:* Включает или отключает уведомления об изменениях в группе.

--------------------------------

*Выбор:* 🔎 | DETECT 2
*Команда:* ${usedPrefix + command} detect2
*Описание:* Обнаруживает изменения в группе и поддерживает лучшее управление.

--------------------------------

*Выбор:* ❗ | RESTRICT
*Команда:* ${usedPrefix + command} restrict
*Описание:* Включает или отключает ограничения бота, такие как удаление или добавление людей в группу.
*Примечание:* Эта команда может использоваться только владельцами бота.

--------------------------------

*Выбор:* 🔊 | AUDIOS
*Команда:* ${usedPrefix + command} audios
*Описание:* Включает или выключает команды для аудио без префиксов в группе.

--------------------------------

*Выбор:* ❌ | ANTIVIEWONCE 
*Команда:* ${usedPrefix + command} antiviewonce
*Описание:* Изображения, отправленные для просмотра только один раз, обычно пересылаются ботом. 

--------------------------------

*Выбор:* 🤬 | ANTITOXIC
*Команда:* ${usedPrefix + command} antitoxic
*Описание:* Обнаруживает ненормативную лексику и предупреждает участника группы, прежде чем его удалят.
*Примечание:* Необходимо, чтобы ограничение было активным.

--------------------------------

*Выбор:* 🕸️ | ANTITRABAS
*Команда:* ${usedPrefix + command} antitraba
*Описание:* Бот обнаруживает длинные тексты, которые могут быть вирусами и вызывать задержку в чате, и удаляет пользователя.
*Примечание:* Необходимо, чтобы ограничение было активным.

--------------------------------

*Выбор:* 👎 | ANTIARABES
*Команда:* ${usedPrefix + command} antiarabes
*Описание:* Если к группе присоединяется арабский номер, бот автоматически удаляет его.
*Примечание:* Необходимо, чтобы были активны welcome и restrict.

--------------------------------

*Выбор:* 👎 | ANTIARABES 2
*Команда:* ${usedPrefix + command} antiarabes2
*Описание:* Если в группе записан арабский номер, бот автоматически удаляет его.
*Примечание:* Необходимо, чтобы ограничение было активным.

--------------------------------

*Выбор:* 👑 | MODOADMIN
*Команда:* ${usedPrefix + command} modoadmin
*Описание:* Бот будет отвечать только администраторам группы.

--------------------------------

*Выбор:* ⏳ | ANTISPAM
*Команда:* ${usedPrefix + command} antispam
*Описание:* Бот обнаруживает, когда пользователь рассылает командный спам, блокирует его на 5 секунд и предупреждает об этом.
*Примечание:* Эта команда может использоваться только владельцами бота.`.trim()

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!(isAdmin || isOwner || isROwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'detect2':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect2 = isEnable
break    
case 'simsimi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break   
case 'antiporno':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiporno = isEnable
break        
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'modejadibot':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.modejadibot = isEnable
break     
case 'antispam':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antispam = isEnable    
break
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'antiarabes':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
case 'antiarabes2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab2 = isEnable  
break    
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, { text: optionsFull }, { quoted: m })
throw false
}
conn.sendMessage(m.chat, { text: `🗂️ Выбор: ${type}\n🎚️ Состояние: ${isEnable ? 'АКТИВИРОВАННЫЙ' : 'ДЕЗАКТИВИРОВАННЫЙ'}\n📣 Для: ${isAll ? 'ЭТОТ БОТ' : isUser ? '' : 'Этот чат'}` }, { quoted: m })        
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i
export default handler
