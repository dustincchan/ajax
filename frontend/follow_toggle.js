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
  } else if (this.followState === "unfollowed"){
    this.$el.html("Follow!")
  } else if (this.followState === "unfollowing") {
    this.$el.html("unfollowing..");
  } else if (this.followState === "following") {
    this.$el.html("following..")
  }
};

FollowToggle.prototype.handleClick = function () {
  var verb;
  if (this.followState === "followed") {
    verb = "DELETE";
    this.followState = "unfollowing";
  } else {
    verb = "POST";
    this.followState = "following";
  }
  this.render();
  var fn = this;
  event.preventDefault();
  fn.$el.prop("disabled", true);
    $.ajax({
      url: "/users/" + this.userId + "/follow",
      type: verb,
      dataType: "json",
      success: function () {
        fn.toggleState();
        fn.$el.prop("disabled", false);
        fn.render();
      }
    });
    console.log(this.followState);
};
// user_follow POST   /users/:user_id/follow(.:format) follows#create
FollowToggle.prototype.toggleState = function () {
    this.followState === "following" ?
    this.followState = "followed" : this.followState = "unfollowed";
};

module.exports = FollowToggle;
