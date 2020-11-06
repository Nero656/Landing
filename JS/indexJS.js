let open = document.getElementById("but1");
let close = document.getElementById("but2");
let brandName = document.getElementById('BrandName');
let menuBoard = document.getElementById("Menu-Board");

let speedFrame = 5;


//Menu board
open.onclick = function()
{
  let pos = 960;
  let id = setInterval(frame, speedFrame);



    function frame()
    {
      if (pos >= -10)
      {
        clearInterval(id);
      }
      if (menuBoard.style.display != "none")
      {
        brandName.style.transform ='translateX(-1350px)';
        open.style.transform ='translateX(-1350px)';

        pos+=5;
        menuBoard.style.transform = 'translateX('+pos+'px)';
      }
    }

}

close.onclick = function() {
  let pos = 0;
  let id = setInterval(frame, speedFrame);

  // brandName.style.display ='flex';
  // open.style.display ='flex';

  function frame()
  {
    if (pos <= -900)
    {
      clearInterval(id);
    }
    if (menuBoard.style.display != "none")
    {
      brandName.style.transform ='translateX(10px)';
      open.style.transform ='translateX(10px)';
      pos-=25;
      menuBoard.style.transform = 'translateX('+pos+'px)';
    }
  }
}
