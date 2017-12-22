$(document).ready(function() {
  var $btn = $('#submit');
  $btn.attr("disabled", true);

  var inputUser = $('#username');
  $(inputUser).keydown(function () {
    if(inputUser.val().length >= 3){
      $('p:first-of-type span').hide();
    } else {
      $('p:first-of-type span').show();
    }
  })

  var passwordUser = $('#password');
  $(passwordUser).keydown(function () {
    if(passwordUser.val().length >= 6){
      $('p:nth-of-type(2) span').hide();
    } else {
      $('p:nth-of-type(2) span').show();
    }
  })

  var passConfirm = $('#confirm_password');
  $(passConfirm).keydown(function () {
    if(passConfirm.val().length >= 6){
      $('p:nth-of-type(3) span').hide();
    } else if(passwordUser.val === passConfirm.val) {
      $btn.attr("disabled", false);
    }else {
      $('p:nth-of-type(3) span').show();
    }
  })
})
