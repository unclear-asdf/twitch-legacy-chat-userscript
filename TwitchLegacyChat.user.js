// ==UserScript==
// @name         Twitch Legacy Chat
// @version      0.6.0a
// @description  Replaces the regular, new Twitch chat with the Legacy Popout in an iframe. Restores the functionality of FrankerFaceZ and BTTV. Based on this Chrome extension: https://chrome.google.com/webstore/detail/twitch-legacy-chat/nonbdfmekapigdafeajhmhbkbnfibfhg
// @grant        none
// @include https://*.twitch.tv/*
// @include http://*.twitch.tv/*
// @include https://twitch.tv/*
// @include http://twitch.tv/*
// @exclude https://twitch.tv/*/chat
// @exclude http://twitch.tv/*/chat
// @exclude http://api.twitch.tv/*
// @exclude https://api.twitch.tv/*
// @require http://code.jquery.com/jquery-latest.js
// @require http://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// ==/UserScript==
$(window).load(function () {

    function legacy() {
        var link = document.location.href.split('/');
        var n = link[3].indexOf('?');
        var link = link[3].substring(0, n != -1 ? n : link[3].length);
        $(".chat-room__container").html('<iframe src ="https://www.twitch.tv/'+  link + '/chat?popout="frameborder="0" scrolling="no" height="1900" />');
    }

    legacy();

    var intervalID = setInterval(function(){
        if ($('div.chat-room__container iframe').length) {
            jQuery.noop();
        } else {
            legacy();
        }
    }, 1000);

});


