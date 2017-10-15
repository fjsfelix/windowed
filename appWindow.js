window.jQuery = window.$ = module.exports;


if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

if (localStorage.getItem('accountName1') !== null){
  $("#accountName1").text(localStorage.getItem('accountName1'));
}
if (localStorage.getItem('accountName2') !== null){
  $("#accountName2").text(localStorage.getItem('accountName2'));
}
if (localStorage.getItem('accountName3') !== null){
  $("#accountName3").text(localStorage.getItem('accountName3'));
}
if (localStorage.getItem('accountName4') !== null){
  $("#accountName4").text(localStorage.getItem('accountName4'));
}
if (localStorage.getItem('accountName5') !== null){
  $("#accountName5").text(localStorage.getItem('accountName5'));
}


$('.back').click(function(){
  $('.currentTab')[0].goBack();
});

$('.forward').click(function(){
  $('.currentTab')[0].goForward();
});

$('.refresh').click(function(){
  $('.currentTab')[0].reload();
});

$('.tab').click(function(){
  $('.tab-bar').toggleClass('hide');
});

$('.gear').click(function(){
  $('.bar').toggleClass('hide');
});

$('.go-btn').click(function(){
  url = $('.search').val();
  $('.currentTab')[0].loadURL(url);
});

$('.info').click(function(){
  $('.currentTab')[0].loadURL("http://windowed.io/about");
});

$('#session5btn').click(function(){
  $('.currentbtn').toggleClass('currentbtn');
  $('#session5btn').toggleClass('currentbtn');
  $('.currentTab').toggleClass('hide');
  $('.currentTab').toggleClass('currentTab');
  $('#webWindow5').toggleClass('hide');
  $('#webWindow5').toggleClass('currentTab');
});

$('#session4btn').click(function(){
  $('.currentbtn').toggleClass('currentbtn');
  $('#session4btn').toggleClass('currentbtn');
  $('.currentTab').toggleClass('hide');
  $('.currentTab').toggleClass('currentTab');
  $('#webWindow4').toggleClass('hide');
  $('#webWindow4').toggleClass('currentTab');
});

$('#session3btn').click(function(){        
  $('.currentbtn').toggleClass('currentbtn');
  $('#session3btn').toggleClass('currentbtn');
  $('.currentTab').toggleClass('hide');
  $('.currentTab').toggleClass('currentTab');
  $('#webWindow3').toggleClass('hide');
  $('#webWindow3').toggleClass('currentTab');
});

$('#session2btn').click(function(){
  $('.currentbtn').toggleClass('currentbtn');
  $('#session2btn').toggleClass('currentbtn');
  $('.currentTab').toggleClass('hide');
  $('.currentTab').toggleClass('currentTab');
  $('#webWindow2').toggleClass('hide');
  $('#webWindow2').toggleClass('currentTab');
});

$('#session1btn').click(function(){
  $('.currentbtn').toggleClass('currentbtn');
  $('#session1btn').toggleClass('currentbtn');
  $('.currentTab').toggleClass('hide');
  $('.currentTab').toggleClass('currentTab');
  $('#webWindow1').toggleClass('hide');
  $('#webWindow1').toggleClass('currentTab');
});


// $('#editName1').click(function(){
//   $('#accountEdit1').toggleClass('hide');
//   $('#accountEdit1').val($('#accountName1').text());
//   $('#accountName1').toggleClass('hide');
// });

$('.editNameBtn').click(function(){
  var btnValue = $(this).attr('sessionID');
  $('#accountEdit' + btnValue).toggleClass('hide');
  $('#accountEdit' + btnValue).val($('#accountName' + btnValue).text());
  $('#accountName' + btnValue).toggleClass('hide');
  $('#saveName' + btnValue).toggleClass('hide');
  $(this).toggleClass('hide');
})

$('.saveName').click(function(){
  var btnValue = $(this).attr('sessionID');
  var id = 'accountName'+ btnValue;
  var NewName = $('#accountEdit' + btnValue).val();

  localStorage.setItem(id, NewName);

  $('#editName' + btnValue).toggleClass('hide');
  $('#accountEdit' + btnValue).toggleClass('hide');
  $('#accountName' + btnValue).toggleClass('hide');
  $('#accountName' + btnValue).text(NewName);

  $(this).toggleClass('hide');
})



// $('.edit-name').click(function(){
//   localStorage.setItem('accountName1', 'testing');
//   $('.edit-name').css("color", "red");
// });

// $('.edit-name2').click(function(){
//   var x = localStorage.getItem('hi')
//   $('.edit-name2').append(x);
// });

