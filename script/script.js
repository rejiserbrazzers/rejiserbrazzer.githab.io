
$(document).ready(function(){
    $("menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

              
                
           function RandomInfo(){
           var arr = [" Привет Меня   зовут Никита. <br> Я очень люблю программировать , особенно люблю С#","Хочу выучить и довести до идеала JS , PHP and C#", "Мне 20", "Знаю HTML5 и могу уверенно делать задания ", "ЗНАЮ JS на уровне универа "  ,"Люблю кисок , та и вообще животных " ,"Учусь в ЧНУ " , "ЛЮБИМАЯ ЕДА ПИЦЦА, суши , салат и мамкин Суп ", "ЛЮБИМЫЙ СЕРИАЛ : Мистер РОбот" ,"ЛЮБЛЮ ВИКУ"  ,"ЛЮБИМАЯ КНИГА:Не могу назвать именно книгу но есть авторі которіх я люблю например Бредбери , Гюго , Толкин  ", "ХОЧУ В ТЕМПЛЕЙТ","ЛЮБЛЮ АНИМЕ"];
           var rand = Math.floor(Math.random() * arr.length);
        
            
          
               
      
     
document.getElementById('demo').innerHTML=arr[rand];
             

            }
                
            