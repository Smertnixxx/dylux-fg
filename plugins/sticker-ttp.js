
import { sticker } from '../lib/sticker.js'
import fg from 'api-dylux'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    
    if (!text) throw `✳️ Отправьте текст\n\n📌Пример *${usedPrefix + command}* ULTIMATE-bot`  
    let color = '2FFF2E' //color
    let res = await fg.ttp(text, color) 
    let stiker = await sticker(null, res.result, global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, '', '', m, null, rpl)
    throw stiker.toString()
}
handler.help = ['ttp <текст>']
handler.tags = ['sticker']
handler.command = ['ttp']

export default handler
