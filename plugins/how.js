let handler = async(m, { conn, command, text }) => {
   if (!text) throw `Who is *${command.replace('how', '').toUpperCase()}*`
   conn.reply(m.chat, `
 ${command} *${text}*
 *${text}* is *${Math.floor(Math.random() * 101)}*% ${command.replace('how', '').toUpperCase()}
 `.trim(), m, m.mentionedJid ?  {
     contextInfo: {
       mentionedJid: m.mentionedJid
     }
   } : { })
 }
 handler.help = ['gay', 'smart', 'beautiful', 'handsome', 'peat', 'crazy', 'lesbi', 'stress', 'bucin', 'jones', 'sadboy'].  map(v => 'how' + v + 'who?')
 handler.tags = ['shells']
 handler.command = /^how(gay|smart|beautiful|handsome|gabut|crazy|lesbi|stress?|bucin|jones|sadboy)/i
 handler.owner = false
 handler.mods = false
 handler.premium = false
 handler.group = false
 handler.private = false

 handler.admin = false
 handler.botAdmin = false

 handler.fail = null

 module.exports = handler