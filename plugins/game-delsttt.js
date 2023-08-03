
let handler = async (m, { conn, text }) => {
	let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.reply(m.chat,`✳️ Ты не в игре в Тиктакто 🎮 `, m)
delete conn.game[room.id]
await conn.reply(m.chat, `✅ Сеанс *tictactoe был перезапущен 🎮*`, m)
}
handler.help = ['Тиктакто']
handler.tags = ['game']
handler.command = ['delttc', 'delttt', 'Тиктакто', 'delxo']

export default handler
