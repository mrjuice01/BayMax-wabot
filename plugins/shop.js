let { MessageType } = require('@adiwajshing/baileys')
 const potion = 500
 const Spot = 150
 const Bdiamond = 900
 const Sdiamond = 750
 const Bcommon = 200
 const Scommon = 20
 const Suncommon = 100
 const Buncommon = 600
 const Bmythic = 2000
 const Smythic = 500
 const Blegendary = 7500
 const Legendary = 3000
 const Trash = 10
 const Trash = 2
 let handler = async(m, { conn, command, args, usedPrefix, DevMode }) => {
     const _armor = global.DATABASE._data.users[m.sender].armor
     const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor =  = 4 ? 299999 : '')
     let type = (args[0] || '').toLowerCase()
     let _type = (args[1] || '').toLowerCase()
     let buy and sell = (args[0] || '').toLowerCase()
     const Kchat = `
 ${usedPrefix}shop <Buy|sell> <item> <quantity>\n
 Usage example: *${usedPrefix}shop buy potion 1*\n\n
 Item List:\n\n
 *Item |  Purchase price*\n
 Potions: ${potions}
 Diamonds: ${Bdiamond}
 Common: ${Bcommon}
 Uncommon: ${Buncommon}
 Mythic: ${Bmythic}
 Legendary: ${Blegendary}
 Trash: ${Trash}
 Armor: ${armor}\n\n
 *Item |  Selling Price*\n
 Potions: ${Spotions}
 Diamonds: ${Sdiamond}
 Common: ${Scommon}
 Uncommon: ${Suncommon}
 Mythic: ${Smythic}
 Legendary: ${Slegendary}
 Junk: ${Junk}\n\n
 `.trim()
     try {
         if (/shop|shop/i.test(command)) {
             const count = args[2] && args[2].length > 0 ?  Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] ||  args.length < 4 ?  1: Math.min(1, count)
             const trash = global.DATABASE._data.users[m.sender].garb
             switch (buy and sell) {
             case 'buy':
                 switch (_type) {
                     case 'potion':
                             if (global.DATABASE._data.users[m.sender].money >= potion * count) {
                                 global.DATABASE._data.users[m.sender].money -= potion * count
                                 global.DATABASE._data.users[m.sender].potion += count * 1
                                 conn.reply(m.chat, `Success bought ${count} Potion for ${potion * count} money\n\nUse potion by typing: *${usedPrefix}use potion <amount>*`, m)
                             } else conn.reply(m.chat, `You don't have enough money to buy a ${count} Potion for ${potion * count} money`,)
                         break
                     case 'diamonds':
                             if (global.DATABASE._data.users[m.sender].money >= Bdiamond * count) {
                                 global.DATABASE._data.users[m.sender].diamond += count * 1
                                 global.DATABASE._data.users[m.sender].money -= Bdiamond * count
                                 conn.reply(m.chat, `Success bought ${count} Diamond for ${Bdiamond *count} money`, m)
                             } else conn.reply(m.chat, `You don't have enough money`, m)
                        
                         break
                     'common' case:
                             if (global.DATABASE._data.users[m.sender].money >= Bcommon * count) {
                                 global.DATABASE._data.users[m.sender].common += count * 1
                                 global.DATABASE._data.users[m.sender].money -= Bcommon * count
                                 conn.reply(m.chat, `Success bought ${count} Common crate at ${Bcommon * count} money`, m)
                             } else conn.reply(m.chat, `You don't have enough money to buy ${count} Common crate for ${Bcommon * count} money\n\nOpen the crate by typing: *${usedPrefix}open common*`,  m)
                        
                         break
                     case 'uncommon':
                             if (global.DATABASE._data.users[m.sender].money >= Buncommon * count) {
                                 global.DATABASE._data.users[m.sender].uncommon += count * 1
                                 global.DATABASE._data.users[m.sender].money -= Buncommon * count
                                 conn.reply(m.chat, `Success bought ${count} Uncommon crate for ${Buncommon * count} money`, m)
                             } else conn.reply(m.chat, `You don't have enough money to buy ${count} Uncommon crate for ${Buncommon * count} money\n\nOpen the crate by typing: *${usedPrefix}open uncommon*`,  m)
                        
                         break
                     case 'mythic':
                             if (global.DATABASE._data.users[m.sender].money >= Bmythic * count) {
                                     global.DATABASE._data.users[m.sender].mythic += count * 1
                                 global.DATABASE._data.users[m.sender].money -= Bmythic * count
                                 conn.reply(m.chat, `Success bought ${count} Mythic crate at ${Bmythic * count} money`, m)
                             } else conn.reply(m.chat, `You don't have enough money to buy ${count} Mythic crate for ${Bmythic* count} money\n\nOpen the crate by typing: *${usedPrefix}open mythic*`,  m)
                        
                         break
                     'legendary' case:
                             if (global.DATABASE._data.users[m.sender].money >= Blegendary * count) {
                                 global.DATABASE._data.users[m.sender].legendary += count * 1
                                 global.DATABASE._data.users[m.sender].money -= Blegendary * count
                                 conn.reply(m.chat, `Success bought ${count} Legendary crate at ${Blegendary * count} money`, m)
                             } else conn.reply(m.chat, `You don't have enough money to buy a ${count} Legendary crate for ${Blegendary * count} money\n\nOpen a crate by typing: *${usedPrefix}open legendary*`,  m)
                        
                         break
                     'garbage' case:
                             if (global.DATABASE._data.users[m.sender].money >= Trash * count) {
                                 global.DATABASE._data.users[m.sender].garbage += count * 1
                                 global.DATABASE._data.users[m.sender].money -= Trash * count
                                 conn.reply(m.chat, `Success bought ${count} Junk at ${Trash * count} money`, m)
                             } else conn.reply(m.chat, `You don't have enough money to buy ${count} Junk for ${Trash * count} money`.trim(), m)
                        
                         break
                     case 'armor':
                             if (global.DATABASE._data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Your armor is *Level Max*', m)
                             if (global.DATABASE._data.users[m.sender].money > armor) {
                                 global.DATABASE._data.users[m.sender].armor += 1
                                 global.DATABASE._data.users[m.sender].money -= armor * 1
                                 conn.reply(m.chat, `Success buy armor for ${armor} money` ,m)
                             } else conn.reply(m.chat, `you don't have enough money to buy armor for ${armor} money`, m)
                        
                         break
                     defaults:
                         return conn.reply(m.chat, Kchat, m)
                 }
                 break
             case 'sell':
                 switch (_type) {
                     case 'potion':
                         if (global.DATABASE._data.users[m.sender].potion >= count * 1) {
                             global.DATABASE._data.users[m.sender].money += Spotion * count
                             global.DATABASE._data.users[m.sender].potion -= count * 1
                             conn.reply(m.chat, `Success selling ${count} Potion for ${Spotion * count} money`.trim(), m)
                         } else conn.reply(m.chat, `You don't have enough potions`.trim(), m)
                         break
                     'common' case:
                         if (global.DATABASE._data.users[m.sender].common >= count * 1) {
                             global.DATABASE._data.users[m.sender].money += Scommon * count
                             global.DATABASE._data.users[m.sender].common -= count * 1
                             conn.reply(m.chat, `Success sells ${count} Common Crate for ${Scommon * count} money`.trim(), m)
                         } else conn.reply(m.chat, `Your Common Crate is not enough`.trim(), m)
                         break
                     case 'uncommon':
                         if (global.DATABASE._data.users[m.sender].uncommon >= count * 1) {
                             global.DATABASE._data.users[m.sender].money += Suncommon * count
                             global.DATABASE._data.users[m.sender].uncommon -= count * 1
                             conn.reply(m.chat, `Success sells ${count} Uncommon Crate for ${Suncommon * count} money`.trim(), m)
                         } else conn.reply(m.chat, `Your Uncommon Crate is not enough`.trim(), m)
                         break
                     case 'mythic':
                         if (global.DATABASE._data.users[m.sender].mythic >= count * 1) {
                             global.DATABASE._data.users[m.sender].money += Smythic * count
                             global.DATABASE._data.users[m.sender].mythic -= count * 1
                             conn.reply(m.chat, `Success sells ${count} Mythic Crate for ${Smythic * count} money`.trim(), m)
                         } else conn.reply(m.chat, `Your Mythic Crate is not enough`.trim(), m)
                         break
                     'legendary' case:
                         if (global.DATABASE._data.users[m.sender].legendary >= count * 1) {
                             global.DATABASE._data.users[m.sender].money += Slegendary * count
                             global.DATABASE._data.users[m.sender].legendary -= count * 1
                             conn.reply(m.chat, `Success sells ${count} Legendary Crate for ${Slegendary * count} money`.trim(), m)
                         } else conn.reply(m.chat, `Your Legendary Crate is not enough`.trim(), m)
                         break
                     'garbage' case:
                         if (global.DATABASE._data.users[m.sender].garb >= count * 1) {
                             global.DATABASE._data.users[m.sender].garbage -= count * 1
                             global.DATABASE._data.users[m.sender].money += Trash * count
                             conn.reply(m.chat, `Success sells ${count} junk, and you get ${Junk * count} money`, m)
                         } else conn.reply(m.chat, `You don't have enough trash`, m)
                         break
                     case 'diamonds':
                         if (global.DATABASE._data.users[m.sender].diamond >= count * 1) {
                             global.DATABASE._data.users[m.sender].diamond -= count * 1
                             global.DATABASE._data.users[m.sender].money += Sdiamond * count
                             conn.reply(m.chat, `Success sells ${count} Diamond, and you get ${Sdiamond * count} money`, m)
                         } else conn.reply(m.chat, `You don't have enough diamonds`, m)
                         break
                     defaults:
                         return conn.reply(m.chat, Kchat, m)
                 }
                 break
             defaults:
                 return conn.reply(m.chat, Kchat, m)
             }
         } else if (/buy|buy/i.test(command)) {
             const count = args[1] && args[1].length > 0 ?  Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] ||  args.length < 3 ?  1: Math.min(1, count)
             switch (type) {
                 case 'potion':
                         if (global.DATABASE._data.users[m.sender].money >= potion * count) {
                             global.DATABASE._data.users[m.sender].money -= potion * count
                             global.DATABASE._data.users[m.sender].potion += count * 1
                             conn.reply(m.chat, `Success bought ${count} Potion for ${potion * count} money\n\nUse potion by typing: *${usedPrefix}use potion <amount>*`, m)
                         } else conn.reply(m.chat, `You don't have enough money to buy ${count} Potions for ${potions * count} money`,m)
                    
                     break
                 case 'diamonds':
                         if (global.DATABASE._data.users[m.sender].money >= Bdiamond * count) {
                             global.DATABASE._data.users[m.sender].diamond += count * 1
                             global.DATABASE._data.users[m.sender].money -= Bdiamond * count
                             conn.reply(m.chat, `Success bought ${count} Diamond for ${Bdiamond *count} money`, m)
                         } else conn.reply(m.chat, `You don't have enough money`, m)
                    
                     break
                 'common' case:
                         if (global.DATABASE._data.users[m.sender].money >= Bcommon * count) {
                             global.DATABASE._data.users[m.sender].common += count * 1
                             global.DATABASE._data.users[m.sender].money -= Bcommon * count
                             conn.reply(m.chat, `Success bought ${count} Common crate at ${Bcommon * count} money`, m)
                         } else conn.reply(m.chat, `You don't have enough money to buy ${count} Common crate for ${Bcommon * count} money\n\nOpen the crate by typing: *${usedPrefix}open common*`,  m)
                    
                     break
                 case 'uncommon':
                         if (global.DATABASE._data.users[m.sender].money >= Buncommon * count) {
                             global.DATABASE._data.users[m.sender].uncommon += count * 1
                             global.DATABASE._data.users[m.sender].money -= Buncommon * count
                             conn.reply(m.chat, `Success bought ${count} Uncommon crate for ${Buncommon * count} money`, m)
                         } else conn.reply(m.chat, `You don't have enough money to buy ${count} Uncommon crate for ${Buncommon * count} money\n\nOpen the crate by typing: *${usedPrefix}open uncommon*`,  m)
                   
                     break
                 case 'mythic':
                         if (global.DATABASE._data.users[m.sender].money >= Bmythic * count) {
                             global.DATABASE._data.users[m.sender].mythic += count * 1
                             global.DATABASE._data.users[m.sender].money -= Bmythic * count
                             conn.reply(m.chat, `Success bought ${count} Mythic crate at ${Bmythic * count} money`, m)
                         } else conn.reply(m.chat, `You don't have enough money to buy ${count} Mythic crate for ${Bmythic* count} money\n\nOpen the crate by typing: *${usedPrefix}open mythic*`,  m)
                    
                     break
                 'legendary' case:
                         if (global.DATABASE._data.users[m.sender].money >= Blegendary * count) {
                             global.DATABASE._data.users[m.sender].legendary += count * 1
                             global.DATABASE._data.users[m.sender].money -= Blegendary * count
                             conn.reply(m.chat, `Success bought ${count} Legendary crate at ${Blegendary * count} money`, m)
                         } else conn.reply(m.chat, `You don't have enough money to buy a ${count} Legendary crate for ${Blegendary * count} money\n\nOpen a crate by typing: *${usedPrefix}open legendary*`,  m)
                    
                     break
                 'garbage' case:
                         if (global.DATABASE._data.users[m.sender].money >= Trash * count) {
                             global.DATABASE._data.users[m.sender].garbage += count * 1
                             global.DATABASE._data.users[m.sender].money -= Trash * count
                             conn.reply(m.chat, `Success bought ${count} Junk at ${Trash * count} money`, m)
                         } else conn.reply(m.chat, `You don't have enough money to buy ${count} Junk for ${Trash * count} money`.trim(), m)
                    
                     break
                 case 'armor':
                         if (global.DATABASE._data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Your armor is *Level Max*', m)
                         if (global.DATABASE._data.users[m.sender].money > armor * 1) {
                             global.DATABASE._data.users[m.sender].armor += 1
                             global.DATABASE._data.users[m.sender].money -= armor * 1
                             conn.reply(m.chat, `Success buy armor for ${armor} money` ,m)
                          
                         } else conn.reply(m.chat, `you don't have enough money to buy armor for ${armor} money`, m)
                    
                     break
                 defaults:
                     return conn.reply(m.chat, Kchat, m)
             }
         } else if (/sell|sell|/i.test(command)) {
             const count = args[1] && args[1].length > 0 ?  Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] ||  args.length < 3 ?  1: Math.min(1, count)
             switch (type) {
                 case 'potion':
                     if (global.DATABASE._data.users[m.sender].potion >= count * 1) {
                         global.DATABASE._data.users[m.sender].money += Spotion * count
                         global.DATABASE._data.users[m.sender].potion -= count * 1
                         conn.reply(m.chat, `Success selling ${count} Potion for ${Spotion * count} money`.trim(), m)
                     } else conn.reply(m.chat, `You don't have enough potions`.trim(), m)
                     break
                 'common' case:
                     if (global.DATABASE._data.users[m.sender].common >= count * 1) {
                         global.DATABASE._data.users[m.sender].money += Scommon * count
                         global.DATABASE._data.users[m.sender].common -= count * 1
                         conn.reply(m.chat, `Success sells ${count} Common Crate for ${Scommon * count} money`.trim(), m)
                     } else conn.reply(m.chat, `Your Common Crate is not enough`.trim(), m)
                     break
                 case 'uncommon':
                     if (global.DATABASE._data.users[m.sender].uncommon >= count * 1) {
                         global.DATABASE._data.users[m.sender].money += Suncommon * count
                         global.DATABASE._data.users[m.sender].uncommon -= count * 1
                         conn.reply(m.chat, `Success sells ${count} Uncommon Crate for ${Suncommon * count} money`.trim(), m)
                     } else conn.reply(m.chat, `Your Uncommon Crate is not enough`.trim(), m)
                     break
                 case 'mythic':
                     if (global.DATABASE._data.users[m.sender].mythic >= count * 1) {
                         global.DATABASE._data.users[m.sender].money += Smythic * count
                         global.DATABASE._data.users[m.sender].mythic -= count * 1
                         conn.reply(m.chat, `Success sells ${count} Mythic Crate for ${Smythic * count} money`.trim(), m)
                     } else conn.reply(m.chat, `Your Mythic Crate is not enough`.trim(), m)
                     break
                 'legendary' case:
                     if (global.DATABASE._data.users[m.sender].legendary >= count * 1) {
                         global.DATABASE._data.users[m.sender].money += Slegendary * count
                         global.DATABASE._data.users[m.sender].legendary -= count * 1
                         conn.reply(m.chat, `Success sells ${count} Legendary Crate for ${Slegendary * count} money`.trim(), m)
                     } else conn.reply(m.chat, `Your Legendary Crate is not enough`.trim(), m)
                     break
                 'garbage' case:
                     if (global.DATABASE._data.users[m.sender].garb >= count * 1) {
                         global.DATABASE._data.users[m.sender].garbage -= count * 1
                         global.DATABASE._data.users[m.sender].money += Trash * count
                         conn.reply(m.chat, `Success sells ${count} junk, and you get ${Trash * count} money`.trim(), m)
                     } else conn.reply(m.chat, `You don't have enough trash`.trim(), m)
                     break
                 case 'diamonds':
                     if (global.DATABASE._data.users[m.sender].diamond >= count * 1) {
                         global.DATABASE._data.users[m.sender].diamond -= count * 1
                         global.DATABASE._data.users[m.sender].money += Sdiamond * count
                         conn.reply(m.chat, `Success sells ${count} Diamond, and you get ${Sdiamond * count} money`, m)
                     } else conn.reply(m.chat, `You don't have enough diamonds`, m)
                     break
                 defaults:
                     return conn.reply(m.chat, Kchat, m)
             }
         }
     } catch(e) {
         conn.reply(m.chat, Kchat, m)
         console.log(e)
         if (DevMode) {
             for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v !=  conn.user.jid)) {
                 conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' +  e + '*', MessageType.text)
             }
         }
     }
 }

 handler.help = ['shop <sell|buy> <args>', 'shop <sell|buy> <args>']
 handler.tags = ['rpg']
    
 handler.command = /^(shop|shop|buy|buy|sell|sell)$/i
 module.exports = handler