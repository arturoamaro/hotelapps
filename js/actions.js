var fn = {
  init: function(){
      //var x = false;
      
      if(!fn.estaRegistrado())
          window.location.href = '#registro';
      $("#regSend").click(fn.getReg);
      $("#tomarFoto").click(mc.start);
  },
    deviceready:function(){
        document.addEventListener("deviceready", fn.init, false);
    },
    estaRegistrado:function(){
        if(window.localStorage.getItem('uuid') != undefined){
            return true;
        }else{
            return false;
        }
    }
    ,
    getReg:function (){
        var nom = $("#regNom").val();
        var tel = $("#regTel").val();
        var mail = $("#regMail").val();
        var foto = $("#tomarTomada").attr("rel");
        //var nom = document.getElementById("regNom").value;
        if(nom != "" &&tel != "" && mail !="" && foto!= undefined && foto!=""){//
            //alert(nom +" - "+ tel +" - "+ mail);
            fn.enviarRegistro(nom,mail,tel,foto);
        }else{
            //alert("Todos los campos son requeridos")
            navigator.notification.alert('Todos los campos son requeridos');
        }
    },
    enviarRegistro: function(nombre, mail, telefono, foto){
        $.ajax({
              method: "POST",
              url: "http//carlos.igitsoft.com/apps/test.php",
              data: { 
                  nom: nombre, 
                  mail: mail,
                  tel: telefono
              }
        }).done(function( msg ) {
            if(msg == 1){
                //ENVIAR FOTO   
                ft.start(foto);
                
            }else{
                alert("datos incorrectos")
            }
        });
    }
};
//window.addEventListener("load",fn.init,false);
//$(document).ready(fn.init);
//comentar linea de abajo cuando la app este lista para compilar
//$(fn.init)
//descomentar la linea de abajo cuando la app este lista
$(fn.deviceready);
