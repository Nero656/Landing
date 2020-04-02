var open = document.getElementById("but1");
var close = document.getElementById("but2");
var menuBoard = document.getElementById("Menu-Board");

var speedFrame = 1;


//Menu board
open.onclick = function()
{
  var pos = 960;
  var id = setInterval(frame, speedFrame);


    function frame()
    {
      if (pos >= -10)
      {
        clearInterval(id);
      }
      if (menuBoard.style.display != "none")
      {
        pos+=5;
        menuBoard.style.transform = 'translateX('+pos+'px)';
      }
    }
}

close.onclick = function() {
  var pos = 0;
  var id = setInterval(frame, speedFrame);

  function frame()
  {
    if (pos <= -900)
    {
      clearInterval(id);
    }
    if (menuBoard.style.display != "none")
    {
      pos-=25;
      menuBoard.style.transform = 'translateX('+pos+'px)';
    }
  }
}
