var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Discord Bot Activated.This page can close.");

});

var port = process.env.PORT || 1337;
server.listen(port);

const Eris = require("eris");
var bot = new Eris("DiscordBOTトークン");

bot.on("ready", () => {
    console.log("Ready!");
});

bot.on("messageCreate", (msg) => {
    if(msg.content === "!timer10") {
        var return_message = "［＠益＠］＜ " + msg.member.username + "さん、オッケーっス。8分後と10分後にお知らせするッス！）" 
        bot.createMessage(msg.channel.id, return_message);
		//8分後に発射
        setTimeout(function(){
            bot.createMessage(msg.channel.id, "［＠益＠］＜あと2分ぞなもし）");},480000)
		//10分後に発射
        setTimeout(function(){
            bot.createMessage(msg.channel.id, "［＠益＠］＜終わりだよ！！！）");},600000)
    } else if(msg.content === "!timer60") {
        var return_message = "［＠益＠］＜ " + msg.member.username + "さん、オッケーっス。55分後と60分後にお知らせするッス！）" 
        bot.createMessage(msg.channel.id, return_message);
		//55分後に発射
        setTimeout(function(){
            bot.createMessage(msg.channel.id, "［＠益＠］＜あと2分ぞなもし）");},3300000)
		//60分後に発射
        setTimeout(function(){
            bot.createMessage(msg.channel.id, "［＠益＠］＜終わりだよ！！！）");},3600000)
    }else if(msg.content === "死んだ？"){
        bot.createMessage(msg.channel.id, "［＠益＠］＜生きてるよ！ピキピキ）");
    }else if(msg.content === "!howto"){
        bot.createMessage(msg.channel.id, "［＠益＠］＜ 今の所使えるコマンドは以下の通り  ）");
        bot.createMessage(msg.channel.id, "［＠益＠］＜ !timer10  ）");
        bot.createMessage(msg.channel.id, "［＠益＠］＜ !timer60  ）");
        bot.createMessage(msg.channel.id, "［＠益＠］＜ 死んだ？  ）");
    } 
});

// Discord に接続します。
bot.connect();