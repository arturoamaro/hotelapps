var ls = {
    registroLocal: function(){
        //agregar llave
        window.localStorage.setItem("nom", device.uuid);
        window.location.href = "#home";
    },
    estaRegistrado: function(){
        var nom = window.localStorage.getItem("nom");
        if(nom != undefined)
            return true;
        else return false;
    }
}