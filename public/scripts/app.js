// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */

$(function() {
   
  var data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  function renderTweets(tweetsData) {
    tweetsData.forEach(function (tweet) {
      $('#tweet-feed').append(createTweetElement(tweet)); 
    });
  }

  function createTweetElement(tweetData) {
    console.log(tweetData);
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

  renderTweets(data);

// var $tweet = createTweetElement(tweetData);
// $('#tweet-feed').append($tweet); 
// console.log($tweet);


  // Define another function renderTweets in the same file. This function can be responsible for taking in an 
  // array of tweet objects and then appending each one to the #tweets-container. In order to do this, the 
  // renderTweets will need to leverage the createTweetElement function you wrote earlier by passing to it the 
  // tweet object, using the returned jQuery object by appending it to the #tweets-container section.
  
});
