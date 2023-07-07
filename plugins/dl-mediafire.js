
import fetch from 'node-fetch'
import { mediafiredl } from '@bochilteam/scraper'
import fg from 'api-dylux'
let free = 150 // limite de descarga
let prem = 300 //si su servidor tienes menos de 2GB baja el límite
let handler = async (m, { conn, args, text, usedPrefix, command, isOwner, isPrems }) => {
	
   if (!args[0]) throw `✳️ Введите ссылку mediafire рядом с командой`
    if (!args[0].match(/mediafire/gi)) throw `❎ Неверная ссылка`
    m.react(rwait)
    
    let limit = isPrems || isOwner ? prem : free
	let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url: u }))).buffer()
    try {
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let isLimit = limit * 1024 < filesize
    let caption = `
   ≡ *МЕДИАФАЕР*
▢ *Имя:* ${filename}
▢ *Размер:* ${filesizeH}
▢ *Расширение:* ${ext}
▢ *Повышенный:* ${aploud}
${isLimit ? `\n▢ Файл превышает лимит загрузкиa *+${free} MB*\nПерейдите на премиум, чтобы иметь возможность загружать файлы более *${prem} MB*` : ''} 
`.trim()
    await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m)  
    if(!isLimit) await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
    
    } catch {

        try {
	let res = await fg.mediafireDl(args[0])
     let { url, url2, filename, ext, upload_date, filesize, filesizeB } = res
    let isLimit = limit * 1024 < filesizeB
    let caption = `
   ≡ *МЕДИАФАЕР*
▢ *Имя:* ${filename}
▢ *Размер:* ${filesize}
▢ *Расширение:* ${ext}
▢ *Повышеный:* ${upload_date}
${isLimit ? `\n▢ Файл превышает лимит загрузки *+${free} MB*\nПерейдите на премиум, чтобы иметь возможность загружать файлы более *${prem} MB*` : ''} 
`.trim()

await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m)
if(!isLimit) await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
} catch {
    m.reply(`Error: intenta con otro link`)
}

  }
  
}
handler.help = ['mediafire <url>']
handler.tags = ['dl', 'prem']
handler.command = ['mediafire', 'mfire'] 
handler.diamond = true
handler.premium = false

export default handler
