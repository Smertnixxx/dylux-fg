//import db from '../lib/database.js'

const xpperdiamond = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperdiamond) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperdiamond * count) {
    global.db.data.users[m.sender].exp -= xpperdiamond * count
    global.db.data.users[m.sender].diamond += count
    conn.reply(m.chat, `
┌─「 *ПРИМЕЧАНИЕ ОБ ОПЛАТЕ* 」
‣ *Вы купили* : + ${count}💎 
‣ *Потраченно* : -${xpperdiamond * count} XP
└──────────────`, m)
  } else conn.reply(m.chat, `❎ Извини, тебе не хватает *XP* чтобы купить *${count}* Алмазы💎\n\n Вы можете получить *XP* используя команды из *меню игры и экономика*`, m)
}
handler.help = ['Купить', 'КупитьВсе']
handler.tags = ['econ']
handler.command = ['купить', 'купиьвсе'] 

handler.disabled = false

export default handler
