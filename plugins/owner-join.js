
let handler = async (m, { conn, text, usedPrefix, command, args, participants, isOwner }) => {
	
   if (!isOwner) return conn.reply(m.chat, `*Пригласить бота в группу*\n\nПривет @${m.sender.split('@')[0]}\nвы не можете арендовать бота, чтобы он присоединился к группе`.trim(), m, { mentions: [m.sender] })
	
  let time = global.db.data.users[m.sender].lastjoin + 86400000
  let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  let delay = time => new Promise(res => setTimeout(res, time))
 
  let name = m.sender 
  let [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `✳️ Отправьте ссылку на группу\n\n 📌 Пример:\n *${usedPrefix + command}* <ссылка> <дней>\n\n_el число - это дни, в течение которых бот будет находиться в группе_` 
  if (!code) throw `✳️ Неверная ссылка`
  if (!args[1]) throw `📌 Отсутствует количество дней\n\n Пример:\n *${usedPrefix + command}* <ссылка> 2`
  if (isNaN(args[1])) throw `✳️ Просто число, представляющее дни, в течение которых бот будет находиться в группе!`
  let owbot = global.owner[1] 
  m.reply(`😎 Подождите 3 секунды, я присоединюсь к группе`)
  await delay(3000)
  try {
  let res = await conn.groupAcceptInvite(code)
  let b = await conn.groupMetadata(res)
  let d = b.participants.map(v => v.id)
  let member = d.toString()
  let e = await d.filter(v => v.endsWith(owbot + '@s.whatsapp.net'))
  let nDays = 86400000 * args[1]  
  let now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += nDays
  else global.db.data.chats[res].expired = now + nDays
  if (e.length) await m.reply(`✅ Я успешно присоединился к группе \n\n≡ Информация о группеo \n\n *Имя :* ${await conn.getName(res)}\n\nбот автоматически завершит работу после \n\n${msToDate(global.db.data.chats[res].expired - now)}`)
 
 if (e.length) await conn.reply(res, `🏮 Привет, балбес

@${owbot} он мой создатель, если у вас есть какие-либо сомнения?
fui invitado por *${m.name}*`, m, {
    mentions: d
     }).then(async () => {
     await delay(7000)
     }).then( async () => {
     await conn.reply(res, `хорошо, все расслабьтесь 🤭`, 0)
     await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *ПРИГЛАШЕНИЕ В ГРУППУ*\n\n@${m.sender.split('@')[0]} он пригласил *${conn.user.name}*в группу\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 Сыллка : ${args[0]}\n\nбот автоматически завершит работу после \n\n${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
     })
     if (!e.length) await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *ПРИГЛАШЕНИЕ В ГРУППУ*\n\n@${m.sender.split('@')[0]} он пригласил *${conn.user.name}*в группу\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 Сыллка : ${args[0]}\n\nбот автоматически завершит работу после\n\n ${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
     if (!e.length) await m.reply(`✳️ Успешно пригласить бота в группу\n\n${await conn.getName(res)}\n\nбот автоматически завершит работу после *${msToDate(global.db.data.chats[res].expired - now)}*`).then(async () => {
     let mes = `Всем привет👋🏻
     
*${conn.user.name}* это один из ботов WhatsApp для нескольких устройств, созданный с использованием Node.js, *${conn.user.name}* Недавно приглашенный *${m.name}*

чтобы просмотреть меню бота, введите
${usedPrefix}help
@${conn.user.jid.split('@')[0]} он выйдет автоматически после \n\n${msToDate(global.db.data.chats[res].expired - now)}`
  await conn.reply(res, mes, m, {
        mentions: d
         })
     })
    } catch (e) {
      conn.reply(global.owner[1]+'@s.whatsapp.net', e)
      throw `✳️ Извините, бот не может присоединиться к группам`
      }
}
handler.help = ['Зайти <Ссылка на группу> <Дней>']
handler.tags = ['owner']
handler.command = ['join', 'зайти'] 

//handler.owner = true

export default handler

function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Дней*\n ', h, ' *Часов*\n ', m, ' *Минут*\n ', s, ' *Секунд* '].map(v => v.toString().padStart(2, 0)).join('')
}
