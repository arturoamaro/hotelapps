var conexion ={
    estaConectado: function(){
        if(navigator.connection.type != Connection.NONE){
            return true;
        }
            return false;
    },
    eventoConectado:function(){
        alert("1");
        document.addEventListener("online",almacen.syncData, false);
    }
}