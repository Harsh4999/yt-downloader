const fs = require('fs');
const ytdl = require('ytdl-core');
const dm = async () => {
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above
let info = await ytdl.getInfo('https://www.youtube.com/watch?v=NerQs_SOwRo');
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
ytdl('https://www.youtube.com/watch?v=NerQs_SOwRo',{filter: audioFormats => audioFormats.audioBitrate==160})
  .pipe(fs.createWriteStream('video11.mp3'));

// let info = await ytdl.getInfo(videoID);
// let format = ytdl.chooseFormat(info.formats, { quality: '134' });
// console.log('Format found!', format);
//audioBitrate: 160,
}
dm().then().catch((err) => {
	console.log('not working');
})