cloud_download
==============

A reliable File download Manager on the cloud 

A simple proof of concept in nodejs.



###DEMO

http://162.243.109.90:8080/

###Need

My ISP speed and Connection is very unreliable , It keeps reseting my connections randomly leaving My Downloads In lurch

We can always Use a good Download manager , but not every download is resumable.

So I thought a way out , Download directly to Dropbox and if you have A dropbox Client it will Automatically download it to your Dropbox folder or if you don't have A dropbox Client installed ,it will also generate a public url to download a file which then can be pasted to any download Manager to download a file. (Not Implemented yet).

I am using https://github.com/andreafabrizi/Dropbox-Uploader for uploading to dropbox but you can use your own method to uplaod to dropbox.

You can use various file types to download 
It even supports unpacking Zip on the go.

It also Supports Youtube video Download (Single/Playlist)  


Setup
=====


### Prerequiste NPM packages

 * express 
 * String
 * sys
 * http
 * fs
 * sys
 * hbs
 * multipart
 * random


Download youtube-dl with this command "apt-get install youtube-dl"

You have to run ./upload.sh once to complete basic Dropbox Auth Flow

Just Clone this repository , and run with this Command "node download.js"

It's running on port 5000 , but you can Always change this port in "download.js"
