/*const iconoMenu = document.querySelector('#icono-menu'),
    menu =document.querySelector('#menu');

    iconoMenu.addEventListener('click', (e) => {
      

        //alternamos estilos para el body y menu

        menu.classlist.toggle('active');
        document.body.classList('opacity')

       const rutaActual = e.target.getAttribute('src');

       if(rutaActual == './open-menu.png') {
         e.target.setAttribute('src','./open-menu.png2');
       }else{
        e.target.setAttribute('src','./open-menu.png2');
       }
    
    });*/

    const iconoMenu = document.querySelector('#icono-menu')
       menu = document.querySelector('#menu')
    


     iconoMenu.addEventListener('click', (e ) => {
     //alternamos estilos para el menu y body 
        menu.classList.toggle('active');
        document.body.classList.toggle('opacity');

     
   //alternamos el src para icono menu
        const rutaActual = e.target.getAttribute('src');

       if(rutaActual == './open-menu.png') {
         e.target.setAttribute('src','./open-menu2.png');
       }else{
        e.target.setAttribute('src','./open-menu.png');
       }
    
    } )