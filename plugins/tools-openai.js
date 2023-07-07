
import cheerio from 'cheerio'
import gpt from 'api-dylux'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Введите текст`
m.react('💬')

	try {
        let syms = `Eres DyLux Bot, un gran modelo de lenguaje entrenado por OpenAI. Siga cuidadosamente las instrucciones del usuario. Responde usando Markdown.`
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
