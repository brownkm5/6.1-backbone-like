var $ = require('jquery');
var Like = require('./models/like').Like;


var like = new Like();

$('.like-button').on('click', function(){
  like.addOneLike();
  like.toJSON();
})
