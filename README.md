# robin-hide
Quick dirty script for hiding users on reddit.com/robin

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

## TODO

[ ] Find better function than "setInterval" (makes ui jerky)
[ ] This could use lots of improvements and is not very user friendly. 
[ ] Fix block button to appear on new messages.
