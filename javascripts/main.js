var width = 1;
var height = 1;

$('#16x16').on('click', function() {
  $('#startmenu').css('display', 'none');
  $('#startgrid').css('display', 'inline');
  width = 16;
  height = 16;
  $(this).click(newGrid(width, height));
});

$('#30x16').on('click', function() {
  $('#startmenu').css('display', 'none');
  $('#startgrid').css('display', 'inline');
  width = 30;
  height = 16;
  $(this).click(newGrid(width, height));
});

$('#64x64').on('click', function() {
  $('#startmenu').css('display', 'none');
  $('#startgrid').css('display', 'inline');
  width = 64;
  height = 64;
  $(this).click(newGrid(width, height));
});

$('#custom').on('click', function() {
  $('#startmenu').css('display', 'none');
  $('#startgrid').css('display', 'inline');
  width = prompt('Width');
  height = prompt('Height');
  if (!(height>0)) {
    height = width;
  };
  $(this).click(newGrid(width, height));
});


$('#reset').click(function() {
  $('li').css('background-color','#fff');
  $('li').css('opacity','1');
  $('li').hover(function(){
    $(this).css('background-color','#fff');
  });
});

$('#resize').click(function() {
  $('#startgrid').css('display', 'none');
  $('ul').remove();
  $('#startmenu').css('display', 'block');
});

$('#red').click(function() {
  $('li').hover(function(){
    $(this).css('background-color','red')
  });
});

$('#green').click(function() {
  $('li').hover(function(){
    $(this).css('background-color','green')
  });
});

$('#blue').click(function() {
  $('li').hover(function(){
    $(this).css('background-color','blue')
  });
});

$('#random').click(function() {
  $('li').hover(function(){
    var r = Math.floor((Math.random()*255)+1);
    var g = Math.floor((Math.random()*255)+1);
    var b = Math.floor((Math.random()*255)+1);
    var rgbcolor = "rgb("+r+","+g+","+b+")";
    $(this).css('background-color', rgbcolor)
  });
});

$('#shade').click(function() {
  $('li').hover(function(){
    var curOpacity = $(this).css('opacity');
    if (curOpacity > 0) {
      curOpacity -= 0.1;
    } else {
      curOpacity = 0;
    }
    $(this).css('opacity', curOpacity);
    $(this).css('background-color','#fff');
  });
});


function newGrid(width, height) {
  for (var i=1; i<=height; i++) {
    $('#grid').append('<ul></ul>');
  }
  
  for (var i=1; i<=width; i++) {
    $('ul').append('<li></li>');
  }
  
  var pxl = (600/height)-1;
  $('li').css({height: pxl, width: pxl});
};
