import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { watchFile, unwatchFile, readFileSync } from 'fs'

global.owner = 
 [
  ['+94779529221', 'Mr.White Shadow', true]
]
// Put your number here
// [number, he creator/owner?, he developer?]

global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit

// api key here okay
global.lolkey = 'apikeymu'
global.xkey = 'APIKEYMU'
global.xyro = 'LyrK9JMI7N' 
global.apilol = 'GataDios' 
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  violetics: 'https://violetics.pw',
  rrul: 'https://api-rull.herokuapp.com',
  hadi: 'http://hadi-api.herokuapp.com',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  td: 'https://api-toxic-devil.herokuapp.com/api',
  fdci: 'https://api.fdci.se',
  skh: 'https://sekha.me',
  dzx: 'https://api.dhamzxploit.my.id',
  hardianto: 'http://hardianto.xyz',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://violetics.pw': 'beta',
  'https://sekha.me': 'apirey',
  'https://api.chipa.xyz': 'pais',
  'http://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

 global.thumbnailUrl = [
  'https://telegra.ph/file/056e476d4e0d95356dbe3.jpg', 'https://telegra.ph/file/056e476d4e0d95356dbe3.jpg',
  'https://telegra.ph/file/056e476d4e0d95356dbe3.jpg', 'https://telegra.ph/file/056e476d4e0d95356dbe3.jpg',
  'https://telegra.ph/file/056e476d4e0d95356dbe3.jpg', 'https://telegra.ph/file/056e476d4e0d95356dbe3.jpg',
  'https://telegra.ph/file/056e476d4e0d95356dbe3.jpg', 'https://telegra.ph/file/056e476d4e0d95356dbe3.jpg',
  'https://telegra.ph/file/056e476d4e0d95356dbe3.jpg', 'https://telegra.ph/file/056e476d4e0d95356dbe3.jpg'
]

// Sticker WM
global.packname = `「 Cʀᴇᴀᴛᴇᴅ Bʏ _𝗜ᵀ𝚣 𝗠ᴇ 𝗦𝙸ˢˢ𝗢𝚁_ 」`
global.botdate = `⫹⫺ Day`
global.bottime = `ᴛɪᴍᴇ:`
global.author = ''
global.thumb = readFileSync('./me.png')
global.thumb2 = readFileSync('./me2.jpeg')
global.multiplier = 69 // The higher, The harder levelup

//Text here
global.me = 'Cʀᴇᴀᴛᴇᴅ Bʏ _𝗜ᵀ𝚣 𝗠ᴇ 𝗦𝙸ˢˢ𝗢𝚁_ - 2024'
global.bott = '𝗤𝗨𝗘𝗘𝗡-𝗛𝗘𝗟𝗔𝗡𝗞𝗔 ▎▎🧡🍃'
global.nomorown = '94742200945'
// owner put this creator.js
global.str = '-------------'
global.l = '「'
global.r = '」'
global.mwait = '⏱️'
global.nwait = '🤤'
global.dwait = '🍊'
global.pwait = '⏱️'
global.qwait = '😩'
global.pwait = '⏱️'
global.rwait = '⏱️'
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ...```'
global.eror = '```404 ᴇʀʀᴏʀ```'

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.cyanBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
