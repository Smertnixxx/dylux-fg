import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `✳️ Какую картинку ты хочешь, чтобы я посмотрел?\n\N📌 Пример: ${usedPrefix + command} Владимир Путин`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*▢  Pinterest:*  ${text}
`.trim(), m)
}
handler.help = ['Пинтерест']
handler.tags = ['img']
handler.command = ['пинтерест'] 

export default handler
