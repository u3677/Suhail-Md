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
global.caption = process.env.CAPTION || global.caption || "✰⃞𝕜𝕒𝕜𝕦𝕫𝕦⁩☬☬⃢⃟𝙃𝙞𝙙𝙖𝙣²²¹-ᴍᴅ" 


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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_51_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDczLFxuICAgICAgICA0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDksXG4gICAgICAgIDUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMTUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDcxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDcyLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTksXG4gICAgICAgIDI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDg1LFxuICAgICAgICA3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MSxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAzNixcbiAgICAgICAgOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDg5LFxuICAgICAgICA2NSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxODAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDgxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcwLFxuICAgICAgICA2NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjksXG4gICAgICAgIDk1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDc3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMSxcbiAgICAgICAgNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNqY2VCWmNUMzl3QzF6ZXU4ZTVCR3VEakZwNkphK2EwZGFOckVtK1pMcjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpxVXpVekdPU0txeW9WOVZGVkNtMFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDRjYTc3YTMtZmI0My00NzRmLTlkNjgtOGNlY2Y3ODFlZjYzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgMTUsXG4gICAgICAyNDMsXG4gICAgICA4NixcbiAgICAgIDI0LFxuICAgICAgMyxcbiAgICAgIDEwNixcbiAgICAgIDIxNCxcbiAgICAgIDI2LFxuICAgICAgMjIzLFxuICAgICAgMTcwLFxuICAgICAgMzAsXG4gICAgICA5MCxcbiAgICAgIDE2MixcbiAgICAgIDEzMCxcbiAgICAgIDEwNixcbiAgICAgIDE3MCxcbiAgICAgIDE5LFxuICAgICAgMTQ0LFxuICAgICAgMjU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NixcbiAgICAgIDcyLFxuICAgICAgMTU3LFxuICAgICAgODMsXG4gICAgICA1OCxcbiAgICAgIDcxLFxuICAgICAgMTQxLFxuICAgICAgMTUyLFxuICAgICAgOTksXG4gICAgICAyLFxuICAgICAgODMsXG4gICAgICAyMjYsXG4gICAgICAxOTIsXG4gICAgICAyMjYsXG4gICAgICAxMTcsXG4gICAgICAxNDQsXG4gICAgICAzNyxcbiAgICAgIDIxNSxcbiAgICAgIDEzNyxcbiAgICAgIDEyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4MjNGTkZSTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIzNjI0NTE4MzU6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkyODc0NjY2ODM1OTk4OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGpzK0EwUS85bkZ0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1R1VmSnBhNk9qU080d3hRdzVyK2l0R0VzRkFMZWF2T0Ywak9kaVpBZWl3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImo1TnRma3NHNEt2MTJwR3E0SHRRM3JtZWVtWTg5UmVJNkgrek9XQXRUYW5PeG9EZ25YR1M5WUJGZHNVWFNVNDd6VnA4Ym9PTXBDd3BLUCt0MW1qSUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkt3RWpuSzFoYnlPZUhuc2RvMi9CdjVzNEI1eDNtRys4a05uS2d6bFl6eFZDK0t2c09jWWo4STVVVW9nOTNBd3J1RFpxQjdDRHFLdGF0YzRxdGc5TERnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMzYyNDUxODM1OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDgwNjY1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9CUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0JRLmpzb24iOiAie1wia2V5RGF0YVwiOlwidWJ2TXVlYVhOZmR6MmtCRHg0YVVzRE82SGh0Z0ZrTXQ3OGlISk1ZWTZnOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyOTI0MjkzNCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "&",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ✰⃞𝕜𝕒𝕜𝕦𝕫𝕦⁩☬☬⃢⃟𝙃𝙞𝙙𝙖𝙣²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "✰⃞𝕜𝕒𝕜𝕦𝕫⁩☬☬⃢⃟𝙃𝙞𝙙𝙖𝙣.               22362451835",
  packname: process.env.PACK_NAME || "
    
    
    
    
    
    
    
    
    
    
    
    
    ✰⃞𝕜𝕒𝕜𝕦𝕫𝕦🅇⃠⁩☬☬⃢⃟𝙃𝙞𝙙𝙖𝙣",
  botname : process.env.BOT_NAME  || "suhail ",
  ownername:process.env.OWNER_NAME|| "✰⃞𝕜𝕒𝕜𝕦𝕫𝕦☬☬⃢⃟𝙃𝙞𝙙𝙖𝙣",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "GreNZYgkqRSyg3NTHEe8dSHr",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-ZZAsmC8Y7oLOZAxnCqxiT3BlbkFJCBDXBdQhu2pF2UQOUFG0",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "suhail"  ).toUpperCase(),



};



global.ELEVENAB_API_KEY env.ELEVENLAB_API_KEY || "";
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
