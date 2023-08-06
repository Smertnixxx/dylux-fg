let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*[❗] Сообщение приветствия настроено правильно для этой группы*')
} else throw `*[❗] Введите желаемое добавленное приветственное сообщение, используйте:*\n*- @user (упоминание)*\n*- @group (название группы)*\n*- @desc (описание группы)*`
}
handler.help = ['Приветсвие <Текст>']
handler.tags = ['owner']
handler.command = ['приветсвие'] 
handler.admin = true
export default handler
