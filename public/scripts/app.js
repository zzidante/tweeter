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

  // Handlebars Helper to Convert Time to Template

  Handlebars.registerHelper("momentJS", function(time) {
    return moment(time).fromNow();
  }); 
  
  // Handlebars Templating to Add Tweet Feed

  var tweetTemplate = $('#tweet-template').html();
  var compiledTweetTemplate = Handlebars.compile(tweetTemplate);
  $("#tweet-feed").html(compiledTweetTemplate(data));


  // HTML Template Variables
  
  var tweetForm = $('#new-tweet-form');
  var newTweetTextArea = $('.new-tweet textarea');
  var newTweetErrorText = $('span.new-tweet-warning');   // why can't I use that to remove 0 length error warning?

  // New Tweet Form Submission Helper Functions

function addZeroTextWarning() {
    tweetForm
    .append('<span class="new-tweet-warning">You must have forgotten to insert some text! Try again!</span>')
};

function removeZeroTextWarning() {
  newTweetTextArea.focus(function(event) {
    $('span.new-tweet-warning').remove();
    $('.counter').html(140);    // remove leftover red on reset
  });
}

function addZeroTextWarning() {
    tweetForm
    .append('<span class="new-tweet-warning">You must have forgotten to insert some text! Try again!</span>')
};

  // New Tweet Form Submission
  
  tweetForm.submit(function(event) {
    event.preventDefault();
    var newTweetForm = this;
    var newTweetSerialize = $(this).serialize();
    var tweetTextArea = $('.tweet-user-input').val();

  // if tweetTextArea is populated   

    if (tweetTextArea.length) {

  // check that length is under 140 characters

      if (tweetTextArea.length > 140) {
        tweetForm
          .append('<span class="new-tweet-warning">Characters cannot exceed 140 characters. Try again!</span>')
          newTweetTextArea.focus(function(event) {
            newTweetErrorText.remove();
          newTweetTextArea.val('');
        });

      } else {
        $.ajax({
          url: "/tweets",
          method: "post",
          data: newTweetSerialize
        }).done(function() {     
          newTweetForm.reset();
          loadTweets();
        }); 
      }
    } else {
      addZeroTextWarning();
      removeZeroTextWarning();  // add condition for empty space.
    }
  });

    function loadTweets () {
      $.ajax({
        url: "/tweets",
        method: "get",
        dataType: "json"
      }).done(function (data) {
        $('#tweet-feed').html(compiledTweetTemplate(data));
      });
    }
    loadTweets();
});




// The user should be given an error that their 
// tweet content is too long or that it is not present 
// (ideally separate messages for each scenario)
// The form should not be cleared
// The form should not submit
