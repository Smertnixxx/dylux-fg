
import fg from 'api-dylux' 
import { tiktokdl } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `✳️ Входите по ссылке в Tiktok\n\n 📌 Пример : ${usedPrefix + command} https://vm.tiktok.com/ZMYG92bUh/`
if (!args[0].match(/tiktok/gi)) throw `❎ убедитесь, что ссылка взята из tiktok`
m.react(rwait)

try {
    let p = await fg.tiktok(args[0]) 
    let te = `
┌─⊷ TIKTOK
▢ *Имя:* ${p.nickname}
▢ *Никнейм:* ${p.unique_id}
▢ *Последователи:* ${p.duration}
▢ *Продолжающий:* ${p.description}
└───────────`
    conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
    m.react(done)
    } catch {  	
    try { 
	const { author: { nickname }, video, description } = await tiktokdl(args[0])
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw '❎ Ошибка при описании видео'
    conn.sendFile(m.chat, url, 'fb.mp4', `
┌─⊷ *TIKTOK DL-2*
▢ *Никнейм:* ${nickname} ${description ? `\n▢ *Описание:* ${description}` : ''}
└───────────`, m)
m.react(done)
} catch {
    m.reply(`❎ Ошибка при описании видео`)
}
} 
    
}  
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.diamond = true

export default handler
