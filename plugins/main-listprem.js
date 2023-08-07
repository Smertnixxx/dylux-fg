
let handler = async (m, { conn, args, usedPrefix, command }) => {
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid) 
let teks = `🫅 *ПРЕМИУМ ПОЛЬЗОВАТЕЛИ*\n◄♦◊━━━━━━━━━━━━━━━━◊♦►\n` + prem.map(v => '- @' + v.replace(/@.+/, '')).join`\n◄♦◊━━━━━━━━━━━━━━━━◊♦►\n`
m.reply(teks, null, {mentions: conn.parseMention(teks)})

}
handler.help = ['ПремиумЛист']
handler.tags = ['main']
handler.command = ['listprem', 'premlist', 'премиумлист', 'listpremium'] 

export default handler
