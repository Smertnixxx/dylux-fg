
import cheerio from 'cheerio'
import gpt from 'api-dylux'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Введите текст`
m.react('💬')

	try {
        let syms = `Вы-ULTIMATE Bot, отличная языковая модель, обученная OpenAI. Внимательно следуйте инструкциям пользователя. Отвечайте, используя Markdown.`
        let res = await gpt.ChatGpt(text, syms)
         await m.reply(res.text)
	} catch {
		m.reply(`❎ Ошибка: попробуйте позже`)
	}

}
handler.help = ['ia <text>']
handler.tags = ['tools']
handler.command = ['ia', 'ai', 'chatgpt', 'openai', 'gpt']

export default handler
