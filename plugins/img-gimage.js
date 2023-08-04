
import fg from 'api-dylux'
let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `✳️ Введите изображение, которое хотите найти \n\n📌 Пример: *${usedPrefix + command}* Илон Маск`
  let res = await fg.googleImage(text)
  conn.sendFile(m.chat, res.getRandom(), 'img.png', `
✅ Результат : *${text}*`.trim(), m)
}
handler.help = ['Поиск']
handler.tags = ['img']
handler.command = ['поиск']
handler.diamond = true

export default handler
