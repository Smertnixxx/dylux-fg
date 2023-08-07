let handler = async (m, { conn, participants, groupMetadata, args }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n▢ ')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'

let text = `
≡ *Персонал группы* _${groupMetadata.subject}_

┏━━ *Админы* ━━┓
🫅 ${listAdmin}
┗━━━━━━━━━━━━━━━━┛
`.trim()
conn.sendFile(m.chat, pp, 'staff.png', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['Персонал']
handler.tags = ['group']
handler.command = ['staff', 'админы', 'персонал'] 
handler.group = true
export default handler
