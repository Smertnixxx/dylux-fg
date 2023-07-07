import TicTacToe from '../lib/tictactoe.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    conn.game = conn.game ? conn.game : {}
    if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `✳️ Вы все еще находитесь в игре, чтобы перезапустить сеанс, введите : *${usedPrefix}delttt*`
    if (!text) throw `✳️ Дайте залу название`
    let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    // m.reply('[WIP Feature]')
    if (room) {
        m.reply('✅ Найденный партнер')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'PLAYING'
        let arr = room.game.render().map(v => {
            return {
                X: '❎',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v]
        })
        let str = `
Ожидание чтобы @${room.game.currentTurn.split('@')[0]} как первый игрок
        
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

▢ *Айди зала* ${room.id}

▢ *Правило*
‣Составьте 3 ряда вертикальных, горизонтальных или диагональных символов, чтобы выиграть
‣ Введите *surrender*, чтобы выйти из игры и быть объявленным побежденным.
`.trim()
        if (room.x !== room.o) await conn.reply(room.x, str, m, {
            mentions: conn.parseMention(str)
        })
        await conn.reply(room.o, str, m, {
            mentions: conn.parseMention(str)
        })
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        }
        if (text) room.name = text
        
     conn.reply(m.chat, `⏳ *Ожидание пары*\nВведите следующую команду, чтобы принять
▢ *${usedPrefix + command} ${text}*

🎁Награда: *4999 XP*`, m, {
            mentions: conn.parseMention(text)
        })
        
   conn.game[room.id] = room
    }
    
}

handler.help = ['tictactoe <nombre Sala>']
handler.tags = ['game']
handler.command = ['tictactoe', 'ttc', 'ttt', 'xo']

export default handler
