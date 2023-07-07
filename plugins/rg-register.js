
import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ Вы уже зарегистрированы?\n\nХотите перерегистрироваться?\n\n 📌Используйте эту команду, чтобы удалить свою запись \n*${usedPrefix}unreg* <Номер телефона>`
  if (!Reg.test(text)) throw `⚠️ Formato incorrecto\n\n ✳️ Использование команды: *${usedPrefix + command} имя. возраст*\n📌Примеры : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ Имя не может быть пустым'
  if (!age) throw '✳️ Возраст не может быть пустым'
  if (name.length >= 30) throw '✳️ Имя слишком длинное' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Вау, дедушка хочет поиграть в бота'
  if (age < 5) throw '🚼 есть дедушка, малыш! '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *РЕГИСТРАЦИЯ* 」─
▢ *Имя:* ${name}
▢ *Возраст* : ${age} 
▢ *Номер телефона* :
${sn}
└──────────────

 *${usedPrefix}help* пункт главного меню
`.trim())
}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler

