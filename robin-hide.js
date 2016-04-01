// ==UserScript==
// @name         robin-hide
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Filter Robin Spam
// @author       Tony Pernicano <pernicat@gmail.com>
// @match        https://www.reddit.com/robin/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var shitlist = [];
    var filteredMessages = $('<div class="robin-chat--message-list"></div>');
    var robinMessages = $('#robinChatMessageList');

    robinMessages.after(filteredMessages).hide();

    robinMessages.bind('DOMNodeInserted', function(){

        robinMessages.find('.robin-message').detach().each(function() {
            var username = $(this).find('.robin--username').text().trim();

            //console.log(username);

            if (-1 === $.inArray(username, shitlist)) {
                var del = $('<button>X</button>');
                del.click(function() {
                    shitlist.push(username);

                    $('.my-user--' + username).hide();
                    console.log(username, 'added to shitlist');
                })
                .css('padding', 2)
                .css('font-size', 'xx-small');

                $(this).addClass('my-user--' + username);

                $(this).find('.robin--username').before(del);

                console.log('adding message for', username);

                filteredMessages.append($(this));
            }
        });

    });

})();
