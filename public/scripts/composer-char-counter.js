$(function() {
  var maxNumCharacters = 140;  

  $('.new-tweet textarea').on('keyup', function () {
    var counterLength = $(this).val().length;
    var tweetCharacterCount = maxNumCharacters - counterLength;
    var counterDisplayNumber = $(this).parent().find('.counter').html(tweetCharacterCount);

    if (tweetCharacterCount <= 0) {
      counterDisplayNumber.css('color', 'red')
    } else {
      counterDisplayNumber.css('color', "")  // reset back to original color
    }
  });
});

// ternary: tweetCharacterCount <= 0 ? counterDisplayNumber.css('color', 'red') : counterDisplayNumber.css('color', "");
