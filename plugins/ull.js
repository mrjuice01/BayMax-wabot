let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let sticker = './src/sticker/ull.webp'
conn.sendFile(m.chat, sticker, 'ull.webp', null, m, true, {
type: 'stickerMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /😒|😎|😂|😆|😅|😂|🤣|😏|😅|😊|😠|😑|🥲|😈|😌|😘|🤨|😙|🥴/i
handler.command = new RegExp
module.exports = handler