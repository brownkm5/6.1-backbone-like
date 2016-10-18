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
    
    //makes the backbone toJSON still work when you change what toJSON does with the above code
    return Backbone.Model.prototype.toJSON.apply(this, [options]);
  }
});


module.exports = {
  'Like' : Like
};
