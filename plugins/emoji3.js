let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `${pickRandom(['️Hello', '️Kaise ho', '💖', '💔', '💞', '💕','💓','💜','🐦','or kise ho','sab badaya✌️','Tum Tho heavy driver nikle','Go and study🙄','Auquat mai raho👺','Hii Babee😘','mera dil lega','Bolta Kyu Nahi','Bhai dhek mene teko kucn nahi bola','chala ja bacche','pushpa raj jukega nahi sala😼','Jo BTS ke haters hai ga@#£ marav','Grate powers comes with grate responsibility','Ab Dhek','Toshiro ne meko banaya','Toshiro is my owner','Hello world🌍','I am BayMax BOT made with❣️By Toshiro','Thik hai bhai itna he gussa hai tho maar do muje','❣️','op bolte chaddi kholte','I❣️u','14th Feb aa raha h kya karoge😏'])}`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /😒|😎|😂|😆|😅|😂|🤣|😏|😅|😊|😠|😑|🥲|😈|😌|😘|🤨|😙|🥴|😁/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
