$(function() {

  // Handlebars Helper to Convert Time to Template

  Handlebars.registerHelper("momentJS", function(time) {
    return moment(time).fromNow();
  }); 
  

  // Handlebars Templating to Add Tweet Feed

  var tweetTemplate = $('#tweet-template').html();
  var compiledTweetTemplate = Handlebars.compile(tweetTemplate);
  $("#tweet-feed").html(compiledTweetTemplate());


  // HTML Template Variables
  
  var tweetForm = $('#new-tweet-form');
  var newTweetTextArea = $('.new-tweet textarea');
  var newTweetErrorText = $('span.new-tweet-warning');


  // New Tweet Form Submission Helper Functions

  function addZeroTextWarning() {
    if ($('.new-tweet-warning').length <= 0) {
      tweetForm
      .append('<span class="new-tweet-warning">You must have forgotten to insert some text!</span>');
    }
  };

  function removeZeroTextWarning() {
    console.log("Remove function fired")
    newTweetTextArea.focus(function(event) {
      $('span.new-tweet-warning').remove();
      $('.counter').html(140);
    });
  }

  function loadTweets () {
    $.ajax({
      url: "/tweets",
      method: "get",
      dataType: "json"
    }).done(function (data) {
      $('#tweet-feed').html(compiledTweetTemplate(data));
    });
  }

  function checkIfTweetsValidPostIfYes(newTweetForm, newTweetSerialize, tweetTextArea) {
    if (tweetTextArea.length && tweetTextArea !== " ") {
      if (tweetTextArea.length > 140) {
        if ($('.new-tweet-warning').length <= 0) {          
          tweetForm 
            .append('<span class="new-tweet-warning">Characters cannot exceed 140 characters. Try again!</span>');  
            newTweetTextArea.focus(function(event) {
              $('span.new-tweet-warning').remove();
            });
          }
      } else {
        $('.counter').html(140);
        newTweetTextArea.val('');

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
      removeZeroTextWarning();
    }
  }

  // Compose Button Click Toggle Logic 

  $("#compose-tweet-button").on("click", function () {
    $("section.new-tweet").slideToggle(400);
    newTweetTextArea.focus();

  })


  // Post New Tweet

  tweetForm.submit(function(event) {
    event.preventDefault();
    var newTweetForm = this;
    var newTweetSerialize = $(this).serialize();
    var tweetTextArea = $('.tweet-user-input').val().trim();

    checkIfTweetsValidPostIfYes(newTweetForm, newTweetSerialize, tweetTextArea);
  });


  // Get tweets

    loadTweets();
});
