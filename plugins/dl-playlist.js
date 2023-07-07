
import { youtubeSearch } from '@bochilteam/scraper'
import yts from 'yt-search'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `✳️ Введите название песниn\n\n*📌 Пример*\n*${usedPrefix + command}* Влад а4 глеб кабаков
    m.react('📀')
    let result = await yts(text)
    let ytres = result.videos
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['🎶 MP3', `${usedPrefix}fgmp3 ${v.url}`, `▢ ⌚ *Продолжительность:* ${v.timestamp}\n▢ 👀 *Вид:* ${v.views}\n▢ 📌 *Заголовок* : ${v.title}\n▢ 📆 *Печатный:* ${v.ago}\n`],
          ['🎥 MP4', `${usedPrefix}fgmp4 ${v.url}`, `▢ ⌚ *Продолжительность:* ${v.timestamp}\n▢ 👀 *Вид:* ${v.views}\n▢ 📌 *Заголовок* : ${v.title}\n▢ 📆 *Печатный:* ${v.ago}\n`]
        ]])
	})
	return conn.sendList(m.chat, '  ≡ *FG MUSIC*🔎', `\n 📀 Вот список результатов из: \n *${text}*`, fgig, `Click Aquí `, listSections, m)
}
handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 
handler.disabled = true

export default handler
