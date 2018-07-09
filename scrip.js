function checkWinner(){
    var allblock = document.getElementsByClassName('block');
    //console.log(allblock);
    
    if(allblock[0].innerHTML=='x' && allblock[1].innerHTML=='x' && allblock[2].innerHTML =='x' )
        {
            alert("X WINS");
        }
    
  
    if(allblock[3].innerHTML == 'x' && allblock[4].innerHTML=='x' && allblock[5].innerHTML=='x')
        {
                    alert("X WINS");
        }

    if(allblock[6].innerHTML == 'x' && allblock[7].innerHTML=='x' && allblock[8].innerHTML=='x')
        {
                    alert("X WINS");
        }

     if(allblock[0].innerHTML == 'x' && allblock[3].innerHTML=='x' && allblock[6].innerHTML=='x')
        {
                    alert("X WINS");
        }
     if(allblock[1].innerHTML == 'x' && allblock[4].innerHTML=='x' && allblock[7].innerHTML=='x')
        {
                    alert("X WINS");
        }
     if(allblock[2].innerHTML == 'x' && allblock[5].innerHTML=='x' && allblock[8].innerHTML=='x')
        {
                    alert("X WINS");
        }
        
      if(allblock[0].innerHTML == 'x' && allblock[5].innerHTML=='x' && allblock[8].innerHTML=='x')
        {
                    alert("X WINS");
        }
      if(allblock[4].innerHTML == 'x' && allblock[5].innerHTML=='x' && allblock[8].innerHTML=='x')
        {
                    alert("X WINS");
        }
      if(allblock[8].innerHTML == 'x' && allblock[5].innerHTML=='x' && allblock[8].innerHTML=='x')
        {
                    alert("X WINS");
        }
    
    
    
      if(allblock[0].innerHTML == 'x' && allblock[4].innerHTML=='x' && allblock[8].innerHTML=='x')
        {
                    alert("X WINS");
        }
      if(allblock[2].innerHTML == 'x' && allblock[4].innerHTML=='x' && allblock[6].innerHTML=='x')
        {
                    alert("X WINS");
        }
    
    
    
    //////////////////////////////////////////////////////////////////////////////
    
    
    
     if(allblock[0].innerHTML=='O' && allblock[1].innerHTML=='O' && allblock[2].innerHTML =='O' )
        {
            alert("O WINS");
        }
    
  
    if(allblock[3].innerHTML == 'O' && allblock[4].innerHTML=='O' && allblock[5].innerHTML=='O')
        {
                 alert("O WINS");
        }

    if(allblock[6].innerHTML == 'O' && allblock[7].innerHTML=='O' && allblock[8].innerHTML=='O')
        {
                    alert("O WINS");
        }

     if(allblock[0].innerHTML == 'O' && allblock[3].innerHTML=='O' && allblock[6].innerHTML=='O')
        {
                   alert("O WINS");
        }
     if(allblock[1].innerHTML == 'O' && allblock[4].innerHTML=='O' && allblock[7].innerHTML=='O')
        {
                    alert("O WINS");
        }
     if(allblock[2].innerHTML == 'O' && allblock[5].innerHTML=='O' && allblock[8].innerHTML=='O')
        {
                    alert("O WINS");
        }
        
      if(allblock[0].innerHTML == 'O' && allblock[5].innerHTML=='O' && allblock[8].innerHTML=='O')
        {
                    alert("O WINS");
        }
      if(allblock[4].innerHTML == 'O' && allblock[5].innerHTML=='O' && allblock[8].innerHTML=='O')
        {
                     alert("O WINS");
        }
      if(allblock[8].innerHTML == 'O' && allblock[5].innerHTML=='O' && allblock[8].innerHTML=='O')
        {
                    alert("O WINS");
        }
    
      if(allblock[0].innerHTML == 'O' && allblock[4].innerHTML=='O' && allblock[8].innerHTML=='O')
        {
                   alert("O WINS");
        }
      if(allblock[2].innerHTML == 'O' && allblock[4].innerHTML=='O' && allblock[6].innerHTML=='O')
        {
                     alert("O WINS");
        }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}
  window.onload = function(){
for (var i=0; i<9 ; i++){
    
    document.getElementById('gam').innerHTML+='<div class = "block"></div>';  
}

      var hod = 0;
      
      
document.getElementById('gam').onclick = function(event){    
    console.log(event);
    if(event.target.className =='block'){
        if(hod % 2==0){
                 event.target.innerHTML = 'O';  
     hod++;
     checkWinner();
            }
      
        else {
             event.target.innerHTML = 'x';
                hod++;
           checkWinner();
        }
      

 
        }
}



}
    
    



