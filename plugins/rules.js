let handler = async m => m.reply(`
⚠️ *BOT RULES* ⚠️

📢 _Do not call bot, if you do then you'll get automatically blocked by bot._
    
📢 _Do not spam bot with commands, if bot is not responding then it means either bot is off or there's internet issue at owner's end._
    
📢 _Do not abuse/disrespect bot and its owner._
    
📢 _If you see any bug/error in bot then report it to owner with the command !bug/report <problem>._
    
📢 _If you want this bot in your group then contact owner by typing !owner/creator._
    
📢 _Enjoy the bot and have fun._
`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rules$/i

module.exports = handler
