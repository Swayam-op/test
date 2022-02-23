var count=0;
var game=false;



function valueSet(ID)
{
    if(document.getElementById(ID).innerHTML=="" && game==false)
    {
        
        if(count%2==0)
        {
          
            document.getElementById(ID).style.color="red"; 
            document.getElementById(ID).innerHTML="X"; 
            count++;
            
           
        }
        else{
           
            document.getElementById(ID).style.color="green";
            document.getElementById(ID).innerHTML="O";
            count++;
           
        }
        game=check();
        if(game==true)
        {
            endOfGame(document.getElementById(ID).innerHTML);
        }
        if(count==9 && game==false)
        {
            draw();
        }
    }
   
}

function check()
{
    var v1=document.getElementById("box1").innerHTML;
    var v2=document.getElementById("box2").innerHTML;
    var v3=document.getElementById("box3").innerHTML;
    var v4=document.getElementById("box4").innerHTML;
    var v5=document.getElementById("box5").innerHTML;
    var v6=document.getElementById("box6").innerHTML;
    var v7=document.getElementById("box7").innerHTML;
    var v8=document.getElementById("box8").innerHTML;
    var v9=document.getElementById("box9").innerHTML;
    if(
        (v1==v2 && v2==v3 && v1!="") || (v4==v5 && v5==v6 && v4!="") || (v7==v8 && v8==v9 && v7!="") ||
        (v1==v4 && v4==v7 && v1!="") || (v2==v5 && v5==v8 && v2!="") || (v3==v6 && v6==v9 && v3!="") || 
        (v1==v5 && v5==v9 && v1!="") || (v3==v5 && v5==v7 && v3!=""))
     
       
    {
        return true;
    }
   return false;
}

  function endOfGame(player)
  {
      var p1=document.getElementById("player-1").value;
      var p2=document.getElementById("player-2").value;
      if(player=="X")
      {
          document.getElementById("playerwin").innerHTML=p1;
          document.getElementById("playerlose").innerHTML=p2;

      }
      else{
        document.getElementById("playerwin").innerHTML=p2;
        document.getElementById("playerlose").innerHTML=p1;
      }
    document.getElementById("endOf").style.transform="scale(1)";
  }
  function draw()
  {
      document.getElementById("draw").style.transform="scale(1)";
  }
  function startGame()
  {
      document.getElementById("game_board").style.transform="scale(1)";
  }
  function playAgain()
  {
      count=0;
      game=false;

      document.getElementById("box1").innerHTML="";
      document.getElementById("box2").innerHTML="";
      document.getElementById("box3").innerHTML="";
      document.getElementById("box4").innerHTML="";
      document.getElementById("box5").innerHTML="";
      document.getElementById("box6").innerHTML="";
      document.getElementById("box7").innerHTML="";
      document.getElementById("box8").innerHTML="";
      document.getElementById("box9").innerHTML="";


      document.getElementById("endOf").style.transform="scale(0)";
      document.getElementById("draw").style.transform="scale(0)";
  }
// (v1==v2 && v2==v3 && v1!="") || (v4==v5 && v5==v6 && v5!="") || (v7==v8 && v9==v10 && v7!="")
// (v1==v4 && v4==v7 && v1!="") || (v2==v5 && v5==v8 && v2!="") || (v3==v6 && v6==v9 && v3!="")
// (v1==v5 && v5==v9 && v1!="") || (v3==v5 && v5==v7 && v3!="")