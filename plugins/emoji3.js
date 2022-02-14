let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `${pickRandom([':v','🐦','🗿'])}`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /🐦/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
