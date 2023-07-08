//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let poin = 300
    let reseqv = `✳️ Выберете камень/Бумага/Ножницы\n\n🌿Пример : *${usedPrefix + command}* Бумага\n`
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
        m.reply(`▢ *Сопереживать*\n\n‣ Tú : ${text}\n‣ DyLux : ${astro}\n\n🎁 Точки (±)100 XP`)
    } else if (text == 'Камень') {
        if (astro == 'Ножницы') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Выйграл* 🎊\n\n‣ Tú : ${text}\n‣ DyLux : ${astro}\n\n🎁 Точки *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Потерял*\n\n‣ Tú : ${text}\n‣ DyLux : ${astro}\n\n Точки *-${poin} XP*`)
        }
    } else if (text == 'Ножницы') {
        if (astro == 'Бумага') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Выйграл* 🎊\n\n‣ Tú : ${text}\n‣ DyLux : ${astro}\n\n🎁 Точки *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Потерял*\n\n‣ Tú : ${text}\n‣ DyLux : ${astro}\n\nPuntos *-${poin} XP*`)
        }
    } else if (text == 'Бумага') {
        if (astro == 'Камень') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Выйграл* 🎊\n\n‣ Tú : ${text}\n‣ DyLux : ${astro}\n\n🎁 Точки *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Потерял*\n\n‣ Tú : ${text}\n‣ DyLux : ${astro}\n\nТочки *-${poin} XP*`)
        }
    } else {
        throw reseqv
    }
}
handler.help = ['ppt <piedra/papel/tijera>']
handler.tags = ['game']
handler.command = ['ppt'] 
handler.register = false

export default handler
