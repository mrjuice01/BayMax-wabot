let handler  = async (m, { conn }) => {
 let name = conn.getName(m.sender)
 let teks = `
 ${pickRandom([`Ohh😒','Bahut Achhaa 😂😂😂','🤣🤣','Sahi Hai 🤭🤭🤭🤭🤭','Uffff 😒😒😒😒','😭','Bhery Sed 😖😖😖','Hmmm 😊','Tere jaise yaar kaha 😀','🤣','Ye Dil 💔 Kyu toda 😒','Oyee hoyeee 🤩🤩😍', '😍😍😍😍','😇','Baharo 🤣 Phool Barsao 🌸 Mera Mehbub Aaya Hai 😂','😆Kya se kya ho gye dekhte dekhte😆','Tu Mat Bol Tu Matlabi hai 🤨','😅😅😅','Maine Aapka Photo 📸 Le liya h 😏 Ab Aapko Viral Kar Dunga 😏','Pehele Mera Dost bhi Aise Hi harkate kiya karta tha 😂 Phir Ek din usko Kuch log utha kar le gye','Dil ♥️ Ka Dariya 🌊 Beh Hi Gaya 😂','🥲🥲🥲','Kuch To Log Kahenge 😂 Logo ka kaam Hai Kehna ☺️','😗😗Just Chill Dude 😗😗','😃','🥺','😱😱😱','Tum to bare heavy Driver nikle 😂`])}
 `.trim()
 conn.reply(m.chat, teks, m, { contextInfo: { mentionedJid: [m.sender] }})
 }
 handler.customPrefix =  /😒|😎|😂|😆|😅|😂|🤣|😏|😅|😊|😠|😑|🥲|😈|😌|😘|🤨|😙|🥴/i
 handler.command = new RegExp

 module.exports = handler

 function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
 }
