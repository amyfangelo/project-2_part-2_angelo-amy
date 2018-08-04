$(function(){
  $('.input').keyup(function() {

    var empty = false;
    $('.input').each(function(){
      if ($(this).val() == '') {
        empty = true;
      }
    });
    if(empty) {
      $('#submit').attr('disabled', 'disabled');
  } else {
    $('#submit').removeAttr('disabled').addClass('button--primarypink').removeClass('button--disabled');
  }
  });
})();
