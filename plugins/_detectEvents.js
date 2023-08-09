// Creditos del codigo a @Gatito-kw //

/* GitHub: https://github.com/Gatito-kw */

/* Bot: https://github.com/Gatito-kw/nekobot-md */

import { WAMessageStubType } from '@adiwajshing/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants }) {
if (!m.messageStubType || !m.isGroup) return !0
   let groupName = (await conn.groupMetadata(m.chat)).subject
   let groupAdmins = participants.filter(p => p.admin)
   let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => global.imagen1)
   let img = await (await fetch(pp)).buffer()
   let chat = global.db.data.chats[m.chat]
   const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)]
   const mentionsContentM = [m.sender, m.messageStubParameters[0]]
   let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
   
   if (chat.detect2 && m.messageStubType == 29) {
      let txt1 = `*Недавно один участник был повышен до администратора.*\n\n`
         txt1 += `*◦  Группа:* ${groupName}\n`
         txt1 += `*◦  Новый администратор:* @${m.messageStubParameters[0].split`@`[0]}\n`
         txt1 += `*◦  Выполненный:* @${m.sender.split`@`[0]}`   
}
    
   if (chat.detect2 && m.messageStubType == 30) {
      let txt2 = `*Недавно администратор был понижен в должности до участника.*\n\n`
         txt2 += `*◦  Группа:* ${groupName}\n`
         txt2 += `*◦  Он снял с:* @${m.messageStubParameters[0].split`@`[0]}\n`
         txt2 += `*◦  Выполненный:* @${m.sender.split`@`[0]}`
}

    if (chat.detect2 && m.messageStubType == 27) {
      let txt3 = `*К группе присоединился новый участник.*\n\n`
         txt3 += `*◦  Представьтесь новичок Имя, Фото, Голосовое сообщение, Город*\n`
     if (!m.sender.endsWith('@g.us')) {
         txt3 += `*◦  Новый участник:* @${m.messageStubParameters[0].split`@`[0]}\n`
         txt3 += `*◦  Одобрил(а) заявку на вступление:* @${m.sender.split`@`[0]}`
   } else {
         txt3 += `*◦  Было добавлено:* @${m.messageStubParameters[0].split`@`[0]}\n`
   }
}
    
   if (chat.detect2 && m.messageStubType == 28) {
      let txt4 = `*Недавно один из участников группы был удален.*\n\n`
         txt4 += `*◦  Группа:* ${groupName}\n` 
     if (!m.sender.endsWith('@g.us')) {        
         txt4 += `*◦  Был удален(а):* @${m.messageStubParameters[0].split`@`[0]}\n`
         txt4 += `*◦  Выполненый:* @${m.sender.split`@`[0]}`
   } else {
         txt4 += `*◦  Был удален(а):* @${m.messageStubParameters[0].split`@`[0]}\n`   
   }       
}
       
   if (chat.detect2 && m.messageStubType == 32) {
      let ax 
    if (m.messageStubParameters[0] === m.sender) {
    ax = 'к сожалению'    
    } else {
    ax = 'удаленный'    
    }
      let txt5 = `*Участник ${ax} вышел из группы.*\n\n`
         txt5 += `*◦  Группа:* ${groupName}\n`
     if (ax === 'удаленный') {       
         txt5 += `*◦  Уходи и больше не возвращайся предатель!*\n`
         txt5 += `*◦  Выполненый:* @${m.sender.split`@`[0]}`
   } else {
         txt5 += `*◦  Предатель:* @${m.messageStubParameters[0].split`@`[0]}\n`   
   }            
}    
    
   if (chat.detect2 && m.messageStubType == 26) {
      let accion  
    if (m.messageStubParameters[0].split`@`[0] === 'on') {
      accion = 'закрытый'    
      } else {
      accion = 'открытый'   
      }
      let txt6 = `*Недавно были изменены настройки группы.*\n\n`
        txt6 += `*◦  Группа:* ${groupName}\n`
        txt6 += `*◦  Группа была:* ${'```' + accion + '```'}\n`
        txt6 += `*◦  Выполненый:* @${m.sender.split`@`[0]}`
}
    
   if (chat.detect2 && m.messageStubType == 21) {
      let txt7 = `*Недавно название группы было изменено.*\n\n`
         txt7 += `*◦  Новое имя:* ${'```' + groupName + '```'}\n`
         txt7 += `*◦  Выполненый:* @${m.sender.split`@`[0]}`
}

} /* Cierre del comando */
