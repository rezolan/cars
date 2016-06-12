
var menu = '';
menu +='<figure class="fast">'; 
            menu +='<a href="index.html" class="ref-head">';
                menu +='<img src="img/icon.png" alt="logo-car"></a>';    
                menu +='<figcaption class="fastcaption"><a href="index.html" class="ref-head">Fast-Auto.com</a></figcaption>';
//            menu +='</a>';
        menu +='</figure>';
         menu +='<h1>Добро пожаловать на Fast Auto</h1>';
         menu +='<nav>';
            menu +='<ul class="nav">';
                menu +='<li class="float">';
                    menu +='<a href="index.html">';
                        menu +='Главная';
                    menu +='</a>';
                menu +='</li>';
                menu +='<li class="float"><a href="">Каталог</a>';
                    menu +='<ul class="hidden">';
                        menu +='<li>';
                            menu +='<a href="japaniscars.html">';
                                menu +='Японские';
                            menu +='</a>';
                        menu +='</li>';
                        menu +='<li>';
                            menu +='<a href="usa.html">';
                               menu +=' Американские';
                            menu +='</a>';
                        menu +='</li>';
                        menu +='<li>';
                            menu +='<a href="german.html">';
                                menu +='Немецкие';
                            menu +='</a>';
                        menu +='</li>';
                
                        menu +='<li>';
                            menu +='<a href="italic.html">';
                                menu +='Итальянские';
                            menu +='</a>';
                        menu +='</li>';
                    menu +='</ul> ';
                menu +='</li>';
                
                menu +='<li class="float">';
                   menu +='<a href="contact.html">Контакты</a>';
                          
                menu +='</li>';
              
            menu +='</ul> ';          
        menu +='</nav>';

document.getElementById('header').innerHTML = menu;


//var menu2='hello';
//
//document.getElementById('one').innerHTML = menu2;