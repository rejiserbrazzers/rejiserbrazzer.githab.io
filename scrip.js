function checkWinner(){
    var allblock = document.getElementsByClassName('block');
    //console.log(allblock);
    
    if(allblock[0].innerHTML=='x' && allblock[1].innerHTML=='x' && allblock[2] =='x')
        {
            alert("X WINS");
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
      
         
    checkWinner();
 
        }
}



}
    
    



