# robin-hide
Quick dirty script for hiding users on reddit.com/robin

Copy and paste this into the developer console.

```javascript
var h=[];setInterval(function(){$.each(h,function(i,v){$('.robin--username:contains('+v+')').parent().hide();});},100);
```

Add users to hide by typing this in the developer console (replace username with the name of the user to hide).

```javascript
h.push('username')
```

## TODO

[ ] This could use lots of improvements and is not very user friendly. Just a quick and dirty version to hide users who spam.
