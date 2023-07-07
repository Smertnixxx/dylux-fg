
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *ПОЖЕРТВОВАНИЯ*
let img = 'https://ibb.co/cTSc8S9'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
