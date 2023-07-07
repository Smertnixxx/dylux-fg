
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `✳️ Введите имя пользователя в Instagram\n\n📌Пример: ${usedPrefix + command} Baton_coder_bota` 
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Имя:* ${res.name} 
▢ *🔖Никнейм:* ${res.username}
▢ *👥Последователи:* ${res.followersH}
▢ *🫂Продолжающий:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Посты:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await conn.sendFile(m.chat, res.profilePic, 'igstalk.png', te, m)
      } catch {
        m.reply(`✳️ Убедитесь, что имя пользователя есть в *Instagram*`)
      }
}
handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['igstalk'] 

export default handler
