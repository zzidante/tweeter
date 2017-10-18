// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */

$(function() {
   
  var tweetData = {
    "user": { 
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png", // tweet-user-icon
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": { 
      "text": "If I have seen further it is by standing on the shoulders of giants" // tweet-body TEXT
    },
    "created_at": 1461116232227  
  }


  function createTweetElement(tweetData) {
    var tweet = $(`<article class="new-tweet tweet-post">
      <header class="tweet-user-info">
        <img class="tweet-user-icon" src =${tweetData.user.avatars.regular}>
        <h3 class="tweet-author">${tweetData.user.name}</h3>
        <h6 class ="username-handle">${tweetData.user.handle}</h6>
      </header>

      <div class="tweet-body">
        <p>${tweetData.content.text}</p>
      </div>

      <footer class="tweet-footer">
        <p class="post-days-ago">${tweetData.created_at}</p>
        <div class="mini-icon-group">
          <img class="mini-click-icons" tag="flag" src="http://simpleicon.com/wp-content/uploads/flag.png">
          <img class="mini-click-icons" tag="retweet" src="http://simpleicon.com/wp-content/uploads/retweet.png">
          <img class="mini-click-icons" tag="like" src="https://cdn0.iconfinder.com/data/icons/very-basic-android-l-lollipop-icon-pack/24/like-128.png">
        </div>
        <div class="tweet-divider"></div>
      </footer>
    </article>`)
    return tweet;
  } 


var $tweet = createTweetElement(tweetData);
$('#tweet-feed').append($tweet); 
console.log($tweet);
});
