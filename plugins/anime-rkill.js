import fetch from 'node-fetch'
import axios from 'axios'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
//import db from '../lib/database.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
	
	 let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    if (!who) throw `✳️ Пометьте или упомяните кого-нибудь\n\n📌 Пример : ${usedPrefix + command} @tag` 
    
    let user = global.db.data.users[who]
    let name = conn.getName(who) 
   let name2 = conn.getName(m.sender) 
   m.react(rwait)

  let rki = await fetch(`https://api.waifu.pics/sfw/kill`)
    if (!rki.ok) throw await rki.text()
   let jkis = await rki.json()
   let { url } = jkis
   let stiker = await sticker(null, url, `(${name2}) он убил`, `${name}`)
   conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
   m.react('🗡️') 
   
}

handler.help = ['Убить @Пользователь']
handler.tags = ['rnime']
handler.command = ['убить']
handler.diamond = true
handler.group = true

export default handler
