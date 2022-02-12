let handler = async(m, { conn, args, usedPrefix }) => {
     let type = (args[0] || '').toLowerCase()
     let fox = global.DATABASE._data.users[m.sender].fox
     let horse = global.DATABASE._data.users[m.sender].horses
     let cat = global.DATABASE._data.users[m.sender].cat
     switch (type) {
         case 'fox':
             if (fox == 0) return m.reply('*You don't have a Fox Pet*')
             if (fox == 5) return m.reply('*Your pet is lvl max*')
             let __timer = (new Date - global.DATABASE._data.users[m.sender].rubahlastclaim)
             let _timer = (600000 - __timer)
             let timer = clockString(_timer)
             if (new Date - global.DATABASE._data.users[m.sender].rubahlastclaim > 600000) {
                 if (global.DATABASE._data.users[m.sender].pet food > 0) {
                     global.DATABASE._data.users[m.sender].foodpet -= 1
                     global.DATABASE._data.users[m.sender].anakrubah += 20
                     global.DATABASE._data.users[m.sender].rubahlastclaim = new Date * 1
                     conn.reply(m.chat, `Successfully fed pet ${type}`, m)
                     if (fox > 0) {
                         let ascendlvl = ((fox * 100) - 1)
                         if (global.DATABASE._data.users[m.sender].anakrubah > ascendlvl) {
                             global.DATABASE._data.users[m.sender].fox += 1
                             global.DATABASE._data.users[m.sender].fox -= (fox * 100)
                             conn.reply(m.chat, `*Congratulations Pet Fox you leveled up*`, m)
                         }
                     }
                 } else m.reply(`You don't have enough pet food`)
             } else m.reply(`Your pet is full, try feeding it *${time}* again`)
             break
         case 'horse':
             if (horse == 0) return m.reply('*You don't have a Horse Pet*')
             if (horse == 5) return m.reply('*Your pet is lvl max*')
             let __time = (new Date - global.DATABASE._data.users[m.sender].kudalastclaim)
             let _time = (600000 - __time)
             let time = clockString(_time)
             if (new Date - global.DATABASE._data.users[m.sender].kudalastclaim > 600000) {
                 if (global.DATABASE._data.users[m.sender].pet food > 0) {
                     global.DATABASE._data.users[m.sender].foodpet -= 1
                     global.DATABASE._data.users[m.sender].anakkuda += 20
                     global.DATABASE._data.users[m.sender].kudalastclaim = new Date * 1
                     conn.reply(m.chat, `Successfully fed pet ${type}`, m)
                     if (horse > 0) {
                         let ridelvl = ((horse * 100) - 1)
                         if (global.DATABASE._data.users[m.sender].kuda > ridelvl) {
                             global.DATABASE._data.users[m.sender].horses += 1
                             global.DATABASE._data.users[m.sender].foals -= (horses * 100)
                             conn.reply(m.chat, `*Congratulations your Horse Pet has leveled up*`, m)
                         }
                     }
                 } else m.reply(`You don't have enough pet food`)
             } else m.reply(`Your pet is full, try feeding it *${time}* again`)
             break
         case 'cat':
             if (cat == 0) return m.reply('*You don't have a Cat Pet*')
             if (cat == 5) return m.reply('*Your pet is lvl max*')
             let __time = (new Date - global.DATABASE._data.users[m.sender].kucinglastclaim)
             let _time = (600000 - __time)
             let time = clockString(_time)
             if (new Date - global.DATABASE._data.users[m.sender].kucinglastclaim > 600000) {
                 if (global.DATABASE._data.users[m.sender].pet food > 0) {
                     global.DATABASE._data.users[m.sender].foodpet -= 1
                     global.DATABASE._data.users[m.sender].anakkucat += 20
                     global.DATABASE._data.users[m.sender].kucinglastclaim = new Date * 1
                     conn.reply(m.chat, `Successfully fed pet ${type}`, m)
                     if (cat > 0) {
                         let riselvl = ((cat * 100) - 1)
                         if (global.DATABASE._data.users[m.sender].kitten > ascendlvl) {
                             global.DATABASE._data.users[m.sender].cat += 1
                             global.DATABASE._data.users[m.sender].kittens -= (cats * 100)
                             conn.reply(m.chat, `*Congratulations your Pet Cat has leveled up*`, m)
                         }
                     }
                 } else m.reply(`You don't have enough pet food`)
             } else m.reply(`Your pet is full, try feeding it *${time}* again`)
             break
         defaults:
             return conn.reply(m.chat, `${usedPrefix}feed [cat | fox | horse]\nSample usage: *${usedPrefix}catfeed*`, m)
     }
 }
 handler.help = ['feed [pet type]']
 handler.tags = ['rpg']
 handler.command = /^(feed(ing)?)$/i

 module.exports = handler

 function clockString(ms) {
   let h = Math.floor(ms / 3600000)
   let m = Math.floor(ms / 600000) % 60
   let s = Math.floor(ms / 1000) % 60
   console.log({ms,h,m,s})
   return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
 }