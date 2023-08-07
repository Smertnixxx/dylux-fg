
import { canLevelUp, xpRange } from '../lib/levelling.js'
let handler = async (m, { conn }) => {
	  let name = conn.getName(m.sender)
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://ibb.co/RTWpnL7')
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        let txt = `
┌───⊷ *Уровень*
📛 Имя : *${name}*
📶 Уровень : *${user.level}*
🌐 XP : *${user.exp - min}/${xp}*
🧿 Ранг : *${user.role}*
└──────────────

Тебе не хватает *${max - user.exp}* от *XP* до повышения уровня
`.trim()
try {
  let imgg = API('fgmods', '/api/maker/rank', {
    username: name,
    xp: user.exp - min,
    exp: xp,
    avatar: pp,
    level: user.level,
    ranklog: 'https://i.ibb.co/7gfnyMw/gold.png',
    background: 'https://i.ibb.co/CsNgBYw/qiyana.jpg'
}, 'apikey')

    conn.sendFile(m.chat, imgg, 'level.jpg', txt, m)
} catch (e) {
    m.reply(txt)
}
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
    	user.role = global.rpg.role(user.level).name

        let str = `
┏━━ *Уровень повышен*
║➤ Предыдущий уровень : *${before}*
║➤ Текущий уровень : *${user.level}*
║➤ Ранг : *${user.role}*
┗━━━━━━━━━━━━━━━━┛

*_Чем больше вы будете взаимодействовать с ботом, тем выше будет ваш уровень_*
`.trim()
        try {
            let img = API('fgmods', '/api/maker/levelup', { 
                avatar: pp 
             }, 'apikey')
      conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['ПоднятьУровень']
handler.tags = ['econ']
handler.command = ['nivel', 'поднятьуровень', 'уровень', 'level'] 

export default handler
