import { createHash } from 'crypto'

let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')
m.reply(`
▢ *Серийный номер* : ${sn}
`.trim())
}
handler.help = ['Номер']
handler.tags = ['rg']
handler.command = ['nserie', 'sn', 'Номер'] 
handler.register = true
export default handler
