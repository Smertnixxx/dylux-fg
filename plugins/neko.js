import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text()
let nek = ne.split('\n')
let neko = await nek[Math.floor(Math.random() * nek.length)]
if (neko == '') throw 'Error'
conn.sendFile(m.chat, neko, 'error.jpg', `Nyaww~ 🐾💗`, m)}
//conn.sendButton(m.chat, 'Nyaww~ 🐾💗', wm, neko, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]],m)}
handler.command = ['кошка девочка']
handler.tags = ['anime']
handler.help = ['neko']
export default handler
