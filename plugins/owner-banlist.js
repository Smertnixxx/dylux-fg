//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix }) => {
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    
    m.reply(`
≡ *ЗАБЛОКИРОВАННЫЕ ПОЛЬЗОВАТЕЛИ*
┏━━━━━━━━━━━━━━━━◊♦►
┣ На данный момент : *${users.length}* 
┗━━━━━━━━━━━━━━━━◊♦►

${users ? '\n' + users.map(([jid], i) => `
${i + 1}. ${conn.getName(jid) == undefined ? 'Неизвестный' : conn.getName(jid)}
▢ ${jid}
`.trim()).join('\n') : ''}
`.trim())
}
handler.help = ['ЗабаненыеПользователи']
handler.tags = ['owner']
handler.command = ['забаненыепользователи', 'listban'] 

export default handler
