var FollowToggle = require('./follow_toggle.js');
$(function(){
  var buttons = $(".follow-toggle");
  buttons.each(function(idx, el) {
    new FollowToggle(el)
  });


});
