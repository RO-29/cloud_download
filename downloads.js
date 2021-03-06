var     express = require('express'),
	nunjucks = require('nunjucks'),
	sys = require("sys"),
	hbs = require ("hbs"),
        fs = require('fs');
        S = require('string');
	random = require('randomstring'); 
var app = express();
app.use(express.bodyParser());
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', function (req, res) {
	res.render('index');
});

app.post('/download', function (req, res) {


var util = require('util'),
    exec = require('child_process').exec,
    child,
	url_decider = false,
	command,
	extn,
    url = req.body.url,
	filename = req.body.filename,
	filetype = req.body.filetype,
	yps = req.body.yps,
	ype = req.body.ype,
	format = req.body.format;
	
console.log(" body %j",req.body);
	if(format==null)
	  format = 18;
S.extendPrototype();

var url_s = "'"+url+"'";
url = url_s;

if (url.contains('.zip')||url.contains('.tar.gz')||url.contains('.tar')||url.contains('.tar.md5')||url.contains('.tar.bz2')){
 url_decider = true;
 if (url.contains('.zip'))
   extn = '.zip';
 else if (url.contains('.tar'))
   extn='.tar';
  
 else if (url.contains('.tar.gz'))
   extn='.tar.gz';
 else if (url.contains('.tar.bz2'))
   extn='.tar.bz2';
 else if (url.contains('.tar.md5'))
   extn='.tar.md5';
 
  
 
 
 }

var youtube = url.contains('youtube.com')

S.restorePrototype();





if(url_decider ==false &&youtube==false){
 
  if(filename==null)
    filename=random.generate(6);
  	
   command = 'wget -O ~/Downloads/"'+filename+'" '+url+"&& ~/upload.sh upload ~/Downloads/"+filename+" Downloads/";
  
  }
else if(url_decider ==true &&youtube==false){
  if(filename==null)
   filename =random.generate(6);

   if(filetype=='1'){ 
  command =' wget -O ~/Downloads/"'+filename+extn+'" '+url+'&& 7z x -y ~/Downloads/'+filename+extn+' -oDownloads/'+filename+"&& ~/upload.sh upload ~/Downloads/"+filename+" Downloads/";
  }
  
  if(filetype=='0'){
  command =' wget ' + '-O ~/Downloads/"'+filename+extn+'"  '+url+"&& ~/upload.sh upload ~/Downloads/"+filename+extn+" Downloads/";
  }
    

}
else {
  if(filetype=='0'){
	command = 'youtube-dl -o ~/Downloads/"%(title)s.%(ext)s" '+url+" -f " +format+"&& ~/upload.sh upload ~/Downloads/ Downloads/Youtube/" ;
   }
  if(filetype=='2'){
	command = 'youtube-dl -o ~/Downloads/"%(title)s.%(ext)s"  '+url+' --playlist-start '+yps+' --playlist-end '+ype+" -f " +format+"&& ~/upload.sh upload ~/Downloads/ Downloads/Youtube/";
   }
     

}
command =command+"&& cd ~/Downloads && rm -r -f * && ~/upload.sh upload ~/log.txt ~/out.txt Logs/log_vps_download.txt";
console.log(command);
child = exec(command,
  function (error, stdout, stderr) {
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
console.log("filetype:"+filetype);
res.send("done");

})
app.use('/static', express.static(__dirname + '/static'));

app.listen(5000);
console.log("Running on port 5000");

