//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let poin = 300
    let reseqv = `✳️ Выберете Камень/Бумага/Ножницы\n\n🌿Пример : *${usedPrefix + command}* Бумага\n`
    if (!text) throw reseqv
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'Камень'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'Ножницы'
    } else {
        astro = 'Бумага'
    }


    if (text == astro) {
      global.db.data.users[m.sender].exp += 100
        m.reply(`▢ *Сопереживать*\n\n‣ Tú : ${text}\n‣ Бот : ${astro}\n\n🎁 Выйгрыш (±)100 XP`)
    } else if (text == 'Камень') {
        if (astro == 'Ножницы') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Выйграл* 🎊\n\n‣ Ты : ${text}\n‣ Бот : ${astro}\n\n🎁 Выйгрыш *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Потерял*\n\n‣ Ты : ${text}\n‣ Бот : ${astro}\n\n Выйгрыш *-${poin} XP*`)
        }
    } else if (text == 'Ножницы') {
        if (astro == 'Бумага') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Выйграл* 🎊\n\n‣ Tы : ${text}\n‣ Бот : ${astro}\n\n🎁 Выйгрыш *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Потерял*\n\n‣ Ты : ${text}\n‣ Бот : ${astro}\n\nВыйгрыш *-${poin} XP*`)
        }
    } else if (text == 'Бумага') {
        if (astro == 'Камень') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Выйграл* 🎊\n\n‣ Ты : ${text}\n‣ Бот : ${astro}\n\n🎁 Точки *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Потерял*\n\n‣ Ты : ${text}\n‣ Бот : ${astro}\n\nТочки *-${poin} XP*`)
        }
    } else {
        throw reseqv
    }
}
handler.help = ['Суефа (Камень/Ножницы/Бумага']
handler.tags = ['game']
handler.command = ['Суефа'] 
handler.register = false

export default handler
