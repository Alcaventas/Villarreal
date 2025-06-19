
let handler = async (m, { conn}) => {
  if (!global.db.data.users[m.sender]) global.db.data.users[m.sender] = {};
  if (!global.db.data.users[m.sender].lastcofre) global.db.data.users[m.sender].lastcofre = 0;

  let time = global.db.data.users[m.sender].lastcofre + 86400000; // 24 horas
  if (new Date - global.db.data.users[m.sender].lastcofre < 86400000)
    throw `[❗INFO❗] Ya reclamaste tu cofre\nVuelve en *${msToTime(time - new Date())}* para reclamarlo nuevamente. 🌸`;

  let img = "https://i.ibb.co/LYZrgRs/The-Miku-Bot-MD.jpg";
  let texto = `
🌸 *ＭＩＫＵ　ＢＯＴ - ＭＥＮＵ　ＤＥ　ＬＯＧＯＳ* 🌸

🎨 *Diseña con estilo usando los comandos:*

┊🌷 _.logocorazon_ (texto)
┊🌷 _.logochristmas_ (texto)
┊🌷 _.logopareja_ (texto)
┊🌷 _.logogaming_ (texto)
┊🌷 _.logodragonball_ (texto)
┊🌷 _.logogatito_ (texto)
┊🌷 _.logograffiti3d_ (texto)
┊🌷 _.logosad_ (texto)
┊🌷 _.logochicagamer_ (texto)
┊🌷 _.logopubg_ (texto)
┊🌷 _.logoamongus_ (texto)
┊🌷 _.logofuturista_ (texto)
┊🌷 _.logoangel_ (texto)
┊🌷 _.logohorror_ (texto)
┊🌷 _.logomatrix_ (texto)
┊🌷 _.logonaruuto_ (texto)
┊🌷 _.logoarmy_ (texto)
┊🌷 _.logocielo_ (texto)
┊🌷 _.logoneon_ (texto)
┊🌷 _.logoplayerintro_ (texto)
┊🌷 _.logovideogaming_ (texto)
┊🌷 _.sadcat_ (texto)
┊🌷 _.tweet_ (comentario)
`;

  const fkontak = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      id: "Miku🌸"
},
    message: {
      contactMessage: {
        displayName: "Miku Bot 🌸",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Miku;Bot;;;\nFN:Miku Bot 🌸\nitem1.TEL;waid=${
          m.sender.split("@")[0]
}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Celular\nEND:VCARD`
}
}
};

  await conn.sendFile(m.chat, img, 'menu-logos.jpg', texto, fkontak);
  global.db.data.users[m.sender].lastcofre = new Date().getTime();
};

handler.help = ['menu3'];
handler.tags = ['main', 'logo'];
handler.command = ['menulogos', 'logos', 'menu3'];

export default handler;

function msToTime(ms) {
  let h = Math.floor(ms / 3600000);
  let m = Math.floor((ms % 3600000) / 60000);
  let s = Math.floor((ms % 60000) / 1000);
  return `${h}h ${m}m ${s}s`;
}