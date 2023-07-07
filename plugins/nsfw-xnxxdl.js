
import fetch from 'node-fetch'
import fg from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {

 let chat = global.db.data.chats[m.chat]
  if (!chat.nsfw) throw `🚫 Группа не поддерживает контент nsfw \n\nчтобы включить \n*${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 17) throw `❎ возвращайся, когда тебе будет больше 18 лет`
  if (!text) throw `✳️ Для поиска\n📌 Используй : *${usedPrefix + command} <search>*\n\nДля загрузки URL:\n📌Use : *${usedPrefix + command} <url>*`
    
    m.react(rwait)
    if (text.includes('http://') || text.includes('https://')) {
        if (!text.includes('xnxx.com')) return m.reply(`❎ Введите ссылку из *xnxx.com*`)
        try {
            let xn = await fg.xnxxdl(text)
            conn.sendFile(m.chat, xn.result.files.high, xn.result.title + '.mp4', `
≡  *XNXX DL*
            
▢ *📌Заголовок*: ${xn.result.title}
▢ *⌚Продолжительность:* ${xn.result.duration}
▢ *🎞️Качество:* ${xn.result.quality}
`.trim(), m, false, { asDocument: chat.useDocument })
 m.react(done)
 } catch (e) {
    m.reply(`🔴 Ошибка : попробуйте позже`)
 }
    } else {
        try {
            let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Titulo* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) m.reply(ff)
            } catch (e) {
              m.reply(`🔴 Ошибка : попробуйте позже`)
               }
    }
}
handler.help = ['xnxx'] 
handler.tags = ['nsfw', 'prem']
handler.command = ['xnxxsearch', 'xnxxdl', 'xnxx'] 
handler.diamond = 2
handler.premium = false
handler.register = true

export default handler
