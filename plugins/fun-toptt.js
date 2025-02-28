import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
	try {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    //if (!/video|audio/.test(mime)) throw `✳️ ${msg.toavT()} :\n *${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw '❎ Ошибка при загрузке мультимедиа'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw '❎ Ошибка al convertir'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, { mimetype: 'audio/mp4' })
    } catch (e) {
        m.reply(`✳️ Ответьте на звук, который вы хотите преобразовать в голосовую заметку, с помощью :\n *${usedPrefix + command}*`)
   }
}
handler.help = ['Голосовое']
handler.tags = ['fun']
handler.command = ['toav', 'голосовое'] 

export default handler
