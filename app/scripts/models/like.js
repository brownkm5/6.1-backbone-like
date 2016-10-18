var Backbone = require('backbone');
var $ = require('jquery');

var Like = Backbone.Model.extend({
  defaults: {
    likes: 0
  },
  addOneLike: function(){
    var newLikes= this.get('likes') + 1;
    this.set('likes', newLikes);
    return newLikes;
  },
  toJSON: function(){
    var likes;
    if (this.get('likes') === 1) {
      likes = ' Like';
    }
    else {
      likes = ' Likes';
    }
    $('.likes').html(this.get('likes') + likes);
  }
});


module.exports = {
  'Like' : Like
};
