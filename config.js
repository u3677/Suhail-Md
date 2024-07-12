const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/d5eae354096250d98cc94.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2a51bde7cbfd6095ed602.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "✰⃞𝕜𝕒𝕜𝕦𝕫𝕦🅇⃠⁩☬☬⃢⃟𝙃𝙞𝙙𝙖𝙣²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22362451835";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_22_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQyLFxuICAgICAgICAzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDM2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NixcbiAgICAgICAgODYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDc5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNixcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MixcbiAgICAgICAgMTIzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTExLFxuICAgICAgICA0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrT2dteVMyQU1WWng5RGJMWHVSMnhrOGpKQ040YW9kZnVTU2IwMmtQR1g4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4X083NURXVVFKeVAtYmlDc3U3UDlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAyZjNlY2U4LTg4ZTAtNDFkOC05YjdlLTA3NTQyMTc2M2JkZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAyMzEsXG4gICAgICAyMzksXG4gICAgICA1NCxcbiAgICAgIDQyLFxuICAgICAgMTMxLFxuICAgICAgNjQsXG4gICAgICAxMzQsXG4gICAgICAxNjAsXG4gICAgICA2NSxcbiAgICAgIDEwOCxcbiAgICAgIDEzLFxuICAgICAgMTQ1LFxuICAgICAgMTEyLFxuICAgICAgNTMsXG4gICAgICAyOSxcbiAgICAgIDIxMixcbiAgICAgIDIyMixcbiAgICAgIDE1MixcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTUsXG4gICAgICAyMTAsXG4gICAgICAyMTYsXG4gICAgICAyMzAsXG4gICAgICA4MyxcbiAgICAgIDE1MCxcbiAgICAgIDExLFxuICAgICAgMjAwLFxuICAgICAgMTc4LFxuICAgICAgMjMzLFxuICAgICAgNixcbiAgICAgIDE1OCxcbiAgICAgIDE1MyxcbiAgICAgIDIyNSxcbiAgICAgIDAsXG4gICAgICAyMzYsXG4gICAgICA1LFxuICAgICAgMjU1LFxuICAgICAgMTQ0LFxuICAgICAgMTkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJNVFZFOU04XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjM2MjQ1MTgzNTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTI4NzQ2NjY4MzU5OTg6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMZnMrQTBRbGJiQnRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVHVWZKcGE2T2pTTzR3eFF3NXIraXRHRXNGQUxlYXZPRjBqT2RpWkFlaXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZWRIbi9QdG1JQnhRSGpRUlZBZEhkbkovQktxazNSelArcUx1VlZWcm16NEt0RGZiY0lUTkFUTUVROG12RUwxa2lFNWpHbGtJWFhydkJGS2ErTnc1QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMS9BZ0xTTUlLdUFIeFYxaFRHRXoyTnZ5aVU4RWRSaTh2MkQ2UFFrQVR6TTRpRDBTMTRwbC9RR2FUTFBVS2dPakw1cWR3QlZEMlM1ZUFucTdITFB6aUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIzNjI0NTE4MzU6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzM2NTM3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ✰⃞𝕜𝕒𝕜𝕦𝕫𝕦🅇⃠⁩☬☬⃢⃟𝙃𝙞𝙙𝙖𝙣²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "✰⃞𝕜𝕒𝕜𝕦𝕫𝕦🅇⃠⁩☬☬⃢⃟𝙃𝙞𝙙𝙖𝙣.               22362451835",
  packname: process.env.PACK_NAME || "
    
    
    
    
    
    
    
    
    
    
    
    
    ✰⃞𝕜𝕒𝕜𝕦𝕫𝕦🅇⃠⁩☬☬⃢⃟𝙃𝙞𝙙𝙖𝙣",
  botname : process.env.BOT_NAME  || "✰⃞𝕜𝕒𝕜𝕦𝕫𝕦🅇⃠⁩☬☬⃢⃟𝙃𝙞𝙙𝙖𝙣",
  ownername:process.env.OWNER_NAME|| "✰⃞𝕜𝕒𝕜𝕦𝕫𝕦🅇⃠⁩☬☬⃢⃟𝙃𝙞𝙙𝙖𝙣",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "GreNZYgkqRSyg3NTHEe8dSHr",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-ZZAsmC8Y7oLOZAxnCqxiT3BlbkFJCBDXBdQhu2pF2UQOUFG0",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "✰⃞𝕜𝕒𝕜𝕦𝕫𝕦🅇⃠⁩☬☬⃢⃟𝙃𝙞𝙙𝙖𝙣"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
