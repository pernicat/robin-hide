# robin-hide
Quick dirty script for hiding users on reddit.com/robin

Contributions Welcome

## Use robin-grow instead.

Recomend using [robin-grow](https://github.com/vartan/robin-grow) instead of this script. It has more features and is better supported. 

## New TamperMonkey Script

I have created a script that can be run from TamperMonkey or similar. It is smother and has delete buttons by user post. It is a work in progress.


1. Install [TamperMonkey](https://tampermonkey.net/)
2. Install [robin-hide.js](https://github.com/pernicat/robin-hide/raw/master/robin-hide.user.js)
3. Reload the chat.

## Old developer console way

Copy and paste this into the developer console.

```javascript
var h=[];setInterval(function(){$.each(h,function(i,v){$('.robin--username:contains('+v+')').parent().remove();});},100);
```

Add users to hide by typing this in the developer console (replace username with the name of the user to hide).

```javascript
h.push("username")
```

You can also run this script to put a "block" button by each user. (only works with old messages)
```javascript
$('#robinChatWindow .robin--username').before($('<button>block</button>').click(function(){h.push($(this).siblings('.robin--username').text())}));
```

The hide user list does not carry over after merges. To get a list of everyone you added type `h` in the developer console. You can then use that list to share or carry over to the next merge.

```javascript
h.push("user1", "user2", "etc")
```

This script will hide messages containing the given content (default is to block autovoter spam and things with "卐").

```javascript
h_m=['Autovoter', '卐'];setInterval(function(){$.each(h_m,function(i,v){$(".robin-message--message:contains("+v+")").parent().remove()})},100)
```

To add new words/content to the block list by typing this into the developer console.
```javascript
h_m.push("content to block here", "more content to block")
```

Recomended Content removes autovoters and the actual vote commands
```javascript
h_m.push("Autovoter", "Robin-Grow", "voted to GROW", "voted to STAY", "voted to ABANDON")
```


## TODO

- [x] Find better function than "setInterval" (makes ui jerky)
- [ ] This could use lots of improvements and is not very user friendly.
- [x] Fix block button to appear on new messages.
- [x] Fix scolling.

## Other usefull scripts

Scripts that other users have created. If you know of a usefull script I would be happy to add it to the list.

- https://github.com/gardner/robin
- http://pastebin.com/qMjsyYG0
- https://www.reddit.com/r/joinrobin/comments/4cz32p/comprehensive_spamblocking_scripts_for_web/
- https://github.com/keythkatz/Robin-Autovoter/
- https://www.reddit.com/r/joinrobin/comments/4czbr7/how_to_muteignore_spammers/
