const fs = require('fs');
const ytdl = require('ytdl-core');

//ytdl('https://www.youtube.com/watch?v=cl0a3i2wFcc').pipe(fs.createWriteStream('video.mp4'));
//ytdl('https://www.youtube.com/watch?v=cl0a3i2wFcc', { filter: format => format.container === 'mp3' })
const dm = async () => {

	let info = await ytdl.getInfo('https://www.youtube.com/watch?v=NerQs_SOwRo');
	let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
	//	ytdl('https://www.youtube.com/watch?v=cl0a3i2wFcc', { filter:audioFormats => {audioFormats.container==='mp3' }  })
	//console.log('Formats with only audio: ' + audioFormats);
	for(let i=0;i<audioFormats.length;i++){
		console.log(audioFormats[i]);
	}

	//ytdl('https://www.youtube.com/watch?v=cl0a3i2wFcc', { filter: audioFormats => audioFormats.container === 'mp4' })
	//ytdl.downloadFromInfo(audioFormats, options)
}
dm().then().catch((err) => {
	console.log('not working');
})