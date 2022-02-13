let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `${pickRandom(['️Hello', '️Kaise ho', '💖', '💔', '💞', '💕','💓','💜','🐦','or kise ho','sab badaya✌️','Tum Tho heavy driver nikle','Go and study🙄','Auquat mai raho👺','Hii Babee😘','I will stole your heart 😋','Bolta Kyu Nahi','dhek mene teko kucn nahi bola','chala ja bacche','pushpa raj jukega nahi sala😼','Jo BTS ke haters hai ga@#£ marav😈','Gussa mat dila meko😐','Ab Dhek','Will u marry me ♥️','Or ki hal chal','Hello sweet heart 💓','will u accept Toshiro proposal 🤧','Thik hai Babe itna he gussa hai tho maar do muje','❣️','✨🐦','I❣️u','14th Feb aa raha h kya karoge😏'])}`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /😒|😎|😂|😆|😅|😂|🤣|😏|😅|😊|😠|😑|🥲|😈|😌|😘|🤨|😙|🥴|😁|🤭|😡|🥺|🐦|🤧/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
