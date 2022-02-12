let handler = async (m,Uhm... where's the url? { conn, args }) => {
  if (!args[0]) throw '?'
  global.API('xteam', '/dl/', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.help = [].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^\x00s$/i
handler.disabled = true

module.exports = handler
