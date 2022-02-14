let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn ='src/sound/Baymax.mp3'
conn.sendFile(m.chat, vn, 'Baymax.mp3', null, m, true, {
type: 'audioMessage', // force no convert in ffmpeg
ptt: true // true above doesn't work, because it's forced without converting ;v
})
}
handler.customPrefix = /.help|!help|)help/i
handler.command = new RegExp
module.exports = handler
