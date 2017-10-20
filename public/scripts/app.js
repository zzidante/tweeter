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

  function loadTweets () {
    $.ajax({
      url: "/tweets",
      method: "get",
      dataType: "json"
    }).done(function (data) {
      $('#tweet-feed').html(compiledTweetTemplate(data));
    });
  }


  // Compose Button Click Toggle Logic 

  $("#compose-tweet-button").on("click", function () {
    $("section.new-tweet").slideToggle(400);
  })


  tweetForm.submit(function(event) {
    event.preventDefault();
    var newTweetForm = this;
    var newTweetSerialize = $(this).serialize();
    var tweetTextArea = $('.tweet-user-input').val();  

    if (tweetTextArea.length && tweetTextArea !== " ") {
      if (tweetTextArea.length > 140) {
        tweetForm 
          .append('<span class="new-tweet-warning">Characters cannot exceed 140 characters. Try again!</span>');        
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
    loadTweets();
});


// compose-tweet-button 