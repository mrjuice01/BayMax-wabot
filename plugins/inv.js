let leveling = require('../lib/levelling')
 let handler = async(m, { conn, usedPrefix }) => {
     let healt = global.DATABASE._data.users[m.sender].healt
     let armor = global.DATABASE._data.users[m.sender].armor
     let warn = global.DATABASE._data.users[m.sender].warn
     let pet = global.DATABASE._data.users[m.sender].pet
     let cat = global.DATABASE._data.users[m.sender].cat
     let _cat = global.DATABASE._data.users[m.sender].kittens
     let fox = global.DATABASE._data.users[m.sender].fox
     let _fox = global.DATABASE._data.users[m.sender].fox child
     let horse = global.DATABASE._data.users[m.sender].horses
     let _horse = global.DATABASE._data.users[m.sender].foal
     let diamond = global.DATABASE._data.users[m.sender].diamond
     let potion = global.DATABASE._data.users[m.sender].potion
     let common = global.DATABASE._data.users[m.sender].common
     let foodpet = global.DATABASE._data.users[m.sender].foodpet
     let uncommon = global.DATABASE._data.users[m.sender].uncommon
     let mythic = global.DATABASE._data.users[m.sender].mythic
     let legendary = global.DATABASE._data.users[m.sender].legendary
     let level = global.DATABASE._data.users[m.sender].level
     let money = global.DATABASE._data.users[m.sender].money
     let exp = global.DATABASE._data.users[m.sender].exp
     let trash = global.DATABASE._data.users[m.sender].garbage
     let { min, xp, max } = leveling.xpRange(level, global.multiplier)
     let math = max - xp
     let name = m.fromMe ?  conn.user : conn.contacts[m.sender]
     let sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money)
     let sortedlevel = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].level - a[1].level)
     let sorteddiamond = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
     let sortedpotion = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].potion - a[1].potion)
     let sortedgarbage = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].garbage - a[1].garbage)
     let sortedcommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].common - a[1].common)
     let sorteduncommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
     let sortedmythic = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
     let sortedlegendary = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
     let usersmoney = sortedmoney.map(v => v[0])
     let usersdiamond = sorteddiamond.map(v => v[0])
     let userspotion = sortedpotion.map(v => v[0])
     let userstrash = sortedgarbage.map(v => v[0])
     let userslevel = sortedlevel.map(v => v[0])
     let userscommon = sortedcommon.map(v => v[0])
     let usersuncommon = sorteduncommon.map(v => v[0])
     let usersmythic = sortedmythic.map(v => v[0])
     let userslegendary = sortedlegendary.map(v => v[0])
     let str = `
 Inventory *${name.vnmae ||  name.notify ||  name.name ||  ('+' + name.jid.split`@`[0])}*

 Health: *${health}*
 Armor: *${armor == 0 ?  'Not Have' : '' ||  armor == 1 ?  'Leather Armor' : '' ||  armor == 2 ?  'Iron Armor' : '' ||  armor == 3 ?  'Gold Armor' : '' ||  armor == 4 ?  'Diamond Armor' : '' ||  armor == 5 ?  'Netherite Armor' : ''}*\n
 Money: *${money}*
 Level: *${level}*
 Exp: *${exp}*

 *Inventory*
 Diamonds: *${diamonds}*
 Potions: *${potions}*
 Trash: *${junk}*
 Pet Food: *${pet food}*
 Total inv: *${diamond + potion + trash + pet food}* item

 *crates*
 Common: *${common}*
 Uncommon: *${uncommon}*
 Mythic: *${mythic}*
 Legendary: *${legendary}*
 Pets: *${pet}*

 *pets*
 Horse: *${horse == 0 ?  'Not Have' : '' ||  horse == 1 ?  'Level 1' : '' ||  horse == 2 ?  'Level 2' : '' ||  horse == 3 ?  'Level 3' : '' ||  horse == 4 ?  'Level 4' : '' ||  horse == 5 ?  'MAX level' : ''}*
 Fox: *${fox == 0 ?  'Not Have' : '' ||  fox == 1 ?  'Level 1' : '' ||  fox == 2 ?  'Level 2' : '' ||  fox == 3 ?  'Level 3' : '' ||  fox == 4 ?  'Level 4' : '' ||  fox == 5 ?  'MAX level' : ''}*
 Cat: *${cat == 0 ?  'Not Have' : '' ||  cat == 1 ?  'Level 1' : '' ||  cat == 2 ?  'Level 2' : '' ||  cat == 3 ?  'Level 3' : '' ||  cat == 4 ?  'Level 4' : '' ||  cat == 5 ?  'MAX level' : ''}*\n\n
 *Progress*\n
 ️
 Level *${level}* To Level *${level + 1}*
 Exp *${exp}* -> *${max}* [${math <= 0 ?  `Ready to *${usedPrefix}levelup*` : `${math} XP left to levelup`}]
 ️
 ️
 Fox ${fox == 0 ?  'Not Have' : '' ||  fox > 0 && fox < 5 ?  `Level *${fox}* To level *${fox + 1}*\n│Exp *${_fox}* -> *${fox * 100}*` : '' ||  fox == 5 ?  '*MaxLevel*' : ''}
 ️
 ️
 Cat ${cat == 0 ?  'Not Have' : '' ||  cat > 0 && cat < 5 ?  `Level *${cat}* To level *${cat + 1}*\n│Exp *${_cat}* -> *${cat * 100}*` : '' ||  cat == 5 ?  '*MaxLevel*' : ''}
 ️
 ️
 Horse ${horse == 0 ?  'Not Have' : '' ||  horse > 0 && horse < 5 ?  `Level *${horse}* To level *${horse + 1}*\n│Exp *${_horse}* -> *${horse * 100}*` : '' ||  horse == 5 ?  '*MaxLevel*' : ''}
 ️


 *achievement*
 1.Top level *${userslevel.indexOf(m.sender) + 1}* of *${userslevel.length}*
 2.Top Money *${usersmoney.indexOf(m.sender) + 1}* from *${usersmoney.length}*
 3.Top Diamond *${usersdiamond.indexOf(m.sender) + 1}* from *${usersdiamond.length}*
 4.Top Potion *${userspotion.indexOf(m.sender) + 1}* from *${userpotion.length}*
 5.Top Common *${userscommon.indexOf(m.sender) + 1}* of *${userscommon.length}*
 6.Top Uncommon *${usersuncommon.indexOf(m.sender) + 1}* from *${usersuncommon.length}*
 7.Top Mythic *${usersmythic.indexOf(m.sender) + 1}* from *${usersmythic.length}*
 8.Top Legendary *${userslegendary.indexOf(m.sender) + 1}* from *${userslegendary.length}*
 9.Top Junk *${userssampah.indexOf(m.sender) + 1}* from *${userssampah.length}*
 \n${readMore}\n
 Color: *${warning}*
 Banned: *No*
 `.trim()
     conn.reply(m.chat, str, m)
 }
 handler.help = ['inventory', 'inv']
 handler.tags = ['rpg']
 handler.command = /^(inv(entory)?|bal|level(ing)?|money|e?xp)$/i
 module.exports = handler

 const more = String.fromCharCode(8206)
 const readMore = more.repeat(4001)