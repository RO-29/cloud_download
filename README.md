cloud_download
==============

A reliable File download Manager on the cloud 
A simple proof of concept in nodejs.





WHY?
====
My ISP speed and Connection is very unreliable , It keeps reseting my connections randomly leaving My Downloads In lurch

We can always Use a good Download manager , but not every downlaod is resumable.

So I thought a way out , Download directly to Dropbox and if you have A dropbox Client it will Automatically download it to 

Your Dropbox folder or if you don't have A dropbox CLient installed It will generate A public link to download a file which i
can be pasted to any download Manager to download a file.

I am using https://github.com/andreafabrizi/Dropbox-Uploader for uploading to dropbox but you can use your own method to uplaod 
to dropbox.
I use it because it is easy.

You can use various file types to download 
It even supports unpacking Zip on the go

It also Supports Youtube video Download (Single/Playlist)  


Setup
======

Node Packages Required
======================
express
sys
hbs
String
random


Download youtube-dl with this command "apt-get install youtube-dl"

Just Clone this repository , and run with this Command "node download.js"


