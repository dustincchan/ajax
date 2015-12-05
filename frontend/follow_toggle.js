function FollowToggle(el) {
  this.$el = $(el);
  this.userId = this.$el.data("id");
  this.followState = this.$el.data("initialFollowState");
  this.render();
  this.$el.on("click", this.handleClick.bind(this));
}

FollowToggle.prototype.render = function () {
  if (this.followState === "followed") {
    this.$el.html("Unfollow!")
  } else {
    this.$el.html("Follow!")
  }
};

FollowToggle.prototype.handleClick = function () {
  var verb;
  if (this.followState === "followed") {
    verb = "DELETE";
  } else {
    verb = "POST";
  }
  event.preventDefault();
    $.ajax({
      url: "/users/" + this.userId + "/follow",
      type: verb,
      dataType: "json",
      success: function () {
        console.log('woohoo!!');
      }
    });
};
// user_follow POST   /users/:user_id/follow(.:format) follows#create


module.exports = FollowToggle;
