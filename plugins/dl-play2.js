
import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let limit = 320
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  
    if (!text) throw `✳️ Введите название песни\n\n📌Пример *${usedPrefix + command}* а4 24 часа бомбим киев`
  let chat = global.db.data.chats[m.chat]
  let res = await yts(text)
  //let vid = res.all.find(video => video.seconds < 3600)
  let vid = res.videos[0]
  if (!vid) throw `✳️ Видео/Аудио не найдено`
  let isVideo = /vid$/.test(command)
  m.react('🎧') 
  
  try {
  let q = isVideo ? '360p' : '128kbps' 
  let v = vid.url
  let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
  let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
  let title = await yt.title
  let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH)
  let play = `
	≡ *Батон Миюзикал*
┌──────────────
▢ 📌 *Загаловок* : ${vid.title}
▢ 📆 *Печатный:* ${vid.ago}
▢ ⌚ *Продолжительность:* ${vid.timestamp}
▢ 👀 *Вид:* ${vid.views}
└──────────────

_Enviando..._`
conn.sendFile(m.chat, vid.thumbnail, 'play', play, m, null, rpig)

if (size.split('MB')[0] >= limit) return m.reply(` ≡  *FG YTDL*\n\n▢ *⚖️Размер* : ${size}\n▢ *🎞️Calidad* : ${q}\n\n▢ _файл превышает лимит загрузки_ *+${limit} MB*`) 
if (size.includes('GB')) return m.reply(` ≡  *FG YTDL*\n\n▢ *⚖️Размер* : ${size}\n▢ *🎞️Качество* : ${q}\n\n▢ _файл превышает лимит загрузки_ *+${limit} MB*`)   
	  conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /vid$/.test(command)), `
 ≡  *FG YTDL*
  
▢ *📌Заголовок* : ${title}
▢ *🎞️Качество* : ${q}
▢ *⚖️Размер* : ${size}
`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done) 
    } catch {
		m.reply(`Error: intenta de nuevo`)
    }

}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']

export default handler
