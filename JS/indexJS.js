var open = document.getElementById("but1");
var close = document.getElementById("but2");
var menuBoard = document.getElementById("Menu-Board");
var speedFrame = 1;

open.onclick = function()
{
  var pos = -250;
  var id = setInterval(frame, speedFrame);


    function frame()
    {
      if (pos >= -12)
      {
        clearInterval(id);
      }
      if (menuBoard.style.display != "none")
      {
        pos+=10;
        menuBoard.style.marginLeft = pos + 'px';
      }
    }
}

close.onclick = function() {
  var pos = 0;
  var id = setInterval(frame, speedFrame);

  function frame()
  {
    if (pos <= -291)
    {
      clearInterval(id);
    }
    if (menuBoard.style.display != "none")
    {
      pos-=5;
      menuBoard.style.marginLeft = pos + 'px';
    }
  }
}
