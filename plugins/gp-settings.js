let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'Открыть': 'not_announcement',
        'Закрыть': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*✳️ Выберете действие:*
  *🔒 ${usedPrefix + command} закрыть*
  *🔓 ${usedPrefix + command} открыть*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['Группа *открыть/закрыть*']
handler.tags = ['admin']
handler.command = ['group', 'группа'] 
handler.admin = true
handler.botAdmin = true

export default handler
