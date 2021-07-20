const fs = require('fs');
const ytdl = require('ytdl-core');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above
let info=ytdl.getInfo('https://youtu.be/w4ClQO0FFQg')
 ytdl('https://youtu.be/w4ClQO0FFQg',{filter: info => info.qualityLabel=='1080p'})
   .pipe(fs.createWriteStream('video12.mp4'));

// let info = await ytdl.getInfo(videoID);
// let format = ytdl.chooseFormat(info.formats, { quality: '134' });
// console.log('Format found!', format);
//audioBitrate: 160,