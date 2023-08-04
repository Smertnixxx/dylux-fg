const items = ['diamond', 'exp']
let confirmation = {}

async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('ты делаешь перевод')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `✳️ Правильное использование команды
*${usedPrefix + command}*  [тип] [количество] [@Пользователь]

📌 Пример : 
*${usedPrefix + command}* exp 65 @${m.sender.split('@')[0]}

📍 Передаваемые предметы
┌──────────────
▢ *diamond* = Алмазы 💎
▢ *exp* = Опыт 🆙
└──────────────
`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return conn.reply(m.chat, lol, m, { mentions: [m.sender] })
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply('✳️ Помечает пользователя')
    if (!(who in global.db.data.users)) return m.reply(`✳️ Пользователя нет в моей базе данных`)
    if (user[type] * 1 < count) return m.reply(`✳️  *${type}*  недостаточно для передачи`)
    let confirm = `
Вы уверены, что хотите перевести? *${count}* _*${type}*_ a  *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}* ? 

- У тебя есть  *60s* 
_Ответь *Да* o *Нет*_
`.trim()
   
    //conn.sendButton(m.chat, confirm, fgig, null, [['si'], ['no']], m, { mentions: [who] })
    m.reply(confirm, null, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('⏳ Время истекло'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/no?/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('✅ Передача Отменена')
    }
    if (/si?/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`✅ Осуществляется передача \n\n*${count}* *${type}*  a @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`❎ Ошибка при передаче *${count}* ${type} a *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['Банк'].map(v => v + ' [тип] [сумма] [@Пользователь]')
handler.tags = ['econ']
handler.command = ['payxp','банк', 'transfer', 'darxp','dardi',]

handler.disabled = false

export default handler

function isNumber(x) {
    return !isNaN(x)
}
