var request = require('request');
var SecretInfo = require('./SecretInfo.js')

var SecretApiKeys = SecretInfo.apiKeys;
var YoAccounts = SecretInfo.YoAccounts;
var keys = Object.keys(SecretApiKeys);
var UsersLength = Object.keys(SecretApiKeys).length;
startTimer();
function startTimer() {
    var randomTime = Math.floor(Math.random() * 20000);
    var senderToken = SecretApiKeys[keys[Math.floor(Math.random() * UsersLength)]];
    var nameReceiver = YoAccounts[Math.floor(Math.random() * YoAccounts.length)];
    setTimeout(function() {
       SendRequest(senderToken, nameReceiver);
    }, randomTime);
}    
    
function SendRequest(apiToken, nameReceiver)
{
    request.post('https://api.justyo.co/yo/', {form: {username: nameReceiver, api_token: apiToken}});
    startTimer();
}

