let handler = async(m, { conn, text }) => {
     let name = m.fromMe ?  conn.user : conn.contacts[m.sender]
 conn.reply(global.owner[0] + `@s.whatsapp.net`, ` *@919609900020 Master someone's is calling you :V*`, m)

   conn.reply(m.chat, `
 Toshiro (@919609900020 ), Master someone's Calling You😊
 `.trim(), m)
     let mentionedJid = [m.sender]
 }
 handler.customPrefix = /@919609900020|Toshiro/i
 handler.command = new RegExp

 module.exports = handler