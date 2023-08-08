import axios from 'axios'
let split = '|'
let handler = async (m, { conn, args: [effect], text: txt, usedPrefix, command, name }) => {
if (!effect) throw '*[❗𝐈𝐍𝐅𝐎❗] ¿𝙲𝙾𝙼𝙾 𝚄𝚂𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾?*\n—◉ _#logo (efecto) (texto)_\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n—◉ _#logo 3d-deep-sea-metal Mystic_\n\n*[❗] 𝙲𝚄𝙰𝙽𝙳𝙾 𝙻𝙴𝚂 𝙳𝙸𝙶𝙰 𝚀𝚄𝙴 𝙷𝙰𝙲𝙴 𝙵𝙰𝙻𝚃𝙰 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾 𝙴𝙻 𝚄𝚂𝙾 𝚂𝙴𝚁𝙸𝙰:*\n—◉ _#logo (efecto) (texto1|texto2)_\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n—◉ _#logo Wolf-Logo-Galaxy Mystic|Bot_\n\n*<𝑳𝑰𝑺𝑻𝑨 𝑫𝑬 𝑬𝑭𝑬𝑪𝑻𝑶𝑺/>*\n\n° ඬ⃟📝 #logo ' + effects.map(v => v.title).join('\n° ඬ⃟📝 #logo ')
effect = effect.toLowerCase()
if (!effects.find(v => (new RegExp(v.title, 'gi')).test(effect))) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙴𝙵𝙴𝙲𝚃𝙾 ${effect} 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙴𝙽 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙴𝙵𝙴𝙲𝚃𝙾𝚂*`
let text = txt.replace(new RegExp(effect, 'gi'), '').trimStart()
if (text.includes(split)) text = text.split(split)
text = Array.isArray(text) ? text : [text]
let res = await textpro(effect, ...text)
if (typeof res == 'number') throw res == -1 ? `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙴𝙵𝙴𝙲𝚃𝙾 ${effect} 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙴𝙽 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙴𝙵𝙴𝙲𝚃𝙾𝚂*` : `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝚂 ${usedPrefix + command} ${effect} ${new Array(res).fill('texto').map((v, i) => v + (i ? i + 1 : '')).join('|')}*`
let result = await axios.get(res, {
responseType: 'arraybuffer'
})
await conn.sendFile(m.chat, result.data, 'Error.jpg', `*𝚃𝙾𝙼𝙰 𝚃𝚄 𝙸𝙼𝙰𝙶𝙴𝙽 𝙿𝙴𝚁𝚂𝙾𝙽𝙰𝙻𝙸𝚉𝙰𝙳𝙰!!*\n*𝙴𝙵𝙴𝙲𝚃𝙾: ${effect}*`, m)
}
handler.help = ['logos']
handler.tags = ['fun']
handler.command = /^(logo|logos)$/i
export default handler

import formData from 'form-data'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
var effects = [
  {
    "title": "3d-deep-sea-metal",
    "url": "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html"
  },
  {
    "title": "American-flag-3D",
    "url": "https://textpro.me/create-american-flag-3d-text-effect-online-1051.html"
  },
  {
    "title": "3D-sci-fi",
    "url": "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html"
  },
  {
    "title": "3D-rainbow-color-calligraphy",
    "url": "https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html"
  },
  {
    "title": "3D-water-pipe",
    "url": "https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html"
  },
  {
    "title": "Halloween-skeleton",
    "url": "https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html"
  },
  {
    "title": "a-spooky-Halloween",
    "url": "https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html"
  },
  {
    "title": "a-cinematic-horror",
    "url": "https://textpro.me/create-a-cinematic-horror-text-effect-1045.html"
  },
  {
    "title": "a-sketch",
    "url": "https://textpro.me/create-a-sketch-text-effect-online-1044.html"
  },
  {
    "title": "blue-circuit-style",
    "url": "https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html"
  },
  {
    "title": "space",
    "url": "https://textpro.me/create-space-text-effects-online-free-1042.html"
  },
  {
    "title": "a-metallic",
    "url": "https://textpro.me/create-a-metallic-text-effect-free-online-1041.html"
  },
  {
    "title": "Creat-glossy-metalic",
    "url": "https://textpro.me/cyan-jewelry-text-effect-845.html"
  },
  {
    "title": "Blue-Jewelry",
    "url": "https://textpro.me/blue-jewelry-text-effect-844.html"
  },
  {
    "title": "Hot-Metal",
    "url": "https://textpro.me/hot-metal-text-effect-843.html"
  },
  {
    "title": "Hexa-Golden",
    "url": "https://textpro.me/hexa-golden-text-effect-842.html"
  },
  {
    "title": "Blue-Glitter",
    "url": "https://textpro.me/blue-glitter-text-effect-841.html"
  },
  {
    "title": "Purple-Glitter",
    "url": "https://textpro.me/purple-glitter-text-effect-840.html"
  },
  {
    "title": "Pink-Glitter",
    "url": "https://textpro.me/pink-glitter-text-effect-839.html"
  },
  {
    "title": "Green-Glitter",
    "url": "https://textpro.me/green-glitter-text-effect-838.html"
  },
  {
    "title": "Silver-Glitter",
    "url": "https://textpro.me/silver-glitter-text-effect-837.html"
  },
  {
    "title": "Gold-Glitter",
    "url": "https://textpro.me/gold-glitter-text-effect-836.html"
  },
  {
    "title": "Bronze-Glitter",
    "url": "https://textpro.me/bronze-glitter-text-effect-835.html"
  },
  {
    "title": "Eroded-Metal",
    "url": "https://textpro.me/eroded-metal-text-effect-834.html"
  },
  {
    "title": "Carbon",
    "url": "https://textpro.me/carbon-text-effect-833.html"
  },
  {
    "title": "Pink-Candy",
    "url": "https://textpro.me/pink-candy-text-effect-832.html"
  },
  {
    "title": "Blue-Metal",
    "url": "https://textpro.me/blue-metal-text-effect-831.html"
  },
  {
    "title": "Blue-Gem",
    "url": "https://textpro.me/blue-gem-text-effect-830.html"
  },
  {
    "title": "Black-Metal",
    "url": "https://textpro.me/black-metal-text-effect-829.html"
  },
  {
    "title": "3D-Glowing-Metal",
    "url": "https://textpro.me/3d-glowing-metal-text-effect-828.html"
  },
  {
    "title": "3D-Chrome",
    "url": "https://textpro.me/3d-chrome-text-effect-827.html"
  }
]
async function textpro(effect, ...texts) {
  texts = texts.filter(v => v)
  let eff = effects.find(v => (new RegExp(v.title, 'gi')).test(effect))
  if (!eff) return -1
  let resCookie = await fetch(eff.url, {
    headers: {
      "User-Agent": "GoogleBot",
    },
  })
  let html = await resCookie.text()
  const $$$ = cheerio.load(html)
  let textRequire = [!!$$$('#text-0').length, !!$$$('#text-1').length, !!$$$('#text-2').length].filter(v => v)
  // console.log({ textRequire, texts, textRequireLength: textRequire.length, textsLength: texts.length })
  if (textRequire.length > texts.length) return textRequire.length
  let cookieParse = (cookie, query) => cookie.includes(query + '=') ? cookie.split(query + '=')[1].split(';')[0] : 'undefined'
  let hasilcookie = resCookie.headers
    .get("set-cookie")
  hasilcookie = {
    __cfduid: cookieParse(hasilcookie, '__cfduid'),
    PHPSESSID: cookieParse(hasilcookie, 'PHPSESSID')
  }
  hasilcookie = Object.entries(hasilcookie).map(([nama, value]) => nama + '=' + value).join("; ")
  const $ = cheerio.load(html)
  const token = $('input[name="token"]').attr("value")
  const form = new formData()
  for (let text of texts) form.append("text[]", text)
  form.append("submit", "Go")
  form.append("token", token)
  form.append("build_server", "https://textpro.me")
  form.append("build_server_id", 1)
  let resUrl = await fetch(eff.url, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
      ...form.getHeaders(),
    },
    body: form.getBuffer(),
  })
  const $$ = cheerio.load(await resUrl.text())
  let token2 = JSON.parse($$('#form_value').eq(1).text())
  let encode = encodeURIComponent;
  let body = Object.keys(token2)
    .map((key) => {
      let vals = token2[key];
      let isArray = Array.isArray(vals);
      let keys = encode(key + (isArray ? "[]" : ""));
      if (!isArray) vals = [vals];
      let out = [];
      for (let valq of vals) out.push(keys + "=" + encode(valq));
      return out.join("&");
    })
    .join("&")
  let resImgUrl = await fetch(`https://textpro.me/effect/create-image?${body}`, {
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
    }
  })
  let results = await resImgUrl.json()
  return 'https://textpro.me' + results.fullsize_image
}
