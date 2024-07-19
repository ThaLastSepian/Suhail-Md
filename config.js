const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349077255703";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_54_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTczLFxuICAgICAgICA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4OCxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDgyLFxuICAgICAgICA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxLFxuICAgICAgICA4MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAyLFxuICAgICAgICA5NixcbiAgICAgICAgOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzLFxuICAgICAgICA5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3OSxcbiAgICAgICAgNzksXG4gICAgICAgIDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1SDhaR0tNTnRnb2ZqSWdOSUFCWFVWTHhnRjhYbkdmd1hsRFZVT2tSYmdFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEY0hpbUJHdFNoZWc1TFluY0x4UG9BXCIsXG4gIFwicGhvbmVJZFwiOiBcImY5YzUwNTc1LWJiYWUtNGI5NC05OTQ2LTZmMjU4YzBjYjRlNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzQsXG4gICAgICAyMzgsXG4gICAgICA4NCxcbiAgICAgIDE4NCxcbiAgICAgIDQyLFxuICAgICAgMzQsXG4gICAgICA2MyxcbiAgICAgIDE3MCxcbiAgICAgIDkxLFxuICAgICAgMjIwLFxuICAgICAgMTA1LFxuICAgICAgMjE5LFxuICAgICAgMTUxLFxuICAgICAgMTc2LFxuICAgICAgNzUsXG4gICAgICAxMzksXG4gICAgICAxNDEsXG4gICAgICAyMTAsXG4gICAgICAxNjUsXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk5LFxuICAgICAgMTcyLFxuICAgICAgMTY4LFxuICAgICAgNjgsXG4gICAgICA4OSxcbiAgICAgIDE5NyxcbiAgICAgIDE0LFxuICAgICAgMjM3LFxuICAgICAgNTcsXG4gICAgICAxMTcsXG4gICAgICAzOCxcbiAgICAgIDE2LFxuICAgICAgODgsXG4gICAgICAyMzYsXG4gICAgICAxMTMsXG4gICAgICA0MCxcbiAgICAgIDE4NSxcbiAgICAgIDk5LFxuICAgICAgMTk4LFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVhFVzEyRjdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNzcyNTU3MDM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTIxMDE2NjQ1NzE0MzI6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNT1cxYm9HRVBpQjU3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFKY2xqeVZ2NWZxbzRwRkRtU2Y1NTV6VDZwQ0QzcFhWQTdJbUZuWGtmelE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMXNMekV4ZHNTWTlmdXFTUHFHaHFqZWM3NG1UaEx1bVJ4dkc2MjR6UG9iSUY0bk0xdWZFSkE2cEJIaGpJbGdXUEsreis2K1ZYay9TS0VORWhpZklRQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidUp3Y3VEbGdpSW9YWGkyOEdCRVJhSHBNK1B2UUJFMVV6OVVJU1ErU1hJemhyNWNjeXZzTVpMVXRnNTF2OHJyalRka3I4QjdhY2sveHdEeHlGenJqZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA3NzI1NTcwMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MjU1MjkxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRG9kXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEb2QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVNG94dWtYSE16Q1g1aHpIUi9OdmszWGE4aGJnQndQR2VQQTl6REc1YkkwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MzM2NDMwNzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTI1NTI5NDc2MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
