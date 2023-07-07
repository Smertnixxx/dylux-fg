
import fg from 'api-dylux'
let handler = async (m, { conn, text, args }) => {
	
  if (!text) throw `✳️ Введите имя пользователя пользователя TikTok`
try {
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK* 
▢ *🔖Имя:* ${res.name}
▢ *🔖Никнейм:* ${res.username}
▢ *👥Последователи:* ${res.followers}
▢ *🫂Продолжающий:* ${res.following}
▢ *📌Описание:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
  await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
} catch {
    m.reply(`✳️ Убедитесь, что имя пользователя указано в TikTok`)
}
}
handler.help = ['tiktokstalk']
handler.tags = ['dl']
handler.command = /^t(tstalk|iktokstalk)$/i

export default handler
